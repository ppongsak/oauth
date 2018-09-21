const { getClientsByUsername } = require('../../models/oauthClients')

const myBasicAuthorizer = async (username, password) => {
    const clients = await getClientsByUsername(username, password)

    // var client_id
    // var client_secret

    // if (clients.length != 1) {
    //     client_id = null
    //     client_secret = null
    // } else {
    //     client_id = clients[0].client_id
    //     client_secret = clients[0].client_secret
    // }

    // console.log(
    //     username.startsWith(client_id) && password.startsWith(client_secret)
    // )

    // if (!(username.startsWith(client_id) && password.startsWith(client_secret)))
    //     return res.status(400).json({
    //         status: false
    //     })

    return username.startsWith('A') && password.startsWith('secret')
}

module.exports = { myBasicAuthorizer }
