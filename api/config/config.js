// I keep it here for a smooth local try

module.exports = {
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8, // Default to 8 rounds if not set
    JWT_SECRET: process.env.JWT_SECRET || 'shhsecret' // Default secret if not set
}