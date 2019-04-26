const note =require('../app/model/Note')
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
exports.getAllNote=(data,callback)=>{
    note.getAllNote(data,(err,result)=>{
        console.log("req body in  services=",data)
        
        
        if(err){
            callback(err);
        }
        else
        {
            return callback(null,result);

        }
    })
}
    