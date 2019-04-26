import React, { Component } from "react";
import { getNote, otherArray } from '../services/noteServices'
import Card from '@material-ui/core/Card'
class Notes extends Component {
    constructor() {
        super()
        this.state = {
            notes: []

        }
        this.displayCard = this.displayCard.bind(this);
    }
    componentDidMount() {
        getNote()
            .then((result) => {
                console.log("All notes==", result)
                this.setState({ notes: result.data.data })
                console.log("All notes in notes==", this.state.notes)

            })

            .catch((err) => {
                alert(err)
            })
    }

    displayCard(newNote) {
        console.log(newNote)
        this.setState({

            notes: [newNote,...this.state.notes, ]
        })
    }

    render() { 
        let otherArr = otherArray(this.state.notes)
    
            return( this.props.dashboardToNotes ?
                    <div className="notesDiv1">
                 {Object.keys(otherArr).map((key) => {
                    console.log("otherArr", otherArr[key].notes
                    );
                    return (
                        <div keys={key}  className="notesDiv2">
                            <Card className="notesCard">

                              title: {otherArr[key].title} <br></br>
                              description: {otherArr[key].description}  
                            </Card>
                        </div>
                    )
               
                })
            }
        
            </div>
            :
                <div className="notesDiv3">
                 {Object.keys(otherArr).map((key) => {
                    console.log("otherArr", otherArr[key].notes
                    );
                    return (
                        <div keys={key}  className="notesDiv4">
                            <Card className="notesCard">

                              title: {otherArr[key].title} <br></br>
                              description: {otherArr[key].description}  
                            </Card>
                        </div>
                    )
               
                })
            }
        
            </div>
                
            )
    
    }
}
export default Notes