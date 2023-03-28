let http=require("http");
let url=require("url");
let fs=require("fs");

//Read the JSON file and fetch the data
   fs.readFile("./json/color_ palette.json",(err,data)=>{
      if(err){
        console.log("file not found");
      }else{
        //TO convert the data into JSON
        let datas=JSON.parse(data);
        let count=0;
        let randomColors= [];
        //Fetch the Random 5 color 
        while(count++<5){
            randomColors.push(datas[Math.floor(Math.random()*datas.length)]);
           
        }
      //Write the random 5 colors in index.json file
        fs.writeFileSync("./index.json",JSON.stringify(randomColors),"utf-8",(err)=>{
            if(err) console.log("file not found"); 
   });
   //Read the Index.json file and print in the console
   fs.readFile("./index.json",(err,data)=>{
    if(err){
      console.log("file not found");
    }else{
      let randomColor=JSON.parse(data);
      console.log(randomColor);

    }
});
  
}
   });