const note =require("../services/NoteService")
exports.noteController = (req,res) => {
        //check vadiation of data
//    req.checkBody('title','title is not valid').isLength({min:3}).isAlpha();
//    req.checkBody('description','description is not valid').isLength({min:3}).isAlpha();
//    var errors=req.validationErrors();
   var res_result = {};
   // if there is wrong validation then an errors
   if(req.body==null){
      
       res_result.status = false;
       res_result.message = "Field is empty";
       res.status(422).send(res_result);
   }
    else{
         console.log("req body in controller==",req.body)
        var note_data={
            "title":req.body.title,
            "description":req.body.description,
           "userID" :req.decoded.payload.user_id
        }
        console.log(note_data)
         
    note.noteService(note_data,(err,result)=>{
        if(err){
            res_result.status=false;
            res_result.message=err;
            res.status(400).send(res_result)

        }
        else{
            res_result.status=true;
            res_result.data=result;
            res.status(200).send(res_result)

        }

    })
    }
}
exports.getAllNote= (req,res) => {
    
    var res_result = {};

 var userID={
        
           "userID" :req.decoded.payload.user_id
        }
    note.getAllNote(userID,(err,result) => {
        
        if(err){
            
            res_result.status = false;
            res_result.message = err;
            res.status(400).send(res_result);
        }
        else
        {
            res_result.status = true;
            res_result.data = result;
            res.status(200).send(res_result);
        }
    })
    
}
