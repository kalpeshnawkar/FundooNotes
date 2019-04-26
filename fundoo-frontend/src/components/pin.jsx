import React, {Component} from 'react'
import Tooltip from '@material-ui/core/Tooltip'
class GridView extends Component{
    constructor(props){
        super(props)
        this.state={
            openGrid:false
        }
    }

    
    handleGridView=()=>{
    this.setState({openGrid:!this.state.openGrid})
    }
     
    render()
    {
        return(this.state.openGrid ?
            <div>
            <Tooltip title='pin note'>
            <img src={require('../assets/images/pin.svg')}
            alt="pin note"
            onClick={this.handleGridView}>
            </img>
            </Tooltip>
            </div>
            :
            <div>
            <Tooltip title='grid view'>
            <img src={require('../assets/images/list.svg')}
            alt="list view"
            onClick={this.handleGridView}>
            </img>
            </Tooltip>
             
            </div> 
            

        )
    }
}
export default GridView