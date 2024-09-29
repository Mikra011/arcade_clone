const users = [
    {
        username: 'user',
        email: 'user@user.com',
        password: '$2a$08$/S5RyVtGMRvzgJVroM8ewuSnqlmymmxFvtTZlxlmG.jpQm5N7y5uC',
        role: 'user'
    }
]


exports.seed = async function (knex) {
    await knex('users').insert(users)
}