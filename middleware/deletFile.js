const fs = require('fs').promises
const path  = require('path')

const deletUser = (req,res,next) => {
    const {id} = req.params
    const {users} = res.locals
    console.log(req.params.id);
    
    const UsersFilter = users.filter((user) => user.id !== +id)
    fs.writeFile(path.join(__dirname,'..', '/db', '/users.json'),JSON.stringify(UsersFilter))
    next()
}

module.exports = deletUser