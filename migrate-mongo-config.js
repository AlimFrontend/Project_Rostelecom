// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const config = {
  mongodb: {
    url: process.env.NEXT_PUBLIC_DB_URL,
    databaseName: process.env.NEXT_PUBLIC_DB_NAME,

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  migrationsDir: 'migrations',

  changelogCollectionName: 'changelog',

  migrationFileExtension: '.js',

  useFileHash: false,

  moduleSystem: 'commonjs',
}

module.exports = config
