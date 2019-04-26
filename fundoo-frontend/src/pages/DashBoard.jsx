import React, {Component} from 'react'
 import Appbar from '../components/AppBar'
 import CreateNotes from '../components/CreateNotes'
 import Notes from '../components/Notes'
class DashBoard extends Component{
    constructor(props){
        super(props)
        this.state={
            notesStyles:false
        }
      
       this.cardNote=React.createRef();
        this.getNewNote = this.getNewNote.bind(this);
        this.handleNotesStyle=this.handleNotesStyle.bind(this)
    }

    handleNotesStyle() {
        this.setState({ notesStyles: !this.state.notesStyles });
}
  getNewNote(newNote){
      console.log("newNote in dashboard==",newNote)
      this.cardNote.current.displayCard(newNote)
  }
    render(){
    return(
        <div>
            <div>
            <Appbar dashboardToApp={this.handleNotesStyle}
            />
 </div>
            <div className="noteCreate">
       
            <CreateNotes getNewNote={this.getNewNote}/>
            <Notes
              dashboardToNotes={this.state.notesStyles}
            ref={this.cardNote}/>
            </div>
            </div>
    )
    }
}

export default DashBoard