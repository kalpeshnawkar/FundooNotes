import React, {Componenet} from 'reacy'
import { TextField } from '@material-ui/core';
class ResetPasswordInput extends Component
{
    constructor(props){
        super()
        this.state={
            password:'',
            confirm:''
        }
    }
    handleConfirmChange=event=>{
        const password=event.target.value
        this.setState({password:password})
    }
    handleConfirmChange=event=>{
        const confirm=event.target.value
        this.setState({confirm:confirm})
    }
    
        render()
        {
            return(
                <div>
                    <TextField
                    label="Password"
                    name="password"
                    vaule={this.state.password}
                    onChange={this.handlePasswordChange}
                    margin="normal"
                    varient="outlined"

                    />
                    <TextField
                    label="Confirm"
                    name="confirm"
                    vaule={this.state.confirm}
                    onChange={this.handleConfirmChange}
                    margin="normal"
                    varient="outlined"

                    />
                       
                </div>
            )
        }

    }
}