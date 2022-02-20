const { Sequelize } = require('sequelize');
// const mysql = require('mysql2');
require('dotenv').config({ phat: '.env' });

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.DB_MYSQL_HOST,
    dialect: 'mysql',
  }
);
module.exports = sequelize;

// const connection = mysql.createConnection({
//   host: process.env.DB_MYSQL_HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE_NAME,
// });

// connection.connect((error) => {
//   console.log('DB Conecction succesfuly');
// });

// module.export = connection;
