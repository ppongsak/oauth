const { getClientsByUsername } = require('../../models/oauthClients')

const myBasicAuthorizer = (username, password) => {
    // query from database
    let clients = await getClientsByUsername(username, password)

    let client_id
    let client_secret

    console.log(clients)

    // if (clients.length != 1) {
    //     client_id = 'null'
    //     client_secret = 'null'
    // } else {
    //     client_id = clients[0].client_id
    //     client_secret = clients[0].client_secret
    // }

    // clients.then(function(clients) {
    //     return (
    //         username.startsWith(client_id) && password.startsWith(client_secret)
    //     )
    // })
}

module.exports = { myBasicAuthorizer }
