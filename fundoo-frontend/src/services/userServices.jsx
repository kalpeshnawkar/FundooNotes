import axios from 'axios'
import {toast} from 'react-toastify'
import {withRouter} from 'react-router-dom'
function userLogin(data){
         axios.post('/login',data)
         .then(function (response) {
             console.log("response in login==",response)
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("email",response.data.email)
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
        toast("plz,check your email fro email verification")
    })
    .catch(function(err){
        console.log(err)
        toast("some thing wrong")
    })
}
function userForgot(data){

    axios.post('/forgotpassword',data)
  
    .then(function(response) {

        toast("plz,Check Your Email to reset your password");
    })
    .catch(function(err) {
        toast("Some thing Wrong")
    })
}
function userReset(data,token){
    console.log("token in services ==",token)

axios.post(`/reset/${token}`,data,{
    headers:{
        'token':token
    }
})
.then(function(response){
    console.log(response)
    toast('Your password is reseted')
     window.location.href='/login'
})
.catch(function(err){
    console.log(err)
    toast("your password is not reseted")
})
}
function verifyService(data,token){

    
    axios.post(`/verifyemail/${token}`,data,{
        headers:{
            'token':token
        }
    
    })
    .then(function(response){
        console.log(response)
       alert('Email verified')
       window.location.href="/login"

    })
    .catch(function(err){
        console.log(err)
        toast('email not verified')
    })
  
}




export { userLogin,userRegister,userForgot,userReset,verifyService}
export default withRouter(userLogin,userRegister,userForgot,userReset);



 