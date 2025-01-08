const fs = require('fs').promises
const path = require('path')
const userSchema = require('../models/userModel')
const bcryptjs = require('bcryptjs')



const register = async (req,res,next) => {
    try {
        const {users} = res.locals
        
        const body = await userSchema.validateAsync(req.body)
        const hashPassword = await bcryptjs.hash(body.password, 10)
        
        delete body.confirmPassword
        body.password = hashPassword
        body.id = crypto.randomUUID()
        users.push(body)
        fs.writeFile(path.join(__dirname, '..', '/db', '/users.json'), JSON.stringify(users))
        next()
      } catch (error) {
        res.json(error)
      }
}

const checking_Login = async (req,res,next) => {
  try {
    const {email,password} = req.body
    const {users} = res.locals
    const user = await users.find((u) => u.email === email)
    if(user){
     const u = await bcryptjs.compare(password, user.password)
     if(u){
       res.locals.user = user
       next()
      }else{
        res.send('chk parol@')
      }
    }else{
      res.json({msg:'chka tenc email'})
    }
  } catch (error) {
    res.send(error)
  }
 
   
}
const login = async (req,res,next)=>{
  try {
    const {user} = res.locals
     await fs.writeFile(path.join(__dirname, '..', '/db', '/user.json'),JSON.stringify(user))
     next()
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

const logout = async (req,res,next) =>{
  try {
    await fs.unlink(path.join(__dirname,'..','/db','/user.json'))
         next()
  } catch (error) {
      res.status(500).send('Logout failed');
  }

}


module.exports = {register,checking_Login,login,logout}


