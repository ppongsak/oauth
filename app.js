var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var { errors } = require('celebrate')

var routes = require('./routes/routes')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', routes)

app.use(errors())

module.exports = app
