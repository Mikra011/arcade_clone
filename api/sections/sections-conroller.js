const sectionModel = require('./sections-model')

const getAllSections = async (req, res) => {
    try {
        const sections = await sectionModel.getSections()
        res.json(sections)
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve sections' })
    }
}

module.exports = {
    getAllSections
}