const mongoose = require('mongoose')
const createNoteSchema = new mongoose.Schema({
    'title': {
        type: String,
        require: true
    },
    'description': {
        type: String,
        require: true
    }
})
const note = mongoose.model('note', createNoteSchema)
function note_model() {

}
note_model.prototype.createNote = (request, callback) => {
    console.log("req in model==",request)
    var note_data=new note({
        'title':request.title,
        'description':request.description
    })
    note_data.save((err,result) => {

        if (err) {
            callback(err)
        }
        else {
            return callback(null, result)
        }
    })
}
module.exports = new note_model


