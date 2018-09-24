const app = require('express')
const router = app.Router()

const { index, store } = require('./token')
const { validateBody } = require('./validate')

const { myBasicAuthorizer } = require('./middleware')
const basicAuth = require('express-basic-auth')

router.use(basicAuth({ authorizer: myBasicAuthorizer, authorizeAsync: true }))

// router.get('/', index)

// get token
router.post('/', validateBody, store)

module.exports = router
