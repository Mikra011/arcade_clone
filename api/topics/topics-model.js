const db = require('../../data/db-config')

const getTopicsBySection = async (sectionName) => {
    const topics = await db('topics')
        .select('topic_name', 'topic_img_url', 'id')
        .where('section_name', sectionName)
        .orderBy('order_index');

    // Iterate over each topic to fetch the corresponding challenges
    for (const topic of topics) {
        const challenges = await db('challenges')
            .select('order_index', 'challenge_name', 'id')
            .where('topic_id', topic.id)
            .orderBy('order_index');

        // Add the challenges to the topic object
        topic.challenges = challenges;
    }

    return topics;
}

module.exports = {
    getTopicsBySection
}