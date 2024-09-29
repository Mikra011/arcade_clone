const user_progress = [
    {
        user_id: 1,
        challenge_id: 1,
        completed: 1,
    },
    {
        user_id: 1,
        challenge_id: 2,
        completed: 1,
    },
    {
        user_id: 1,
        challenge_id: 3,
        completed: 1,
    },
    {
        user_id: 1,
        challenge_id: 4,
        completed: 1,
    },
    {
        user_id: 1,
        challenge_id: 5,
        completed: 1,
    },
    {
        user_id: 1,
        challenge_id: 6,
        completed: 1,
    },
    {
        user_id: 1,
        challenge_id: 61,
        completed: 1,
    }
]


exports.seed = async function (knex) {
    await knex('user_progress').insert(user_progress)
}