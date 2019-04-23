import React, { Component } from 'react'
import { Input } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Tools from './Tools';
import {noteService} from '../services/userServices'

class CreateNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description:'',
            openNote: false,
            newNote:{}
        }
    }
    handleDescriptionChange = (event) => {
        const description = event.target.value
        this.setState({ description: description })
    }

    handleTitleChange = (event) => {
        const title = event.target.value
        this.setState({ title: title })
    }


    handleToggle = () => {
        this.setState({
            openNote: !this.state.openNote
        })
        if(this.state.title!==''|| this.state.description!==''){
            const data={
                title:this.state.title,
                description:this.state.description
            }
            console.log(data)
            noteService(data)
            .then(function(response){
            this.setState({newNote:response

            })
            this.props.getNewNote(this.state.newNote)

            })
            .catch(function(err){
                console.log(err)
            })
        }
        this.setState({
            title: "",
        description: ""
        })
    
    }

    render() {
        return (!this.state.openNote ?
            <div>
                <Card>
                    <Input
                        multiline
                        disableUnderline={true}
                        placeholder="take a note.."
                        onClick={this.handleToggle}
                    />
                </Card>
            </div>
            :
            <div>
                <Card>
                    <div>

                    <Input
                        multiline
                        disableUnderline={true}
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        />
                        </div>
                        <br></br>
                        
                    <Input 
                        multiline
                        disableUnderline={true}
                        placeholder="take a note.."
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                      />
                      <div className="noteTools" >
                          <Tools />
                        <label className="noteClose" onClick={this.handleToggle}>Close</label>
                        
                    </div>
                </Card>
            </div>





        )
    }

}
export default CreateNotes