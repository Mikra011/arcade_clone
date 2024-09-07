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

const runCode = async (req, res) => {
    const { code, tests } = req.body

    // Wrap user code correctly
    const wrappedCode = `
        return function() {
            ${code}
            return solution
        }
    `

    let getSolutionFunction

    try {
        // Create a function that returns the user's solution function
        const createSolutionFunction = new Function(wrappedCode)
        getSolutionFunction = createSolutionFunction()
    } catch (error) {
        return res.status(400).json({ error: "Error processing the code: " + error.message })
    }

    // Validate that getSolutionFunction is a function
    if (typeof getSolutionFunction !== 'function') {
        return res.status(400).json({ error: "The generated code does not return a function." })
    }

    const results = tests.map(test => {
        const { test_id, expected_output, inputs, is_complex } = test

        console.log(inputs)
        // Convert input values to their appropriate types
        const parsedInputs = Object.entries(inputs).map(([key, { value, type }]) => {
            switch (type) {
                case 'number':
                    return Number(value)
                case 'arrayOfIntegers':
                    return JSON.parse(value)
                case 'matrix':
                    return JSON.parse(value)
                case 'arrayOfStrings':
                    return JSON.parse(value)
                case 'boolean':
                    return JSON.parse(value)
                default:
                    return String(value) // Default is string or any unhandled type
            }
        })
        console.log(parsedInputs)

        try {
            // Call the solution function with dynamic inputs
            const solutionFunction = getSolutionFunction()
            const result = solutionFunction(...parsedInputs)

            let passed
            if (is_complex) {
                passed = areEqual(result, JSON.parse(expected_output))
            } else {
                passed = String(result) === expected_output
            }
            
            return {
                test_id,
                passed,
                expected_output,
                result: tests.is_complex ? String(result) : result
            }
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
            }
        }
    })

    // Send back the results as JSON
    res.json({ results })
}


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

module.exports = {
    getChallengeDescriptionById,
    runCode
}
