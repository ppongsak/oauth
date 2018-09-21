var express = require('express')
var bodyParser = require('body-parser')
const basicAuth = require('express-basic-auth')
const database = require('../configs/mysql')
const loing = require('./login')

var app = express()

app.use(bodyParser.json())
