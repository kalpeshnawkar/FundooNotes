import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card'


const colorCodesAndNames = [{ name: "red", colorCode: "rgb(242, 139, 130)" },
{ name: "orange", colorCode: "rgb(251, 188, 4)" },
{ name: "yellow", colorCode: "rgb(255, 244, 117)" },
{ name: "lightGreen", colorCode: "rgb(204, 255, 144)" },
{ name: "Teal", colorCode: "rgb(167, 255, 235)" },
{ name: "blue", colorCode: "rgb(203, 240, 248)" },
{ name: "purple", colorCode: "rgb(215, 174, 251)" },
{ name: "pink", colorCode: "rgb(253, 207, 232)" },
{ name: "white", colorCode: "rgb(255, 255, 255)" },
{ name: "brown", colorCode: "rgb(230, 201, 168)" },
{ name: "darkBlue", colorCode: "rgb(174, 203, 250)" },
{ name: "gray", colorCode: "rgb(232, 234, 237)" }
]
class ColorChange extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            open: false
        }
    }
    handleToggle =() => {
        this.setState({ open: !this.state.open })

    }
    render() {
        const colorChange = colorCodesAndNames.map((key) => 
            <Tooltip title={key.name}
            >
                <IconButton style={{ backgroundColor: key.colorCode }}
                    value={key.name}>
                </IconButton>
            </Tooltip>

        )

        return (
            <div>
            {this.state.open ?
                <div>
                    <Card className="colorCard">
                    {colorChange}
                    </Card>
                </div>
                : null
            }
          
                <Tooltip title='Change color'>
                    <img onClick={this.handleToggle} src={require('../assets/images/Color.svg')} alt="change color"></img>
                </Tooltip>

               
            </div>


        )
    }
}
export default ColorChange