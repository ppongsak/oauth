const db = require('../configs/mysql')

const getClientsByUsername = async (username, password) => {
  const query = 'SELECT * from user where username=? and password=?'
  console.log('getClientsByUsername', query)

  return await new Promise((resolve, reject) => {
    db.connection.query(query, [username, password], function(err, rows) {
      if (err) {
        return reject(err)
      }
      //console.log('resolve', rows[0])
      return resolve(rows[0])
    })
  })


}

module.exports = { getClientsByUsername }
