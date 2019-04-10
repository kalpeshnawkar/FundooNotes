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
                            <font color="red">
                                <h1>
                                    <b>Fundoo</b>
                                </h1>
                            </font>
                            <h1 className="loginh1">
                                Sign In
                        </h1>
                            <div className="loginh2">
                                with your Fundoo Account
                        </div>
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