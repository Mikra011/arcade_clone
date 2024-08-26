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
    res.json({ message: 'POST /code endpoint is working', requestBody: req.body })
}

module.exports = {
    getChallengeDescriptionById,
    runCode
}
