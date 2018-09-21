var express = require('express')
var router = express.Router()
var token = require('../controllers/token')

router.use('/token', token)

module.exports = router
