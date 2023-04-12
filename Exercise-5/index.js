const express = require("express");
const app = express();
const port = 4000;
const url=require("url");
const createFile=require("./services/createFile");
const routers=require("./routes/routers")
const cors=require("cors");
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(
   cors({
      origin:["https://localhost:5500","https://127.0.0.1:5500"],
      methods:['GET','POST','PUT','GET','DELETE']
   })
)

app.use("/buddies",routers);

app.use("/create",(req,res)=>{
   createFile.fileCreation();
});




// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port: ${port}!`));