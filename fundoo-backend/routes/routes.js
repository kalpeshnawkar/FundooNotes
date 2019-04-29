const express=require('express')
const router=express.Router();
const userController=require("../controllers/Usercontroller");
const note=require("../controllers/noteController")
const verifyToken=require("../middler/verifyrtoken");
const upload=require('../services/fileUpload');

router.post('/register',userController.register);
router.post('/login',userController.login);
router.post('/forgotpassword',userController.forgot);
router.post('/reset/:token',verifyToken.checkToken,userController.reset)
router.post('/verifyemail/:token',verifyToken.checkToken,userController.Emailverify)
router.post('/setprofile',upload.single('image'),verifyToken.checkToken,userController.setProfile)
router.post('/createNote',verifyToken.checkToken,note.noteController)
router.get('/getAllNote',verifyToken.checkToken,note.getAllNote)
router.post('/editNote',note.editNote)
module.exports=router;