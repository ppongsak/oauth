const { getClientsByUsername } = require('../../models/oauthClients')

const myBasicAuthorizer = (username, password, cb) => {
    getClientsByUsername(username, password).then(result => {
        if (!result) return cb(null, false)
        console.log('myBasicAuthorizer', result)
        return cb(null, true)
    })
}

module.exports = { myBasicAuthorizer }
