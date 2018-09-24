const gen = require('random-seed')
const bcrypt = require('bcrypt')
const base64 = require('base-64')

const randomString = (req, res) => {}

const randomNumber = (req, res) => {
    var seed = 'Hello World',
        rand1 = gen.create(seed)
    rand1 = rand1(10000)
}

module.exports = {
    randomString,
    randomNumber
}
