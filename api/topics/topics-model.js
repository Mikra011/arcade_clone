const db = require('../../data/db-config')

// Fetch topics based on sectionName
const getTopics = async (sectionName) => {
    return await db('topics')
        .select('topic_name', 'topic_img_url', 'topic_img_c_url', 'id', 'order_index')
        .where('section_name', sectionName)
        .orderBy('order_index')
}

// Fetch user's progress (completed challenges)
const getUserProgress = async (userId) => {
    const userProgress = await db('user_progress')
        .select('challenge_id')
        .where('user_id', userId)
        .andWhere('completed', 1)

    // Return only the IDs of completed challenges
    return userProgress.map(progress => progress.challenge_id)
}

// Fetch challenges for a specific topic
const getChallengesByTopic = async (topicId) => {
    return await db('challenges')
        .select('order_index', 'challenge_name', 'id')
        .where('topic_id', topicId)
        .orderBy('order_index')
}

// Process challenges: mark available and completed challenges
const processChallenges = (challenges, completedChallengeIds, foundAvailableChallenge) => {
    let topicHasAvailableChallenge = false
    let allChallengesCompleted = true

    for (let i = 0; i < challenges.length; i++) {
        const challenge = challenges[i]

        // Check if the challenge is completed
        challenge.completed = completedChallengeIds.includes(challenge.id) ? 1 : 0

        // If the challenge is completed, the next one should be available
        if (challenge.completed) {
            challenge.available = false // Completed challenges are not available
        } else if (!foundAvailableChallenge) {
            challenge.available = true
            foundAvailableChallenge = true
            topicHasAvailableChallenge = true // This topic now has an available challenge
        } else {
            challenge.available = false // Lock other challenges
        }

        if (!challenge.completed) {
            allChallengesCompleted = false
        }
    }

    return { challenges, foundAvailableChallenge, topicHasAvailableChallenge, allChallengesCompleted }
}

// Process topics: assign challenges and availability status
const processTopics = async (topics, completedChallengeIds) => {
    let foundAvailableChallenge = false

    for (const topic of topics) {
        const challenges = await getChallengesByTopic(topic.id)
        const {
            challenges: processedChallenges,
            foundAvailableChallenge: newAvailableChallenge,
            topicHasAvailableChallenge,
            allChallengesCompleted
        } = processChallenges(challenges, completedChallengeIds, foundAvailableChallenge)

        // Add processed challenges to the topic
        topic.challenges = processedChallenges
        topic.available = topicHasAvailableChallenge
        topic.completed = allChallengesCompleted

        // Update foundAvailableChallenge for other topics
        foundAvailableChallenge = newAvailableChallenge
    }

    return topics
}

// Main function to get topics by section and user progress
const getTopicsBySection = async (sectionName, userId) => {
    const topics = await getTopics(sectionName)
    const completedChallengeIds = await getUserProgress(userId)
    return await processTopics(topics, completedChallengeIds)
}


module.exports = {
    getTopicsBySection
}