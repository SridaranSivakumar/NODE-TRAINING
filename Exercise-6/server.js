const express = require("express");
const app = express();
const port = 4000;
const url=require("url");
const cors=require("cors");
const createFile=require("./services/createFile");
const userservice=require("./routers/userroute")
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(
   cors({
      origin:["https://localhost:5500","https://127.0.0.1:5500"],
      methods:['GET','POST','PUT','GET','DELETE']
   })
)

app.use("/write",userservice);

app.use("/delete",deleteTask);

app.use("/readTasks",readTasks);

app.use("/readSingleTask",readSingleTask);

app.use("/update",updateTask);

app.use("/filter",filterTask);

app.use("/sort",sort);

app.use("/create",(req,res)=>{
   createFile.fileCreation();
});


app.listen(port, () => console.log(`Example app listening on port: ${port}!`));