const express = require('express')
const BodyParser = require('body-parser')
const { celebrate, Joi, errors } = require('celebrate')

const app = express()
app.use(BodyParser.json())

const validateBody = celebrate(
    {
        body: Joi.object().keys({
            username: Joi.string()
                .email()
                .required()
        })
    },
    (req, res) => {}
)

app.use(errors())

module.exports = {
    validateBody
}
