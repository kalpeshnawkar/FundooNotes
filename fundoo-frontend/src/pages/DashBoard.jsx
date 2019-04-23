import React, {Component} from 'react'
 import Appbar from '../components/AppBar'
 import CreateNotes from '../components/CreateNotes'
class DashBoard extends Component{
    render(){
    return(
        <div>
            <div>
            <Appbar/>
 </div>
            <div className="noteCreate">
       
            <CreateNotes/>
            </div>
            </div>
          
            
    
    )
    }
}
export default DashBoard