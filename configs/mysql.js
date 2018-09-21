const mysql = require('mysql')
require('dotenv').config()

var proxyuser = process.env.PROXY_USER || 'dev'
var proxypassword = process.env.PROXY_PASSWORD || 'dev'

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'wallet'
})

connection.connect(function(err) {
    if (!err) {
        console.log('Database is connected ... \n\n')
    } else {
        console.log('Error connecting database ... \n\n' + err)
    }
})

module.exports = {
    connection
}
