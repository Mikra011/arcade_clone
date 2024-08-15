const db = require('../../data/db-config')

const getTopicsBySection = (sectionId) => {
    return db('topics')
        .select('topic_name', 'topic_img_url')
        .where('section_id', sectionId)
        .orderBy('order_index')
}

module.exports = {
    getTopicsBySection
}