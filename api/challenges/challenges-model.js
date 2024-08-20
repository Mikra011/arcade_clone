const db = require('../../data/db-config');

const getChallengeById = (id) => {
    return db('challenges')
        .select('description')
        .where('id', id)
        .first()
}

module.exports = {
    getChallengeById
}