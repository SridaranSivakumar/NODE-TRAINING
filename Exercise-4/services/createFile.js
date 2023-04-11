let fs = require("fs");

let fileCreation = () => {
   fs.writeFileSync("./data/cdw_ace23_buddies.json", "[]", "utf-8", (err) => {
      if (err) console.log(err);
   });
};
module.exports = {
   fileCreation
}