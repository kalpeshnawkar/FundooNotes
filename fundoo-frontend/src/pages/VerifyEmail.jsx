import React, { Component } from 'react';
import VerifyInput from '../components/VerifyInput'


class VerifyEmail extends Component {
    constructor(props) {
        super(props);
        console.log("Props verifyEmail", this.props);
        
    }
    render() {
        return (

                        <div >
                            <div>
                                < VerifyInput props={this.props} />
                            </div>
                        </div>
        )
    }
}
export default VerifyEmail