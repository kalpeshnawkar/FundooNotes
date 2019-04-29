import React, { Component } from 'react';
import RemindMe from './RemindMe'
import ColorChange from'./ColorChange'
import AddFile from "./AddFile"

class Tools extends Component {
    constructor(props){
     super()

    }
 
    render() {
     
        var  setAMPM=parseInt(new Date().getHours())>=8 ?"PM":"AM"
        console.log("setAMPM in tools",setAMPM)
        
        return (

        
            <div className="tools"> 
                    <RemindMe
                    reminder={this.props.reminder} 
                    setAMPM={setAMPM}/>
                    <ColorChange />
                    <AddFile />
                    
                </div>




        )
    }
}
export default Tools