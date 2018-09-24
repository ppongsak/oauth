const app = require('express')
const router = app.Router()

const { store } = require('./login')
// const { validateBody } = require('./validate')

// const { myBasicAuthorizer } = require('./middleware')
// const basicAuth = require('express-basic-auth')

// router.use(basicAuth({ authorizer: myBasicAuthorizer, authorizeAsync: true }))

// router.get('/', index)

// login
router.post('/', store)

module.exports = router
