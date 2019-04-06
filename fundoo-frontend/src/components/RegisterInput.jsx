import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
class RegisterInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm: ''
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
       onClickCreateAccount =e=>{
        e.preventDefault();
        this.props.history.push('/login');

           }
    
    render() {
        return (
            <div>
                <div className="nameRegister">

                    <TextField
                        label="First Name"
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
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
                    
                        label="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        margin="normal"
                        variant="outlined"
                    />


                    <TextField
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
                <u onClick={this.onClickCreateAccount}>Sign in instead</u>
                    <button className="buttonNext">Next</button>
                </div>
            </div>




        )
    }



}
export default RegisterInput;