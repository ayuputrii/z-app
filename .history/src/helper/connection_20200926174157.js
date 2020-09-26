const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zwallet'
})

conn.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connection')
});
module.exports = conn;