import React, {Component} from 'react'
import {TextField} from '@material-ui/core'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' 
import { userForgot } from '../services/userServices';


class ForgotPasswordInput extends Component
{
    constructor(props){
    super(props)
    this.state={
        email:''
    }
}
    handleEmailChange=event=>{
        const email=event.target.value
         this.setState({email:email})
    }
    handleNext=e=>{
        e.preventDefault();
        if(!this.state.email){
            toast("email cannot be empty",{position:toast.POSITION.TOP_CENTER})
        }
       else if(!/[a-z0-9._%+-]+@gmail.com/.test(this.state.email)){
            toast('Email Invalid',{position:toast.POSITION.TOP_CENTER})
        }
        else{
            var data={
                "email":this.state.email
            }
            userForgot(data)
        }
    }

    
    render(){
        return(
            <div>
                <div>
                <TextField 
                required
                label="Email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                margin="normal"
                variant="outlined"
                />
                </div>
                <button className="nextForgot" onClick={this.handleNext}>Next</button>
                <ToastContainer />
                </div>
        )
    }


}
export default ForgotPasswordInput