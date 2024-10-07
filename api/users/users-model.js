const db = require('../../data/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
  getUserInfo
}

// Add a new user
async function add(user) {
  const [id] = await db('users').insert(user)
  return findById(id)
}

// Find all users (or you can add filters later)
function find() {
  return db('users').select('id', 'username', 'email', 'role')
}

// Find users by specific filter
function findBy(filter) {
  return db('users').where(filter)
}

// Find user by ID
function findById(id) {
  return db('users').where({ id }).first()
}

// Fetch user info and completed challenges count
async function getUserInfo(userId) {

  const user = await findById(userId);

  if (!user) {
    return null; // Ensure you handle the null case in your controller
  }

  const completedChallengesCount = await db('user_progress')
    .where({ user_id: userId, completed: true })
    .count('id as count')
    .first();

  return {
    username: user.username,
    challengesCompleted: completedChallengesCount.count || 0 // Default to 0 if undefined
  };
}
