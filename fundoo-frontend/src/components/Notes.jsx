import React, { Component } from "react";
import { getNote, otherArray } from '../services/noteServices'
import Card from '@material-ui/core/Card'
import { Chip } from "@material-ui/core";
import Dialog from './DialogBox'
import Tools from './Tools'
class Notes extends Component {
    constructor() {
        super()
        this.state = {
            notes: [],
            dialogBoxOpen:false

        }
        this.notesToDialogBox = React.createRef();


        this.displayCard = this.displayCard.bind(this);
        this.handleEditNotes=this.handleEditNotes.bind(this)
   
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
    handleEditNotes(note){
         this.setState({
              dialogBoxOpen: !this.state.dialogBoxOpen
         })
        console.log("note in notes=",note)
        this.notesToDialogBox.current.noteData(note);
        console.log('dialogbox==',this.state.dialogBoxOpen)
    }

    displayCard(newNote) {
        console.log(newNote)
        this.setState({

            notes: [newNote, ...this.state.notes,]
        })
    }

    render() {
        let otherArr = otherArray(this.state.notes)

        return (this.props.dashboardToNotes ?
            <div className="notesDiv1">
                {Object.keys(otherArr).map((key) => {
                    console.log("otherArr1", otherArr[key]
                    );
                    return (
                        <div keys={key} className="notesDiv2">
                            <Card className="notesCard">
                                <div onClick={()=>this.handleEditNotes(otherArr[key])}>
                                    title: {otherArr[key].title} <br></br>
                                    description: {otherArr[key].description}
                                </div>
                                {otherArr[key].remindMe ?
                                    <Chip
                                        label={otherArr[key].remindMe}
                                    >


                                    </Chip>
                                    :
                                    null}
                                    <div className='notesTolls'>
                                     <Tools/>
                                     </div>
                            </Card>



                        </div>
                    )

                })
                }

            </div>
            :
            <div className="notesDiv3">
                {Object.keys(otherArr).map((key) => {
                    console.log("otherArr", otherArr[key]
                    );
                    return (
                        <div keys={key} className="notesDiv4">
                            <Card className="notesCard">
                            <div onClick={this.handleEditNotes(otherArr[key])}>
                                title: {otherArr[key].title} <br></br>
                                description: {otherArr[key].description}
                                </div>
                                {otherArr[key].remindMe ?
                                    <Chip
                                        label={otherArr[key].remindMe}
                                    >
                                    </Chip>
                                    :
                                    null}
                                  
                                  <div className='notesTolls'>
                       
                                    <Tools/>
                                    </div>
                             
                            </Card>
                        </div>
                    )

                })
                }
                {this.state.dialogBoxOpen ?
                    <Dialog
                    ref={this.notesToDialogBox}
                    dialogBoxOpen={this.state.dialogBoxOpen} 
                    handleEditNotes={this.handleEditNotes}/>
        
    
                    :
                    null
                    }
                   
            </div>

        )

    }
}
export default Notes