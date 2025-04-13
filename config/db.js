const mysql = require('mysql2');

const MySQLConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'explore_bharat'
});

MySQLConnection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});

module.exports = MySQLConnection;