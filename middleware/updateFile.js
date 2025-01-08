const fs = require('fs').promises
const path = require('path')




const updatePrice = async (req,res,next)=>{
  try {
    const {id} = req.params
    const {products} = res.locals
     
    const updateProd = await products.map((prod)=> {
        if(prod.id === +id){
           return {...prod,price:+req.body.price}
        } return prod
    })
       fs.writeFile(path.join(__dirname, '..', '/db', '/products.json'),JSON.stringify(updateProd))
    next()
  } catch (error) {
    res.send(error)
  }
}

module.exports = updatePrice