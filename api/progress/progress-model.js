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

module.exports = { recordUserProgress };
