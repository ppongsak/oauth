const db = require('../configs/mysql')

const getClientsByUsername = async (username, password) => {
    const query =
        'SELECT * from oauth_clients where client_id=? and client_secret=?'

    return new Promise((resolve, reject) => {
        db.connection.query(query, [username, password], function(err, rows) {
            if (err) {
                return reject(err)
            }
            return resolve(rows[0])
        })
    })
}

module.exports = { getClientsByUsername }
