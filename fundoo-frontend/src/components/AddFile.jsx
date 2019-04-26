import React, {Component} from 'react'
import Tooltip from '@material-ui/core/Tooltip'
class AddFile extends Component{

    
    handleOpenFile(){
        this.inputOpenFileRef.click()
    }
    onChangeFile(event) {
         event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];
        console.log(file);
        this.setState({file}); /// if you want to upload latter
    }
    render()
    {
        return(
            <div>
            <Tooltip title='Add File'>
            <img src={require('../assets/images/addfile.svg')}
            alt="upload a file"
            onClick={()=>{this.handleOpenFile()}}
            >
            </img>
            
            </Tooltip>
             <input type="file"
             id="file" 
             ref={inputOpenFileRef=>this.inputOpenFileRef=inputOpenFileRef}
              style={{display: "none"}}
              onChange={(event)=>this.onChangeFile(event)}>
              </input>
              </div> 
            

        )
    }
}
export default AddFile