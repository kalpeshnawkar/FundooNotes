const note =require('../app/model/CreateNote')
exports.noteService=(data,callback)=>{
note.createNote(data,(err,result)=>{
    console.log("req body in service==",data)
    if(err){
        callback(err)
    }
    else{
        callback(null,result)
    }
})
}