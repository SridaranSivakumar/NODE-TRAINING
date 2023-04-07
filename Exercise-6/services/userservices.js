let fs=require("fs");
const logger = require("../utils/logger");


const readFile = (req,res) =>  {
   try{
      let data=fs.readFileSync("./data/taskDetails.json");
       return data;
   }
   catch(err){
      logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
      return res.status(501).send({message : "error occured"});
   }
}
const writeFile = (req,res,ExistingData) =>  {
    let data=fs.writeFileSync("./data/taskDetails.json",JSON.stringify(ExistingData), "utf-8");
     return data;
}
module.exports={
   readFile,writeFile
}
