const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'dist'

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: [`${rootDir}/database/migrations/*.{js,ts}`],
  entities: [`${rootDir}/app/models/*.{js,ts}`],
  synchronize: false,
  cli: {
    migrationsDir: [`${rootDir}/database/migrations/`],
    entitiesDir: [`${rootDir}/app/models/`]
  }
}
