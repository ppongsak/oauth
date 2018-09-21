var express = require('express')
var bodyParser = require('body-parser')
const basicAuth = require('express-basic-auth')
const db = require('../configs/mysql')

var app = express()

app.use(bodyParser.json())

let queryString = 'select * from rebate_retailers'

// db.connection.query(queryString, function(err, results) {
//     if (err) {
//         reject(err)
//     }
//     return resolve(results)
// })

app.use(
    basicAuth({
        users: {
            rebatemango: 'rebatesfsafasfmango'
        },
        challenge: false
    })
)

module.exports = app
