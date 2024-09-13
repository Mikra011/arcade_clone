const challengeModel = require('./challenges-model');

const getChallengeDescriptionById = async (req, res) => {
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

const ivm = require('isolated-vm');

const runCode = async (req, res) => {
    const { code, tests } = req.body;
    
    // Log code type and content for debugging
    console.log("Type of code:", typeof code);
    console.log("Code content:", code);

    // Wrap user code correctly
    const wrappedCode = `
        function solution(param1, param2) {
            ${code}
        }
        solution;
    `;

    let getSolutionFunction;

    try {
        // Create a new isolate and context
        const isolate = new ivm.Isolate({ memoryLimit: 128 }); // Adjust memory limit if needed
        const context = await isolate.createContext();
        const script = await isolate.compileScript(wrappedCode);

        // Run the script to get the solution function
        getSolutionFunction = await script.run(context, { timeout: 1000 });

        if (typeof getSolutionFunction !== 'function') {
            throw new Error("The generated code does not return a function.");
        }

        console.log("Successfully retrieved solution function.");
    } catch (error) {
        return res.status(400).json({ error: "Error processing the code: " + error.message });
    }

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
            // Prepare the function invocation code
            const functionCode = `
                (async function() {
                    const solutionFunction = ${getSolutionFunction.toString()};
                    return await solutionFunction(${parsedInputs.map(input => JSON.stringify(input)).join(', ')});
                })();
            `;

            console.log("Function code:", functionCode);
            console.log("Attempting to run solution function.");

            // Run the function code in the isolated context
            const result = await context.eval(functionCode);

            // Convert result and expected output to strings for comparison
            const resultString = JSON.stringify(result);
            const expectedString = JSON.stringify(is_complex ? JSON.parse(expected_output) : expected_output);

            // Log results for debugging
            console.log("Result:", resultString);
            console.log("Expected Output:", expectedString);

            const passed = resultString === expectedString;

            return {
                test_id,
                passed,
                expected_output,
                result: is_complex ? resultString : result
            };
        } catch (error) {
            return {
                test_id,
                passed: false,
                expected_output,
                error: {
                    message: error.message,
                    stack: error.stack,
                    name: error.name,
                }
            };
        }
    }));

    // Send back the results as JSON
    res.json({ results });
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
    getChallengeDescriptionById,
    runCode
}
