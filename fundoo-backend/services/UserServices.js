//requaire a user model
const user=require('../app/model/users')

exports.register = (data,callback) => {
    //try catch to handle exception
    try{
    console.log('req body in services ==',data);
    
    user.register(data,(err,result) => {
        console.log("response body in services==",result)
        //if therer is error then it will be send erroe callback
        if(err){
            callback(err);
        }
        //if there is no erroe then it will return callback 
        else
        {
         
            return callback(null,result);
        }
    })
}

    catch(e){
        console.log(e)
    }

}
exports.login =(data,callback)=>{
    //try block to handle exception
    try{
    user.login(data,(err,result)=>{
        if(err){
            callback(err);
        }
        else{
            console.log("res in srevices==",result)
            return callback(null,result);
        }
    })
}
catch(e)
{
    console.log(e)
}
}
exports.forgot=(data,callback)=>{
    try{

    
    
    user.forgot(data,(err,result)=>{
        console.log(data);
        
        if(err){
            
            callback(err);
        }
        else
        {
        
             callback(null,result);
        }
    })
}
catch(e){
    console.log(e)
}
}

exports.reset=(data,callback)=>{
    try{

    
    
    user.reset(data,(err,result)=>{
        console.log(result);
        
        if(err){
            
            callback(err);
        }
        else
        {
        
             callback(null,result);
        }
    })
}
catch(e){
    console.log(e)
}
}