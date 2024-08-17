const topicModel = require('./topics-model')

const getTopicsBySection = async (req, res) => {
    const { sectionId } = req.params
    
    try {
        const topics = await topicModel.getTopicsBySection(sectionId)
        if (topics.length === 0) {
            return res.status(404).json({ message: 'No topics found for this section' })
        }
        res.json(topics)
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve topics' })
    }
}

module.exports = {
    getTopicsBySection
}