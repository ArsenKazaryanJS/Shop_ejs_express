const fs = require('fs').promises
const path = require('path')
const productSchema = require('../models/prodModel')

const ProductPost = async (req,res,next)=>{
      try {
        const {products} = res.locals
        const body = await productSchema.validateAsync(req.body)
        body.id = crypto.randomUUID()
        products.push(body);
        await fs.writeFile(path.join(__dirname, '..', '/db', '/products.json'),JSON.stringify(products))        
       next()
      } catch (error) {
        res.json({msg:error})
      }

}

module.exports = ProductPost