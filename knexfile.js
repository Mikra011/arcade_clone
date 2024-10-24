const sqliteConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
}

module.exports = {
  development: {
    ...sqliteConfig,
    connection: { filename: './data/arcade_clone.db3' },
  },
  testing: {
    ...sqliteConfig,
    connection: { filename: './data/arcade_clone.test.db3' },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.SUPABASE_HOST, 
      user: process.env.SUPABASE_USER, 
      password: process.env.SUPABASE_PASSWORD, 
      database: process.env.SUPABASE_DATABASE, 
      port: 6543,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
}
