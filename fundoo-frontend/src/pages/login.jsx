import React, { Component } from 'react';
import LoginInput from '../components/logininput'
import Card from '@material-ui/core/Card';

class login extends Component {
    render() {
        return (
            
            <Card className="cardLogin">
            <div>
                <center>

                    <div className="login">
                        <font color="yellow">
                            <h1>
                                <b>Fundoo</b>
                            </h1>
                        </font>
                        <h1>
                            Sign In
                        </h1>
                        <font size="1">
                            <h1>
                                with your Fundoo Account
            </h1>
                        </font>


                        <div>
                            <LoginInput />
                        </div>
                    </div>

                </center>
            </div>
            </Card>




        )
    }
}
export default login