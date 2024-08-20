const challengeModel = require('./challenges-model');

const getChallengeDescriptionById = async (req, res) => {
    const { id } = req.params;
    console.log(`Request received for challenge ID: ${id}`); // Debug log

    try {
        const challenge = await challengeModel.getChallengeById(id);
        console.log('Challenge fetched:', challenge); // Debug log

        if (!challenge) {
            return res.status(404).json({ message: 'Challenge not found' });
        }

        res.json({ description: challenge.description });
    } catch (error) {
        console.error('Error fetching challenge description:', error); // Debug log
        res.status(500).json({ error: 'Failed to retrieve challenge' });
    }
};

module.exports = {
    getChallengeDescriptionById
}
