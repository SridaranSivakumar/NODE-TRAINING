const app = require("express");
const router=app.Router();
let controller=require("../controllers/controller");

router.post("/sorting",(req,res)=>{
    controller.sortTask;
});
router.delete("/filter",(req,res)=>{
    controller.filterTask;
  
})