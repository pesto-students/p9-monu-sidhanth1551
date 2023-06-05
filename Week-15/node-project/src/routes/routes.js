const express = require('express');
const router = express.Router();
router.use(express.json());
const User  = require('../modals/userDetailsModal')
const {creatUser, loginUser,getAllUsers} = require('../controller/authController')

router.get("/",(req,res)=>{
    console.log('Welcome Home')
})

router.get("/get_all_Users",getAllUsers)

//to register user
router.post('/register_user',creatUser)

//to login user
router.get("/login",loginUser)

module.exports = router;