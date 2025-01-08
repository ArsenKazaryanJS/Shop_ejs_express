const express = require('express');
const router = express.Router();
const {readUsers,readUser} = require('../middleware/readFile')
const rolesMiddleware = require('../middleware/rolesMiddleware')

router.get('/users',  [readUser,readUsers,rolesMiddleware('superAdmin',"admin")], async (req, res) => {
  const {users} = res.locals
  res.render('users',{users});
});

module.exports = router;
