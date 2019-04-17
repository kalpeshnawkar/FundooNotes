const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
var saltRounds=10;
var userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true

    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isVerify:
    {
        type:Boolean,
        default:false
    }
    
},{
    timestamp:true
})
var user=mongoose.model('user',userSchema)
function user_model(){

}
function hash(password){
    var passwordHash=bcrypt.hashSync(password,saltRounds)
    return passwordHash;
}
user_model.prototype.register=(request,callback) =>{
    
    user.findOne({'email':request.email},(err,result)=>
    {
        if(err){
            callback(err);
        }
        else{
            if(result !== null)
            {
                console.log("User already exist !")
                callback("User already exist")
            }
            else{
                var user_data=new user({
                    "firstName":request.firstName,
                    "lastName":request.lastName,
                    "email":request.email,
                    "password":hash(request.password)
                })

                user_data.save((err,result)=>
                {
                    
                    if(err){
                        callback(err)
                    }
                    else{
                       return callback(null,result)
                    }
                })
            }
        }

    })
}


 user_model.prototype.login=((request,callback)=>{
     console.log("request in user==",request)
    user.findOne({"email":request.email},(err,result)=>{
        if(err){
             callback(err)
        }
         else if(result !=null)
        {
             console.log(result);
             
             bcrypt.compare(request.password,result.password).then(function(response){
                 console.log("response in user==",response)
                if(response){
                     console.log("login Succesful")
                    return callback(null, result)               
                     }
                 else{
                     console.log("Incorrect password")
                     callback("Incorrect Password")

                 }
             })

         }
         else{
            console.log("Invalid User");
             callback("Invalid User")
         }
    })
})
 
user_model.prototype.forgot =((data,callback) => {
    
    user.findOne({"email" :data.email},(err,result)=>{
        if(err){
            callback(err);
        }
        else if(result !=null)
        {
             callback(null,result);
        }
        else{
            console.log("email not Found")
           return callback("email not found")
        }
    })
})

user_model.prototype.reset=((req,callback)=>

 {
     console.log("req.dedcode in usermodel==",req.decode )
     console.log("request in user==",req)
    var newPassword=bcrypt.hashSync(req.password,saltRounds)
     user.updateOne({_id:req.decode.payload.user_id},{password:newPassword},(err,response)=>{
         if(err){
             callback(err)
         }
         else{
            callback(null,response)
        }
     }
    )
 })
 user_model.prototype.verification=(req,callback)=>{
    console.log("req in model==",req)
    user.updateOne({'isVerify':true},(err,response)=>{
        if(err){
            callback(err)
        }
        else{

           return callback(null,response)
        }
    })
}
 module.exports=new user_model