let fs = require("fs");
const url = require("url");
const querystring = require('querystring');
const read = require("./readFile");
const message = require("../constant/constant");

const write = (req, res, data) => {
    let ExistingData = [];
    ExistingData = JSON.parse(read.readFile(req, res));
    let flag = true;
    ExistingData.forEach(element => {
        if (element.employeeId === data.employeeId) flag = false
    });
    if (flag) {
        ExistingData.push(data);
        fs.writeFileSync("./data/cdw_ace23_buddies.json", JSON.stringify(ExistingData), "utf-8");
        ExistingData = JSON.parse(read.readFile(req, res));
        return ExistingData;
    } else return { message: message.IDEXISTS };

}


const update = (req, res, data) => {
    let ExistingData = [];
    const parsedUrl = url.parse(req.url);
    const query = querystring.parse(parsedUrl.query);
    const id = query.employeeId;
    const updatedHobbies = query.hobbies ? query.hobbies.split(',') : [];
    const nickName = query.nickname;
    ExistingData = JSON.parse(read.readFile(req, res));
    let flag = false;
    ExistingData.forEach((element, index) => {
        if (id == element.employeeId) {
            element.nickname = nickName;
            element.hobbies = updatedHobbies;
            flag = true;
        }
    })
    if (flag) {
        fs.writeFileSync("./data/cdw_ace23_buddies.json", JSON.stringify(ExistingData), "utf-8");
        return ExistingData;
    } else {
        return { message: message.INVALID_ID };
    }
}


const deleteById = (req, res, id) => {
    let ExistingData = [];
    ExistingData = JSON.parse(read.readFile(req, res));
    let specificData;
    ExistingData.forEach((element, index) => {
        if (element.employeeId === id) {
            specificData = ExistingData[index];
            ExistingData.splice(index, 1);
        }
    });
    if (specificData != null) {
        let writeFile = fs.writeFileSync("./data/cdw_ace23_buddies.json", JSON.stringify(ExistingData), "utf-8");
        return ExistingData;
    } else {
        return { message: message.INVALID_ID };
    }
}


module.exports = {
    write, update, deleteById
}
