const express = require("express");
const router = express.Router();
const { register,checking_Login,login,logout} = require("../middleware/register_login");
const { readUsers } = require("../middleware/readFile");


//REGISTER
router.get("/register", async (req, res) => {
  res.render("register");
});

router.post("/register", [readUsers, register], async (req, res) => {
  res.redirect("login");
});


//LOGIN
router.get("/login", async (req, res) => {
  res.render("login");
});

router.post("/login", [readUsers, checking_Login,login], async (req, res) => {
  res.redirect('/');
});

// LOGOUT
router.get('/logout',logout, async (req,res) => {
  res.redirect('/'); 
})
module.exports = router;
