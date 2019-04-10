import React, { Component } from 'react';
import RegisterInput from '../components/RegisterInput'
import Card from '@material-ui/core/Card';

class register extends Component {
    render() {
        return (

            <Card className="cardRegister">
                <div>
                    <center>

                        <div className="register">
                            <font color="Red">
                                <h1>
                                    <b>Fundoo</b>
                                </h1>
                            </font>
                            <h1 className="registerh1">
                                Create Your Fundoo Account
                        </h1>
                            <div>
                                <RegisterInput />
                            </div>
                        </div>

                    </center>
                </div>
            </Card>




        )
    }
}
export default register