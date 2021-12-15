require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'TodaysChef',
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DATABASE_PORT,
  },
  test: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'TodaysChef',
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DATABASE_PORT,
  },
  production: {
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'TodaysChef',
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DATABASE_PORT,
  },
};
