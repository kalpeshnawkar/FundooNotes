import React, { Component } from 'react'
import ResetPasswordInput from '../components/ResetPasswordInput'
import Card from '@material-ui/core/Card'
class RestPassword extends Component {
    render() {
        return (
            <Card className="resetCard">
                <div>

                    <center>

                        <div className="register">
                            <font color="Red">
                                <h1>
                                    <b>Fundoo</b>
                                </h1>
                                </font>
                                <div className="reseth1">
                                    Enter Your Password
                                </div>
                                <ResetPasswordInput />
                                </div>
                    </center>
                        </div>
                </Card>
                    )
            
                    
                }
            }
export default RestPassword