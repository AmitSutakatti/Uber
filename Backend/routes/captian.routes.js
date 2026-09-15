const express=require('express')
const { ExpressValidator } = require('express-validator')
const router=express.Router()
const captianController=require('../controllers/captian.controller')
const {body}=require('express-validator')
const authMiddleware=require('../middlewares/auth.middleware')
router.post('/register',[
      body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long .'),
     body('fullname.lastname').isLength({min:3}).withMessage('Last name must be at least 3 characters long .'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long .'),
     body('vehicle.color').isLength({min:3}).withMessage('vechile color must be at least 3 characters long .'),
     body('vehicle.plate').isLength({min:3}).withMessage('vechile plate  must be at least 3 characters long .'),
      body('vehicle.capacity').isInt({min:1}).withMessage('vechile capacity should be min 1 .'),
      body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('vechile capacity should be min 1 .'),
      
    

],captianController.registerCaptian)

router.post('/login',[
   body('email').isEmail().withMessage('Invalid Email'), 
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long .')

],captianController.captianLogin)


    


router.get('/profile',authMiddleware.authCaptian,captianController.getCaptianProfile)

router.get('/logout',authMiddleware.authCaptian,captianController.logoutCaptian)

module.exports=router