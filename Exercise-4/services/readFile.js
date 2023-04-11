let fs=require("fs");
const controller=require("../controllers/controller")
const message=require("../constant/constant");
const readFile = (req,res) =>  {
      let data=fs.readFileSync("./data/cdw_ace23_buddies.json");
       return data;
}


const getAllbuddies = (req,res) =>  {
   let existingData = [];
    existingData = JSON.parse(readFile(req,res));
    return existingData;
}


const getDetailById = (req,res,id) =>  {
   let existingData = [];
   existingData = JSON.parse(readFile(req,res));
   let specificData;
   existingData.forEach((element, index) => {
       if (element.employeeId == id) {
           console.log(typeof(element.employeeId));
           specificData = existingData[index];
       }
   });
   if(specificData!=null) {
      return specificData;
   }else{
      return {message : message.INVALID_ID };
   }
}

module.exports={
   readFile,getAllbuddies,getDetailById
}

