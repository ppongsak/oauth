const db = require('../configs/mysql')

const getClientsByUsername = (username, password) => {
    let query = 'SELECT * from oauth_clients'
    query =
        query +
        ' where client_id="' +
        username +
        '"' +
        ' and client_secret="' +
        password +
        '"'

    return new Promise((resolve, reject) => {
        db.connection.query(query, function(err, rows) {
            if (err) {
                reject(err)
            }
            console.log(rows)
            return resolve(rows)
        })
    })
}

module.exports = { getClientsByUsername }
