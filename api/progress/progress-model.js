const db = require('../../data/db-config'); // Assuming you have a Knex configuration file

// Function to record or update user progress
const recordUserProgress = async (user_id, challenge_id, completed) => {
    // First, check if the user already has progress for this challenge
    const existingProgress = await db('user_progress')
        .where({ user_id, challenge_id })
        .first();

    if (existingProgress) {
        // If progress exists, update the completed status
        return await db('user_progress')
            .where({ user_id, challenge_id })
            .update({ completed });
    } else {
        // If no progress exists, insert a new record
        return await db('user_progress').insert({
            user_id,
            challenge_id,
            completed
        });
    }
};

const getUserProgressBySections = async (user_id) => {
    // Fetch user progress by sections
    return await db('sections as s') // Start from the sections table
        .leftJoin('topics as t', 's.section_name', 't.section_name') // Join topics
        .leftJoin('challenges as c', 't.id', 'c.topic_id') // Join challenges
        .leftJoin('user_progress as up', function () {
            this.on('c.id', 'up.challenge_id') // Join user progress
                .andOn('up.user_id', user_id); // Ensure to filter by the user ID
        })
        .select(
            's.id as section_id',
            's.section_name',
            db.raw('COUNT(c.id) as total_challenges'), // Count all challenges in the section
            db.raw('SUM(CASE WHEN up.completed THEN 1 ELSE 0 END) as completed_challenges') // Count completed challenges
        )
        .groupBy('s.id', 's.section_name') // Group by section ID and name
        .orderBy('s.order_index'); // Order by section index
};

module.exports = {
    recordUserProgress,
    getUserProgressBySections,
};

