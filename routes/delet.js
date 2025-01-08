const express = require('express')
const router = express.Router()
const {readUsers} = require("../middleware/readFile");
const deletUser = require("../middleware/deletFile");




router.post('/:id', readUsers,deletUser,(req,res) => {
    res.redirect('/api/users')
})

module.exports = router