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
                        <font size="1">
                        <h1>
                            Create Your Google Account
                        </h1>
                        </font>
                        
                        

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