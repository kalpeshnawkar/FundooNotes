import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import { withRouter } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { userLogin } from '../services/userServices'

class LoginInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleEmailChange = event => {
        const email = event.target.value
        this.setState({
            email: email
        })
    }
    handleuserPsswordChange = event => {
        const password = event.target.value
        this.setState({
            password: password
        })
    }
    onClickForgotPassword = e => {
        e.preventDefault();
        this.props.history.push('/forgotpassword')
    }
    onClickCreateAccount = e => {
        e.preventDefault();
        this.props.history.push('/register')

    }
    handleNext = event => {
        event.preventDefault()
        if (!this.state.email) {
            console.log("toast called")
            toast("Email Cannot Be Empty", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if (!/([A-Za-z0-9])+@([A-Za-z0-9])+.([A-Za-z]{2,4})$/.test(this.state.email)) {
            toast("Email Invalid",
                {
                    position: toast.POSITION.TOP_CENTER
                })
        }
        else if (!this.state.password) {
            toast("password Cannot Be Empty", {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        else if (this.state.password.length < 8) {
            toast("password must be of 8 atleast characters long !", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        else {
            var data = {
                'email': this.state.email,
                'password': this.state.password
            }
            userLogin(data)
                
            
        }

    }

    render() {
        return (
            <div>
                <div>
                    <TextField className="loginTextField1"
                        required
                        label="Email"
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        margin="normal"
                        variant="outlined"
                    />


                    <TextField className="loginTextField1"
                        required
                        id="outlined-name"
                        label="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleuserPsswordChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <u onClick={this.onClickForgotPassword}><b>Forgot Password?</b></u><br></br>

                <div className="nextLogin">
                    <u className="loginCreate" onClick={this.onClickCreateAccount}><b>create Account</b></u>
                    <button className="buttonNext" onClick={this.handleNext}>Next</button>
                </div>
                <ToastContainer />
            </div>




        )
    }



}
export default withRouter(LoginInput);