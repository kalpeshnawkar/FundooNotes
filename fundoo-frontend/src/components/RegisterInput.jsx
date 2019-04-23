import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' 
import {withRouter} from 'react-router-dom'
import {userRegister} from '../services/userServices'

class RegisterInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm: '',
        
        }
    }
    handleFirstNameChange = event => {
        const firstName = event.target.value
        this.setState({
            firstName: firstName
        })
    }
        handleLastNameChange = event => {
            const lastName = event.target.value
            this.setState({
                lastName: lastName
            })
        }
    handleEmailChange = event => {
        const email = event.target.value
        this.setState({
            email: email
        })
    }
    handlePasswordChange = event => {
        const password = event.target.value
        this.setState({
            password: password
        })
    }
        handleConfirmChange = event => {
            const confirm = event.target.value
            this.setState({
                confirm: confirm
            })
        }
       onClickSignInInstead =e=>{
        e.preventDefault();
        this.props.history.push('/login')

           }
           handleNext=e=>{
               e.preventDefault();
               if(this.state.firstName===''){
                   toast('firstName cannot be empty',{
                       position:toast.POSITION.TOP_CENTER
                   } )
               }
               else if(this.state.lastName===''){
                   toast('lastname cannot be empty',{
                       position:toast.POSITION.TOP_CENTER
                   })

               }
               else if (this.state.email === "") {
                toast("Email Can not be Empty",
                    {
                        position: toast.POSITION.BOTTOM_CENTER
                    })
            }
            else if (!/([A-Za-z0-9])+@([A-Za-z0-9])+.([A-Za-z]{2,4})$/.test(this.state.email)) {
                toast("Email Invalid",
                    {
                        position: toast.POSITION.BOTTOM_CENTER
                    })
            }

            else if (this.state.password.length < 8) {
                toast("password length must be atleast 8 characters long",
                    {
                        position: toast.POSITION.BOTTOM_CENTER
                    })
            }
            else if (this.state.password !== this.state.confirm) {
                toast("password and confirm password must be same",
                    {
                        position: toast.POSITION.BOTTOM_CENTER
                    })
            }
            else{
                var data={
                    "firstName":this.state.firstName,
                    "lastName":this.state.lastName,
                    "email":this.state.email,
                    "password":this.state.password
                }
                userRegister(data)
            }
           }
    
    render() {
        return (
            <div>
                <div className="nameRegister">

                    <TextField 
                                  required
                        label="First Name"
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField 
                                  required
                        label="Last Name"
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div className="emailRegister">
                    <TextField
                        required
                        label="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div className="nameRegister">
                    <TextField
                        required
                        label="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        margin="normal"
                        variant="outlined"
                    />


                    <TextField
                        required
                        label="Confirm"
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirm}
                        onChange={this.handleConfirmChange}
                        margin="normal"
                        variant="outlined"
                    />
                    
                </div>


                <div className="nextRegister">
                <u onClick={this.onClickSignInInstead }>Sign in instead</u>
                    <button className="buttonRegister" onClick={this.handleNext}>Next</button>
                </div>
                <ToastContainer />
            </div>




        )
    }



}
export default withRouter(RegisterInput);