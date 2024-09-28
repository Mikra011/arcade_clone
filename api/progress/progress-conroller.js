const progressModel = require('./progress-model');

// Controller to record user progress
const recordProgress = async (req, res) => {
    const { challenge_id, completed } = req.body;
    const user_id = req.decodedJwt.id;

    if (!challenge_id || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Challenge ID and completed status are required.' });
    }

    try {
        // Call the model to record progress
        const result = await progressModel.recordUserProgress(user_id, challenge_id, completed);
        res.status(200).json({ message: 'Progress recorded successfully.', result });
    } catch (error) {
        console.error('Error recording progress:', error);
        res.status(500).json({ message: 'Failed to record progress.' });
    }
};

// get user progress
const getUserProgressBySections = async (req, res) => {
    const user_id = req.decodedJwt.id; 

    try {
        // Fetch the user's progress from the model
        const progress = await progressModel.getUserProgressBySections(user_id);

        // Return the progress data
        res.status(200).json({ progress });
    } catch (error) {
        console.error('Error fetching user progress:', error);
        res.status(500).json({ message: 'Failed to retrieve user progress' });
    }
};

module.exports = {
    recordProgress,
    getUserProgressBySections
};
