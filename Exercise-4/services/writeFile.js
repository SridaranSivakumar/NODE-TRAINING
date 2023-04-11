let fs = require("fs");
const read = require("./readFile");
const message = require("../constant/constant");

const write = (req, res, data) => {
    let existingData = [];
    existingData = JSON.parse(read.readFile(req, res));
    let flag = true;
    existingData.forEach(element => {
        if (element.employeeId === data.employeeId) flag = false
    });
    if (flag) {
        existingData.push(data);
       fs.writeFileSync("./data/cdw_ace23_buddies.json", JSON.stringify(existingData), "utf-8");
        existingData = JSON.parse(read.readFile(req, res));
        return existingData;
    } else return { message: message.IDEXISTS };

}


const update = (req, res, data) => {
    let existingData = [];
    existingData = JSON.parse(read.readFile(req, res));
    let flag = false;
    existingData.forEach((element, index) => {
        if (data.employeeId == element.employeeId) {
            existingData[index] = data;
            flag = true;
        }
    })
    if (flag) {
        fs.writeFileSync("./data/cdw_ace23_buddies.json", JSON.stringify(existingData), "utf-8");
        return existingData;
    } else {
        return { message: message.INVALID_ID };
    }
}


const deleteById = (req, res, id) => {
    let existingData = [];
    existingData = JSON.parse(read.readFile(req, res));
    let specificData;
    existingData.forEach((element, index) => {
        if (element.employeeId === id) {
            specificData = existingData[index];
            existingData.splice(index, 1);
        }
    });
    if (specificData != null) {
        fs.writeFileSync("./data/cdw_ace23_buddies.json", JSON.stringify(existingData), "utf-8");
        return existingData;
    } else {
        return { message: message.INVALID_ID };
    }
}
module.exports = {
    write, update, deleteById
}
