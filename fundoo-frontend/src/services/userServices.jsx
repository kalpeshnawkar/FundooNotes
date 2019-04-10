import axios from 'axios'
import {toast} from 'react-toastify'
import {withRouter} from 'react-router-dom'
function userLogin(data){
        axios.post('/login',data)
        .then(function (response) {
            localStorage.setItem("token",response.data.token)
             console.log(response)
            toast("Login Successful")
            window.location.href='/dashboard'
        })
        .catch(function (err) {
            console.log(err)
            toast("login unsucesssful")
        })
}
function userRegister(data){
    axios.post('/register', data)
    .then(function(response){
        console.log(response)
        toast("register successful")
    })
    .catch(function(err){
        console.log(err)
        toast("not registered")
    })
}
function userForgot(data){

    axios.post('/forgotpassword',data)
  
    .then(function(response) {
        var token1=response.data.token;
        console.log("token1==",token1);
        var token2=token1.substring(34);
        console.log("token2==",token2)
        localStorage.setItem("verifyToken",token2)

        toast("Check Your Email");
    })
    .catch(function(err) {
        console.log(err)
        toast(err)
    })
}
function userReset(data,token){
axios.post(`/reset${token}`,data,{
    Headers:{
        'token':token
    }
})
.then(function(response){
    console.log(response)
    toast('Your password is reseted')
})
.catch(function(err){
    console.log(err)
    toast("your password is not reset")
})
}

export { userLogin,userRegister,userForgot,userReset}
export default withRouter(userLogin);