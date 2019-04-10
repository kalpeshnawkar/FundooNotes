const express=require('express')
const router=express.Router();
const userController=require("../controllers/Usercontroller");
const verifyToken=require("../middler/verifyrtoken")

router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/forgotpassword',userController.forgot);
router.post('/reset',verifyToken.checkToken,userController.reset)

module.exports=router;