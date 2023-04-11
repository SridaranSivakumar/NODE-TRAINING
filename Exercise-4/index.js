const express = require("express");
const app = express();
const port = 4000;
const url = require("url");
const createFile = require("./services/createFile");
const routers = require("./routes/routers")
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/buddies", routers);

app.use("/create", (req, res) => {
   createFile.fileCreation();
});

app.listen(port, () => console.log(`Example app listening on port: ${port}!`));