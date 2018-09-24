var express = require('express')
var router = express.Router()
var token = require('../controllers/token')
var login = require('../controllers/login')

router.use('/token', token)
router.use('/login', login)

module.exports = router
