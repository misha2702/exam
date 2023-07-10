const mysql = require('mysql2')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'manager',
  database: 'dac',
  port: '7500'
})

module.exports = pool