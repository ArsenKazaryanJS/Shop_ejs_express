const express = require('express');
const router = express.Router();
const {readProducts,readUser} = require('../middleware/readFile')
const rolesMiddleware = require('../middleware/rolesMiddleware')
const ProductPost = require('../middleware/ProductPost')
const updatePrice = require('../middleware/updateFile')


router.get('/products',  [readProducts,readUser], async (req, res, next) => {
  const {products,user} = res.locals
  res.render('products',{products,user});
});


router.post('/products',  [readProducts,readUser,rolesMiddleware('superAdmin','admin'),ProductPost], async (req, res, next) => {
  res.redirect('/api/products');
});


router.post('/products/:id',  [readProducts,readUser,rolesMiddleware('superAdmin','admin'),updatePrice], async (req, res, next) => {
  res.redirect('/api/products');
});
module.exports = router;
