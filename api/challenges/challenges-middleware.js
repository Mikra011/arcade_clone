const db = require('../../data/db-config'); // Adjust the knexfile path if necessary

async function challengeAvailabilityMiddleware(req, res, next) {
    try {
        const { id } = req.params; // Challenge ID from request params
        const user_id = req.decodedJwt.id;  // Get user ID from JWT token

        // Fetch the challenge details, including order_index
        const challenge = await db('challenges')
            .where({ id: id })
            .first();

        if (!challenge) {
            return res.status(404).json({ message: 'Challenge not found' });
        }

        // Always allow the first challenge (order_index 1)
        if (challenge.order_index === 1) {
            return next();
        }

        // Fetch user's completed challenges and their order_indexes
        const userProgress = await db('user_progress')
            .join('challenges', 'user_progress.challenge_id', 'challenges.id')
            .where({ 'user_progress.user_id': user_id, 'user_progress.completed': true })
            .select('challenges.id', 'challenges.order_index');

        // Extract completed challenge order_indexes
        const completedOrderIndexes = userProgress.map(up => up.order_index);

        // Check if this challenge is available:
        // - Is it already completed by the user?
        // - Is it the next challenge (meaning its order_index is 1 greater than the highest completed order_index)?
        const highestCompletedOrderIndex = Math.max(...completedOrderIndexes, 0);

        const isAvailable =
            completedOrderIndexes.includes(challenge.order_index) || // Challenge is completed
            challenge.order_index === highestCompletedOrderIndex + 1; // Next challenge after the highest completed one

        if (!isAvailable) {
            return res.status(403).json({ message: 'Challenge not available yet' });
        }

        next(); // Proceed if the challenge is available
    } catch (error) {
        console.error('Error in challenge availability middleware:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { 
    challengeAvailabilityMiddleware
}
