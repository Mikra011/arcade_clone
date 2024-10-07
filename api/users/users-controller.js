const db = require('./users-model');

// Function to get user info and the number of challenges completed
const getUserInfo = async (req, res) => {
    const user_id = req.decodedJwt.id;

    try {
        const userInfo = await db.getUserInfo(user_id);

        if (!userInfo) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(userInfo);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user info", error: error.message });
    }
};

module.exports = {
    getUserInfo,
};
