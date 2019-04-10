import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import ForgotPasswordInput from '../components/ForgotPasswordInput'
class ForgotPassword extends Component{
    render(){
    return(
        <Card className='forgotCard'>
        <div>
            <font color="Red">
        <h1>Fundoo</h1>
        </font>
        <h1 className="forgoth1"><b>Find Your Password</b></h1>
        <font size="">
        <div className="forgoth2">Enter Your Email</div>
        </font>
        <div>
            < ForgotPasswordInput />
        </div>

        </div>
        </Card>
    )
    }
}
export default ForgotPassword