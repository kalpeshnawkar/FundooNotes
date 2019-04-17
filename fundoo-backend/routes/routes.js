const express=require('express')
const router=express.Router();
const userController=require("../controllers/Usercontroller");
const verifyToken=require("../middler/verifyrtoken");


router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/forgotpassword',userController.forgot);
router.post('/reset/:token',verifyToken.checkToken,userController.reset)
router.post('/verifyemail/:token',verifyToken.checkToken,userController.Emailverify)

module.exports=router;