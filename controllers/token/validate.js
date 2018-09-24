const { celebrate, Joi } = require('celebrate')

/**
 * @description validate requested body params
 * @param {email} username
 * @param {string} password
 * @param {string} scope
 * @param {string} grant_type
 * @returns {*}
 */

const validateBody = celebrate({
    body: Joi.object().keys({
        username: Joi.string()
            .email()
            .required(),
        password: Joi.string().required(),
        scope: Joi.string().required(),
        grant_type: Joi.string().required()
    })
})

module.exports = {
    validateBody
}
