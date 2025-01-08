const fs = require('fs').promises
const path = require('path')


const readUsers = async (req,res,next) => {
    try {
    const data = await fs.readFile(path.join(__dirname, '..', '/db', '/users.json'), 'utf-8')
    const users = JSON.parse(data)
    res.locals.users = users
    next()

    } catch (error) {
        res.send(error)
    }
}

const readUser = async (req, res, next) => {
    try {
        const data = await fs.readFile(path.join(__dirname, '..', '/db', '/user.json'), 'utf-8');
        const user = JSON.parse(data);
        res.locals.user = user 
    } catch (error) {
        console.log(error);
        res.locals.user = undefined
    }
    next();
}

const readProducts = async (req,res,next) => {
    try {
    const data = await fs.readFile(path.join(__dirname, '..', '/db', '/products.json'), 'utf-8')
    const products = JSON.parse(data)
    res.locals.products = products
    next()
    } catch (error) {
        res.send(error)
    }
}

module.exports = {readUsers,readProducts,readUser}