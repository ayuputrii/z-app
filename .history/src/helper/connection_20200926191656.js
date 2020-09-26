const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'z-wallet'
})

conn.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connection')
});
module.exports = conn;