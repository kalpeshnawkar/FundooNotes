const jwt = require('jsonwebtoken')
module.exports = {
    tokenGenrate(payload) {
        try{
        var token = jwt.sign({ payload }, "secreatekey",{expiresIn:14400})

        var obj = {
            message: 'token Generated',
            token: token
        }
        console.log(obj);
        
        return obj.token;
    }

catch(e){
     console.log(e)
}
    }

}