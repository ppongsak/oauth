const db = require('../configs/mysql')

const getUserByName = async (username, password) => {
    const query = 'SELECT * from oauth_users where username=? and password=?'

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
