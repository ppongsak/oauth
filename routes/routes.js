var express = require('express')
var router = express.Router()
var basicAuthen = require('../auth/basicAuthen')
var token = require('../controllers/token')

// High level middleware
router.use((req, res, next) => {
    // TODO : validate token

    //
    req.requestTime = Date.now()

    next()
})

router.post('/token', basicAuthen, token.index)

module.exports = router
