const challengeModel = require('./challenges-model');
const ivm = require('isolated-vm');

const getChallengeById = async (req, res) => {
    const { id } = req.params

    try {
        const challenge = await challengeModel.getChallengeById(id)

        if (!challenge) {
            return res.status(404).json({ message: 'Challenge not found' })
        }

        res.json(challenge)
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve challenge' })
    }
}

const runCode = async (req, res) => {
    const { code, tests } = req.body;

    // User code is a full function definition, so we just assign it to global.solution
    const wrappedCode = `
        ${code}  // User-provided function
        global.solution = solution;
    `;

    const isolate = new ivm.Isolate({ memoryLimit: 4096 }); // 4096MB memory limit
    const context = await isolate.createContext();
    const jail = context.global;

    // Make the jail object behave like the global object
    await jail.set('global', jail.derefInto());

    try {
        // Compile and run the code in the isolated-vm
        const script = await isolate.compileScript(wrappedCode);
        await script.run(context, { timeout: 4000 }); // Timeout of 4000 ms for code execution

        // Get a reference to the 'solution' function
        const getSolutionFunction = await jail.get('solution', { reference: true });

        const results = await Promise.all(tests.map(async test => {
            const { test_id, expected_output, inputs, is_complex } = test;

            // Convert input values to their appropriate types
            const parsedInputs = Object.entries(inputs).map(([key, { value, type }]) => {
                switch (type) {
                    case 'number':
                        return Number(value);
                    case 'arrayOfIntegers':
                    case 'matrix':
                    case 'arrayOfStrings':
                    case 'boolean':
                        return JSON.parse(value);
                    default:
                        return String(value); // Default is string or any unhandled type
                }
            });

            try {
                // Invoke the solution function inside the isolated-vm using apply, with a timeout of 1000 ms
                const result = await getSolutionFunction.apply(undefined, parsedInputs, { 
                    timeout: 1000, 
                    arguments: { copy: true },
                    result: { copy: true }
                });

                let passed;
                if (is_complex) {
                    passed = areEqual(result, JSON.parse(expected_output));
                } else if (typeof result === 'number' && !Number.isInteger(result)) {
                    passed = areFloatsEqual(result, parseFloat(expected_output));
                } else {
                    passed = String(result) === expected_output;
                }

                return {
                    test_id,
                    passed,
                    expected_output,
                    result: is_complex ? String(result) : result
                };
            } catch (error) {
                // Detect timeout errors
                if (error.message && error.message.toLowerCase().includes('timeout')) {
                    return {
                        test_id,
                        passed: false,
                        expected_output,
                        error: {
                            message: "Execution timed out.",
                        }
                    };
                }

                // General error handling
                return {
                    test_id,
                    passed: false,
                    expected_output,
                    error: {
                        message: error.message,
                        name: error.name,
                    }
                };
            }
        }));

        // Log the results before sending
        // console.log("Results:", JSON.stringify({ results }, null, 2));

        // Send back the results as JSON
        return res.json({ results });
    } catch (error) {
        // If the code throws an error or times out during initial compilation
        // console.error("Error processing the code:", error.message);
        
        // Log the error response before sending
        const errorResponse = { 
            error: "Error processing the code", 
            message: error.message, 
            name: error.name 
        };
        // console.log("Error Response:", JSON.stringify(errorResponse, null, 2));

        // Send the error response
        return res.status(400).json(errorResponse);
    }
};


// Helper for deep comparison
function areEqual(value1, value2) {
    // Check if both are arrays
    if (!Array.isArray(value1) || !Array.isArray(value2)) {
        return false
    }

    // Check if they have the same length
    if (value1.length !== value2.length) {
        return false
    }

    // Deep comparison for each element
    for (let i = 0; i < value1.length; i++) {
        if (Array.isArray(value1[i]) && Array.isArray(value2[i])) {
            if (!areEqual(value1[i], value2[i])) {
                return false
            }
        } else if (value1[i] !== value2[i]) {
            return false
        }
    }

    return true;
}

// Function to compare floating point numbers with tolerance
function areFloatsEqual(result, expected, epsilon = 1e-7) {
    return Math.abs(result - expected) < epsilon;
}

module.exports = {
    getChallengeById,
    runCode
}
