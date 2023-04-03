let http=require("http");
let url=require("url");
let fs=require("fs");
const { Console } = require("console");

//create a server 
http.createServer((req,res,err)=>{
  //read the json file and store in a array
    fs.readFile("./json/color_ palette.json","utf-8",(err, data)=>{
        if(err){
          console.log("file not found");
        }else{
          let datas=JSON.parse(data);
          let count=0;
          let randomColors= [];
          while(count++<5){
              randomColors.push(datas[Math.floor(Math.random()*datas.length)]);
          }
          //Write the array data in a file 
        fs.writeFileSync("./index.json",JSON.stringify(randomColors),"utf-8",(err)=>{
            if(err) console.log("file not found");
        });
      //Read the index.json file and print in webpage
       let random=JSON.parse(fs.readFileSync("./index.json"));
         res.write(JSON.stringify(random));
         console.log(random);
         res.end();
        }
     });
     
}).listen(4000);