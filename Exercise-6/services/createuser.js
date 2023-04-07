let fs=require("fs");

 let fileCreation= () => {
   fs.writeFileSync("./data/taskDetails.json","[]","utf-8" ,(err) => {
      if(err) {
        console.log(err);
      }else{
        res.send("File is Created");
      }
   });
 };
 
 

 module.exports={
    fileCreation
 }