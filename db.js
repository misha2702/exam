const mysql = require('mysql2')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dac2023',
  port: '7500'
})

module.exports = pool