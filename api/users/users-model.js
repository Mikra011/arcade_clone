const db = require('../../data/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
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