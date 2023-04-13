const app = require("express");
const url = require("url");
const router=app.Router();
let controller=require("../controllers/controller");

router.post("/write",(req,res)=>{
   
    controller.writeData(req,res);
});
router.put("/update",(req,res)=>{
   
    controller.updateBuddies(req,res);
  
});

router.delete("/delete/:id",(req,res)=>{
   
    controller.deleteBuddies(req,res);
});

router.get("/getDetail/:id",(req,res)=>{
    
    controller.getDetailById(req,res);
});

router.get("/getAllDetails",(req,res)=>{
   
    controller.getAllDetails(req,res);
});

module.exports=router;