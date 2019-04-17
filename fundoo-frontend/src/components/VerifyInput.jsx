import React, { Component } from 'react'
import { verifyService } from '../services/userServices';
class VerifyInput extends Component {
    constructor(props) {
        super(props)
        console.log("props", props);

    }

    componentDidMount() {
        console.log("props componentDidMount", this.props.props.match.params.token);
        try {
        const token = this.props.props.match.params.token;
        var data={
        }
            verifyService(data,token)

        }
        catch (e) {
            console.log(e)
     }
       
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default VerifyInput