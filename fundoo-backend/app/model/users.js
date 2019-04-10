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
          
             bcrypt.compare(request.password,result.password).then(function(response){
                 console.log("response in user==",response)
                 console.log("after bcrypt==",request.password)
                if(response){
                     console.log("login Succesful")
                    return callback(null, response)               
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
        else
        {
             callback(null,result);
        }
    })
})

user_model.prototype.reset=((request,callback)=>

 {
     console.log("request in user==",request)
    var newPassword=bcrypt.hashSync(request.password,saltRounds)
     user.updateOne({password:newPassword},(err,response)=>{
         if(err){
             callback(err)
         }
         else{
            callback(null,response)
        }
     }
    )
 })
 module.exports=new user_model