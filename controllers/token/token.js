const { genToken } = require('./generate')
/**
 * 
 * generate token
 * 
 * @param {*} req 
 * @param {*} res 
 * {
    "token_type":"bearer",
    "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVlx1MDAxNcKbwoNUwoonbFPCu8KhwrYiLCJpYXQiOjE0NDQyNjI1NDMsImV4cCI6MTQ0NDI2MjU2M30.MldruS1PvZaRZIJR4legQaauQ3_DYKxxP2rFnD37Ip4",
    "expires_in":20,
    "refresh_token":"fdb8fdbecf1d03ce5e6125c067733c0d51de209c"
}
 */

const store = async (req, res) => {
    let token = await genToken(req)
    console.log(token)
    return res.json({ status: true, data: { message: 'ok' } })
}

const update = (req, res) => {
    console.log(req.body)

    return res.json({
        status: true,
        data: {
            message: 'update'
        }
    })
}

module.exports = {
    store,
    update
}
