const topicModel = require('./topics-model')

const getTopicsBySection = async (req, res) => {
    const { sectionName } = req.params;
    const user_id = req.decodedJwt.id; // Get user ID from the token

    try {
        const topics = await topicModel.getTopicsBySection(sectionName, user_id); // Pass the user_id to the model
        if (topics.length === 0) {
            return res.status(404).json({ message: 'No topics found for this section' });
        }
        res.status(200).json(topics);
    } catch (error) {
        console.error("Error retrieving topics:", error);
        res.status(500).json({ error: 'Failed to retrieve topics' });
    }
}

module.exports = {
    getTopicsBySection
}