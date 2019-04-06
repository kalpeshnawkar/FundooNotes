import React, {Component} from 'react'
import card from '@material-ui/core'
import ForgotPasswordInput from '../components/ForgotPasswordInput'
class ForgotPassword extends Component{
    render(){
    return(
        <card>
        <div>
            <font color="Red">
        <h1>FUNDOO</h1>
        </font>
        <font size="1">
        <h1>Create account with Fundoo</h1>
        </font>
        <dib>
            < ForgotPasswordInput />
        </dib>

        </div>
        </card>
    )
    }
}
export default ForgotPassword