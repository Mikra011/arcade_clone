const db = require('../../data/db-config')

const getTopicsBySection = async (sectionName, userId) => {
    // Fetch topics sorted by order_index
    const topics = await db('topics')
        .select('topic_name', 'topic_img_url', 'topic_img_c_url', 'id', 'order_index')
        .where('section_name', sectionName)
        .orderBy('order_index');

    // Get user's progress in the current section, only completed challenges
    const userProgress = await db('user_progress')
        .select('challenge_id')
        .where('user_id', userId)
        .andWhere('completed', 1);

    // Extract completed challenge IDs
    const completedChallengeIds = userProgress.map(progress => progress.challenge_id);

    let foundAvailableChallenge = false; // Only one challenge should be available

    // Iterate through each topic
    for (const topic of topics) {
        // Fetch challenges sorted by order_index for each topic
        const challenges = await db('challenges')
            .select('order_index', 'challenge_name', 'challenges.id')
            .where('topic_id', topic.id)
            .orderBy('order_index');

        let topicHasAvailableChallenge = false; // To mark topic available if any challenge is available
        let allChallengesCompleted = true; // Track if all challenges in the topic are completed

        // Iterate through the challenges
        for (let i = 0; i < challenges.length; i++) {
            const challenge = challenges[i];

            // Check if the challenge is completed
            challenge.completed = completedChallengeIds.includes(challenge.id) ? 1 : 0;

            // If the challenge is completed, the next one should be marked as available
            if (challenge.completed) {
                challenge.available = false; // Completed challenges are not available
            } else if (!foundAvailableChallenge) {
                // If we haven't found an available challenge yet, mark this one as available
                challenge.available = true;
                foundAvailableChallenge = true;
                topicHasAvailableChallenge = true; // Topic becomes available since it has this challenge
            } else {
                challenge.available = false; // Lock other challenges
            }

            // If any challenge is not completed, the topic can't be marked as completed
            if (!challenge.completed) {
                allChallengesCompleted = false;
            }
        }

        // Mark all challenges and the topic as part of the topic object
        topic.challenges = challenges;

        // If the topic contains an available challenge, the topic itself should be marked as available
        topic.available = topicHasAvailableChallenge;

        // Mark the topic as completed if all challenges are done
        topic.completed = allChallengesCompleted;
    }

    return topics;
};

module.exports = {
    getTopicsBySection
}