import React, { Component } from 'react';
import RemindMe from './RemindMe'
import ColorChange from'./ColorChange'
import AddFile from "./AddFile"

class Tools extends Component {
    constructor(props){
     super()

    }
    render() {
       
        
        return (

        
                <div className="tools" >
                    <RemindMe />
                    <ColorChange />
                    <AddFile />
                    
                </div>




        )
    }
}
export default Tools