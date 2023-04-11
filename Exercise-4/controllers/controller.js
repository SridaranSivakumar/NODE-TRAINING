const fs = require("fs");
const read = require("../services/readFile");
const services = require("../services/writeFile");

const message=require("../constant/constant");
let data;
let writeData = (req, res) => {
    data = req.body;
    if ((validation.buddyId).test(data.employeeId) && (validation.buddyName).test(data.employeename) && (validation.buddyNickName).test(data.nickname) && (validation.buddyDOB).test(data.dob) && (validation.buddyHobbies).test(data.hobbies)) {
            let response = services.write(req, res, data);
            res.send(response);
    } else {
        res.send({message : message.DETAILS });
    }
}
let getAllDetails = (req, res) => {
    let response=read.getAllbuddies(req, res);
    res.send(response);
}
let getDetailById = (req, res) => {
    let id = req.params.id;
    if ((validation.buddyId).test(id)) {
       
            let response = read.getDetailById(req, res, id);
            res.send(response);
    } else {
        res.send({message : message.INVALID_ID });
    }

}
let deleteBuddies = (req, res) => {
    let id = req.params.id;
    if ((validation.buddyId).test(id)) {
            let response = services.deleteById(req, res, id);
            res.send(response);
    } else {
        res.send({message : message.INVALID_ID });
    }
}
let updateBuddies = (req, res) => {
    data = req.body;
    if ((validation.buddyId).test(data.employeeId) && (validation.buddyName).test(data.employeename) && (validation.buddyNickName).test(data.nickname) && (validation.buddyDOB).test(data.dob) && (validation.buddyHobbies).test(data.hobbies)) {
        console.log("success");
            let response = services.update(req, res, data);
            res.send(response);
    } else {
        res.send({message : message.DETAILS });
    }

}
module.exports = {
    read, writeData, getAllDetails, getDetailById, deleteBuddies, updateBuddies
}

const validation = {
    buddyId: /^[0-9]{1,4}$/,
    buddyName: /^[a-zA-Z]{0,30}$/,
    buddyNickName: /^[a-zA-Z]{0,30}$/,
    buddyDOB: /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/,
    buddyHobbies: /^#?[a-zA-Z0-9]+/,
}
