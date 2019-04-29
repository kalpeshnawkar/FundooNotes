const mongoose = require('mongoose')
const createNoteSchema = new mongoose.Schema({
    'userID':{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema"
    },
    'title': {
        type: String,
        require: true
    },
    'description': {
        type: String,
        require: true
    },
    'remindMe':{
        type:String
    }
})
const note = mongoose.model('note', createNoteSchema)
function note_model() {

}
note_model.prototype.createNote = (request, callback) => {
    console.log("req in model==",request)
    var note_data=new note({
        'title':request.title,
        'description':request.description,
        'remindMe':request.remindMe,
        'userID':request.userID
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
note_model.prototype.getAllNote = (req,callback) => {
    
    note.find({userID:req.userID},(err,result)=>{
    if(err)
    {
        callback(err);
    }
    else
    {
        console.log("result in model==",result)
        callback(null,result)
    }
})
}

note_model.prototype.editNote=(req, callback)=> {   
    console.log("editData in note model=",req)
   note.findOneAndUpdate(
        {
            _id: req.userID
        },
        {
            $set:{
                title :req.title,
                description:req.description,
                remindMe:req.remindMe
            }
        },
        (err,result)=>{
            if(err){
                callback(err)
            }else{
                console.log("updated note data ...",result)
                return callback(null,result)
            }
});
}

module.exports = new note_model


