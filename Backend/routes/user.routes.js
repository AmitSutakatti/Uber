const express=require('express')
const router=express.Router()
//user ko register karne se pehele kuch data frontend se Ayega tho usko validate karne keliye we use : express-Validator package
const userController=require('../controllers/user.controller')
const {body}=require('express-validator')
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long .'),
     body('fullname.lastname').isLength({min:3}).withMessage('Last name must be at least 3 characters long .'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long .'),

],
userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long .'),

],userController.loginUser)

module.exports=router