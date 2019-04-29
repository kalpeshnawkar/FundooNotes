import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
 import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
 

 class DialogBox extends Component {
   constructor(){
    super()
   
   this.state={
    title:'',
    description:'',
    note: '',
    _id: ''
   }
   this.notesData=this.notesData.bind(this)
   }
   handleTitleChange=(event)=>{
     const title=event.target.value
     this.setState({title:title

     })
   }
   handleDescriptionChange=(event)=>{
    const description=event.target.value
    this.setState({description:description

    })
  }
  
  noteData(note){
    console.log("hghgh",note);
    
    if (note.title !== undefined || note.description !== undefined) {
      this.setState({
          note: note,
          title: note.title,
          description: note.description,
          _id: note._id
      })
  }
}
  render() {
    return (
     
      <div>

        <Dialog
          open={this.props.dialogBoxOpen}
         
          onClose={this.props.handleEditNotes}
        >
          <DialogContent>
            <TextField 
              type='text'
              value={this.state.title}
              placeholder="title"
              onChange={this.handleTitleChange}
              fullWidth
            />
            <TextField 
              type='text'
              value={this.state.description}
              placeholder="description"
              onChange={this.handleDescriptionChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleEditNotes} color="primary">
              Close
            </Button>
             </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default DialogBox