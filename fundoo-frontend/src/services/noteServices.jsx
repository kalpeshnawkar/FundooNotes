import axios from 'axios'
function createNoteService(data,token){
    console.log("data of create note=",data)
    console.log("token of create note=",token)
    
    return axios('/createNote', {
        method: "POST",
        headers: {
            "token": token.token
        },
        data:data
})
}
function getNote()
{
   return axios('/getAllNote',{
        method:"Get",
        headers:{
            "token":localStorage.getItem('token')
        }
    })
  
    
}










// function otherArray(notesData)
// {
//    var otherArr=[];
//     for(var i=0;i<notesData.length;i++){
//         otherArr.push(notesData[i])
//         console.log("otherArr in noteServices==",otherArr)
//     }
//     return otherArr;

// }

 function otherArray(notesData) {
    let otherArr = [];
    for (let i = 0; i < notesData.length; i++) {
      
            otherArr.push(notesData[i]);
        
    }
    return otherArr;
}
export {createNoteService,getNote,otherArray}