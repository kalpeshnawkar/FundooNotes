import React, {Component} from 'react'
import Tooltip from '@material-ui/core/Tooltip'
class GridView extends Component{
    constructor(props){
        super(props)
        this.state={
            openGrid:false
        }
        this.handleGridView = this.handleGridView.bind(this);
    }

    
    handleGridView=()=>{
    this.setState({openGrid:!this.state.openGrid})
    this.props.GridViewToApp()
    }
     
    render()
    {
        return(this.state.openGrid ?
            <div className="grid">
            <Tooltip title='grid view'>
            <img src={require('../assets/images/grid.svg')}
            alt="grid view"
            onClick={this.handleGridView}>
            </img>
            </Tooltip>
            </div>
            :
            <div className="grid">
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