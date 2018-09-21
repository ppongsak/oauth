// require mysql lib

const myBasicAuthorizer = (username, password) => {
  // select database
  console.log('myBasicAuthorizer', username, password)
  //return true or false
  return username.startsWith('A') && password.startsWith('secret')
}

module.exports = { myBasicAuthorizer }
