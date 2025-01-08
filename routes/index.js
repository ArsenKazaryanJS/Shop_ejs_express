const express = require('express');
const router = express.Router();
const {readUser} = require('../middleware/readFile')


router.get('/',readUser,(req, res)=> {
 const {user} = res.locals || null
   res.render('index',{user});
});


module.exports = router;
