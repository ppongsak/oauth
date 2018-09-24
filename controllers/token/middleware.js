const { getClientsByUsername } = require('../../models/oauthClients')

const myBasicAuthorizer = (username, password, cb) => {
    getClientsByUsername(username, password).then(result => {
        if (!result)
            // log error
            return cb(null, false)

        return cb(null, true)
    })
}

module.exports = { myBasicAuthorizer }
