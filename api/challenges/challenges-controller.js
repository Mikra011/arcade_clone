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
        const { test_id, expected_output, inputs } = test

        // Convert input values to their appropriate types
        const parsedInputs = Object.values(inputs).map(value => {
            return isNaN(value) ? value : Number(value)
        })

        try {
            // Call the solution function with dynamic inputs
            const solutionFunction = getSolutionFunction()
            const result = solutionFunction(...parsedInputs)

            // Compare the result with the expected output
            const passed = String(result) === expected_output

            return {
                test_id,
                passed,
                expected_output,
                result: String(result),
            }
        } catch (error) {
            return {
                test_id,
                passed: false,
                expected_output,
                error: error.message,
            }
        }
    })

    // Send back the results as JSON
    res.json({ results })
}


module.exports = {
    getChallengeDescriptionById,
    runCode
}
