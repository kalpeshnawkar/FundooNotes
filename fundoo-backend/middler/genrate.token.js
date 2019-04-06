const jwt = require('jsonwebtoken')
module.exports = {
    tokenGenrate(payload) {
        try{
        var token = jwt.sign({ payload }, "secreatekey",{expiresIn:14400})

        var obj = {
            message: 'token Generated',
            token: token
        }
        console.log("der",obj);
        
        return obj;
    }

catch(e){
     console.log(e)
}
    }

}