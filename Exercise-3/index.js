
   let http=require("http");
   let url=require("url");
   let fs=require("fs");
   const { Console } = require("console");
   
   //Read the JSON file and fetch the data
   http.createServer((req,res,err)=>{
     //read the json file and store in a array
       fs.readFile("./json/color_ palette.json","utf-8",(err, data)=>{
           if(err){
             console.log("file not found");
           }else{
              //TO convert the data into JSON
             let datas=JSON.parse(data);
             let count=0;
             let randomColors= [];
             let randomNumbers=require("random-number")
        var options={
            min:0,
            max:datas.length-1,
            integer:true
        }
         //Fetch the Random 5 color 
        while(count++<5){
            randomColors.push(datas[Math.floor(randomNumbers(options))]);
           
           
        }
             //Write the random 5 colors in index.json file
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