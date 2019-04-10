const user_services=require("../services/UserServices");
const {tokenGenrate}=require('../middler/genrate.token')
const {sendMailer}=require('../middler/sendmailer')


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
        console.log("result in controller==",request.body)
        if(err){
            res_result.status=false;
            res_result.message=err;
            response.status(400).send(res_result);

        }
        else{
            const payload={
                "email":request.body.email
            }
           var token= tokenGenrate(payload)

            res_result.status=true;
            res_result.data=result;
            res_result.token=token;
            response.status(200).send(res_result);
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
            response.status(400).send(res-result);
        }
        else{
            const payload={
                "email":request.body.email
            }
            var obj=tokenGenrate(payload);
            var url=`http://localhost:3000/resetpassword /\n${obj.token}`;
            console.log("url==",url)
            sendMailer(url)
            res_result.status=true
            res_result.data=result
            res_result.token=obj.token
            response.status(200).send(res_result)

        }
    })


}
    }
    catch(e){
        console.log(e)
    }
}



exports.reset=(request,response)=>{
    try{
        console.log("request in controller==",request )
    res_result={};
    if(request.body==null){
        res_result.status=false;
        res_result.message="Field is empty";
        response.status(404).send(res_result);
    }
    user_services.reset(request.body,(err,result)=>{
        
        console.log("result in controller==",request.body)
        if(err){
            res_result.status=false;
            res_result.message=err;
            response.staus(400).send(res_result);

        }
        else{
            
            res_result.status=true;
            res_result.data=result;
            response.status(200).send(res_result);
        }

    })
}
catch(e){
    console.log(e)
}
}
