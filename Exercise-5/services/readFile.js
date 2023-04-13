let fs=require("fs");
const logger = require("../utils/logger");
const controller=require("../controllers/controller")
const message=require("../constant/constant");
const readFile = (req,res) =>  {
      let data=fs.readFileSync("./data/cdw_ace23_buddies.json");
       return data;
}
const getAllbuddies = (req,res) =>  {
   let ExistingData = [];
    ExistingData = JSON.parse(readFile(req,res));
    return ExistingData;
}
const getDetailById = (req,res,id) =>  {
   let ExistingData = [];
   ExistingData = JSON.parse(readFile(req,res));
   let specificData;
   ExistingData.forEach((element, index) => {
       if (element.employeeId == id) {
           specificData = ExistingData[index];
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

