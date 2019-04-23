import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { userReset } from '../services/userServices';
class ResetPasswordInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            confirm: ''
        }
    }
    handlePasswordChange = event => {
        const password = event.target.value
        this.setState({ password: password })
    }
    handleConfirmChange = event => {
        const confirm = event.target.value
        this.setState({ confirm: confirm })
    }
    handleNext = event => {
        // try {
        event.preventDefault();
        
        if (this.state.password === '') {
            toast("Password can not be empty",
                { position: toast.POSITION.TOP_RIGHT })
        }
        else if (this.state.confirm === '') {
            toast("Confirm Password can not be empty", {
                position: toast.POSITION.TOP_RIGHT
            })
        }
        else if (this.state.password.length < 8) {
            toast("New Password must be atleast 8 character long",
                {
                    position: toast.POSITION.TOP_RIGHT
                })
        }


        else if (this.state.newPassword !== this.state.confirmPassword) {
            toast("password and confirm password must be same",
                {
                    position: toast.POSITION.TOP_RIGHT
                })
        }
        else {
            let data = {
                'password': this.state.password
            }
            event.preventDefault();
            var url=window.location.pathname;
            var verifyurl=url.substr(15)
            userReset(data,verifyurl)
        }
        // }
        // catch(e){
        //     console.log(e)
        // }
    }

    render() {
        return (
            <div>
                <div className="resetText">
                    <TextField
                        required
                        label="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        margin="normal"
                        variant="outlined"


                    /><br></br>
                    <TextField
                        required
                        label="Confirm"
                        type="password"
                        name="confirm"
                        value={this.state.confirm}
                        onChange={this.handleConfirmChange}
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
export default ResetPasswordInput