var express = require('express')
const path = require('path')
var routes = require('./routes/routes.js')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

routes(app)

module.exports = app
