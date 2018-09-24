const bcrypt = require('bcrypt')
const base64 = require('base-64')

const { randomString, randomNumber } = require('./random')

const generateToken = async (req, res) => {
    const saltRounds = 10
    const myPlaintextPassword = 'sttttt'
    const someOtherPlaintextPassword = 'not_bacon'

    var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)
    var encoded = base64.encode(hash)

    return encoded
}

module.exports = {
    generateToken
}
