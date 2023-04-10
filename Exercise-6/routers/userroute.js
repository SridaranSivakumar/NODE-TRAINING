const app = require("express");
const router=app.Router();
let controller=require("../controllers/controller");

router.post("/write",(req,res)=>{
    controller.writeData;
});
router.delete("/update",(req,res)=>{
    controller.deleteTask;
  
});

router.put("/delete",(req,res)=>{
    controller.updateTask;
});

router.get("/readTasks",(req,res)=>{
    controller.getAllTasks;
});

router.get("/readAllTasks",(req,res)=>{
    controller.getTask;
});

module.exports=router;