const writeFile = (req,res,ExistingData) =>  {
    let data=fs.writeFileSync("./data/cdw_ace23_buddies.json",JSON.stringify(ExistingData), "utf-8");
     return data;
}
module.exports={
   writeFile
}