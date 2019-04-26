const user_services=require("../services/UserServices");
const {tokenGenrate}=require('../middler/genrate.token')
const {sendMailer}=require('../middler/sendmailer')
var redis = require('redis');
var client = redis.createClient();



exports.register = (req,res) => {
     try{
         //check vadiation of data
    req.checkBody('firstName','First Name is not valid').isLength({min:3}).isAlpha();
    req.checkBody('lastName','Last Name is not valid').isLength({min:3}).isAlpha();
    req.checkBody('email','Email is not valid').isEmail();
    req.checkBody('password','Password is not valid').isLength({min:8}).equals(req.body.password);
    var errors=req.validationErrors();
    var res_result = {};
    // if there is wrong validation then an errors
    if(errors){
       
        res_result.status = false;
        res_result.message = errors;
        res.status(422).send(res_result);
    }
    else{
        // here sending a request in services

    user_services.register(req.body,(err,result) => {
        console.log('req body in ctrl ==',result);
     
        if(err){
            
            res_result.status = false;
            res_result.message = err;
            res.status(400).send(res_result);
        }
        else
        {
            res_result.status = true;
            res_result.data = result;
            const payLoad={
                 user_id:res_result.data._id
            }
           var msg="Please, verify your email"
            var token=tokenGenrate(payLoad)
            var url=`http://localhost:3000/verifyemail/${token}`
            sendMailer(url,req.body.email,msg);
           
            res_result.token=token;
            res.status(200).send(res_result);
        }
    })
    
}
     }
     catch(e){
         console.log(e)
     }
}


exports.login=(request,response)=>{
    try{
        //check validation for login 
    request.checkBody('email','Email is not valid').isEmail();
    request.checkBody('password','Password is not valid').isLength({min:8})
    var errors=request.validationErrors();
    res_result={};
      //if there  a wrong validation thenan error
    if(errors){
        
        res_result.status=false;
        res_result.message=errors;
        response.status(404).send(res_result);
    }
    else{
    user_services.login(request.body,(err,result)=>{
        console.log("result in controller==",result)
        if(err){
            res_result.status=false;
            res_result.message=err;
            response.status(400).send(res_result);

        }
        else{
            res_result.status=true;
            res_result.data=result;
            const payload={
                user_id:res_result.data._id
            }
            console.log(payload);
            
           var token= tokenGenrate(payload)
           var userId=res_result.data._id;
           console.log("userId" ,userId);
           
           client.set(userId,token)
           client.get(userId,function(err,result){
               if(err) {
                   console.log(err)
               }
               else {
               console.log('redis is connedcted',result)
               }

           })
        
            res_result.token=token;
            response.status(200).send({
                "email":res_result.data.email,
                "status":res_result.status,
                "UserId":res_result.data._id,
                "message":"login successful",
            "token":token});
        }

    })
}
    } catch(e){
        console.log(e)
    }
}

exports.forgot=(request,response)=>{
    try{
         //check validation for forgot password
    request.checkBody('email','Email is not valid').isEmail();
    var errors=request.validationErrors();
    res_result={};
      //if there  a wrong validation thenan error
    if(errors){
        res_result.status=false;
        res_result.message=errors;
        response.status(404).send(res_result);

    }
    else{
    user_services.forgot(request.body,(err,result)=>{
        if(err){
            res_result.status=false;
            res_result.message=err;
            response.status(400).send(res_result);
        }
        else {
            res_result.status=true
            res_result.data=result
            const payload={
               user_id:res_result.data._id
            }
            var msg="Reset Your Password"
            var token=tokenGenrate(payload);
            var url=`http://localhost:3000/resetpassword/${token}`;
           sendMailer(url,request.body.email,msg)
          
            res_result.token=token
            res_result.url=url
            response.status(200).send(res_result)

        }
    })


}
    }
    catch(e){
        console.log(e)
    }
}



exports.reset=(req,res)=>{
    try{
         
    res_result={};
    if(req.body==null){
        res_result.status=false;
        res_result.message="Field is empty";
        res.status(404).send(res_result);
    }
    const reset_data={
        'id':req.decoded,
        'password':req.body.password
        
    }
    user_services.reset(reset_data,(err,result)=>{
        
        
        if(err){
            res_result.status=false;
            res_result.message=err;
            res.staus(400).send(res_result);

        }
        else{
            
            res_result.status=true;
            res_result.data=result;
            res.status(200).send(res_result);
        }

    })
}
catch(e){
    console.log(e)
}
}
exports.Emailverify=(req,res)=>{
    console.log("req in controller==",req.body)
    var res_result={};
    var email_data={
        'id':req.decoded
    }
    user_services.emailService(email_data,(err,result)=>{
        console.log('result in controller==',result)
        if(err){
            res_result.status=false;
            res_result.message=err;
            res.status(400).send(res_result);

        }
        else{
            res_result.status=true;
            res_result.data=result;
            res.status(200).send(res_result);
        }

    })
    
}


exports.setProfile = (req, res) => {
    
        var responseResult = {};
        let userID = null;
        if (typeof req.file === 'undefined') {
            throw new Error("file is mandatory");
        } else {
            userID = req.decoded.user_id;
            let image=(req.file.location)
            user_services.setProfile(userID, image, (err, result) => {
                if (err) {
                    responseResult.success = false;
                    responseResult.error = err;
                    res.status(500).send(responseResult)
                } else {
                   
                    responseResult.status = true;
                    responseResult.data = result;
                    res.status(200).send(responseResult);
                }
            })
        }
    } 

