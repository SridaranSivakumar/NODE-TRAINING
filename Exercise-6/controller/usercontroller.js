const fs = require("fs");
const read = require("../services/userservices")
const write = require("../services/userservices")

let writeData = (req, res) => {
    data = req.body;
    let ExistingData = [];
    ExistingData = JSON.parse(read.readFile(req, res));
    ExistingData.push(data);
    let writeFile = write.writeFile(req, res, ExistingData);
    ExistingData = JSON.parse(read.readFile(req, res));
    res.send(ExistingData);
}
let reradAllTask = (req, res) => {
    try {
        let ExistingData = [];
        ExistingData = JSON.parse(read.readFile(req, res));
        res.send(ExistingData)
    }
    catch (err) {
        console.log("ERROR");
    }
}
let readTask = (req, res) => {
    try {
        data = req.body;
        // console.log(data);
        let ExistingData = [];
        ExistingData = JSON.parse(read.readFile(req, res));
        let specificData;
        ExistingData.forEach((element, index) => {
            if (element.employeeId == data.employeeId) {
                specificData = ExistingData[index];
            }
        });

        res.send(specificData);
    }
    catch (err) {
        console.log("ERROR");
    }
}
let deleteTask = (req, res) => {
    try {
        data = req.body;
        let ExistingData = [];
        ExistingData = JSON.parse(read.readFile(req, res));
        let specificData;
        ExistingData.forEach((element, index) => {
            if (element.employeeId == data.employeeId) {
                specificData = ExistingData[index];
                ExistingData.splice(index);
                // console.log(index);
            }
        });

        let writeFile = write.writeFile(req, res, ExistingData);
        ExistingData = JSON.parse(read.readFile(req, res));
        res.send(ExistingData);

    }
    catch (err) {
        console.log("ERROR");
    }

}
module.exports = {
    writeData, readTask, reradAllTask, deleteTask
}