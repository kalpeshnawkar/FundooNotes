import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import {withRouter} from 'react-router-dom'
class LoginInput extends Component{
    constructor(props){
    super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handleEmailChange=event=>{
        const email=event.target.value
        this.setState({
            email:email
        })
    }
    handleuserPsswordChange=event=>{
        const password=event.target.value
        this.setState({
            password:password
        })
    }
       onClickCreateAccount =e=>{
            e.preventDefault();
            this.props.history.push('/register')

       }
    
    render(){
        return(
            <div>
            <div>
              <TextField
              id="outlined-name"
              label="Email"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
             margin="normal"
              variant="outlined"
                />
            
             
             <TextField
            id="outlined-name"
             label="password"
            name="password"
             type="email"
             value={this.state.password}
             onChange={this.handleuserPsswordChange}
            margin="normal"
             variant="outlined"
               />
               </div>
                   <u onClick={this.onClickCreateAccount}><b>ForGot Email?</b></u><br></br>
                  <u onClick={this.onClickCreateAccount}><b>ForGot Password?</b></u><br></br> 
              
                  <div className="nextLogin">
                  <u onClick={this.onClickCreateAccount}><b>create Account</b></u>
                  <button className="buttonNext">Next</button>
                  </div>
                 </div>
                 
                 
                 

         ) }
      
    

}
export default withRouter(LoginInput);