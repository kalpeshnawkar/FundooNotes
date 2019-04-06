import React, {Component} from 'react'
import {TextField} from '@material-ui/core'
class ForgotPasswordInput extends Component
{
    constructor(props){
    super(props)
    this.state={
        email:'email'
    }
}
    handleEmailChange=event=>{
        const email=event.target.value
         this.setState({email:email})
    }

    
    render(){
        return(
            <div>
                <div>
                <TextField 
                label="Email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                margin="normal"
                varient="outlined"
                />
                </div>
                <button className>Next</button>
                </div>
        )
    }


}
export default ForgotPasswordInput