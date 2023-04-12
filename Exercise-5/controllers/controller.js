const fs = require("fs");
const url = require("url");
const querystring = require('querystring');
const read = require("../services/readFile");
const services = require("../services/writeFile");
const logger = require("../utils/logger");
const message=require("../constant/constant");


let data;
let writeData = (req, res) => {
    data = req.body;
    if ((validation.buddyId).test(data.employeeId) && (validation.buddyName).test(data.employeename) && (validation.buddyNickName).test(data.nickname) && (validation.buddyDOB).test(data.dob) && (validation.buddyHobbies).test(data.hobbies)) {
        try {
            let response = services.write(req, res, data);
            res.send(response);
        } catch (err) {
            logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            return res.status(501).send({message : message.ERROR }).end();
        }

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
        try {
            let response = read.getDetailById(req, res, id);
            res.send(response);
        } catch (err) {
            logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            return res.status(501).send({message : message.ERROR}).end();
        }

    } else {
        res.send({message : message.INVALID_ID });
    }

}


let deleteBuddies = (req, res) => {
    let id = req.params.id;
    if ((validation.buddyId).test(id)) {
        try {
            let response = services.deleteById(req, res, id);
            res.send(response);
        } catch (err) {
            logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            return res.status(501).send({message : message.ERROR}).end();
        }

    } else {
        res.send({message : message.INVALID_ID });
    }
}


let updateBuddies = (req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = querystring.parse(parsedUrl.query);
    const id = query.employeeId;
    const hobbies = query.hobbies ? query.hobbies.split(',') : [];
    const nickname = query.nickname;
    if ( (validation.buddyId).test(id) && (validation.buddyNickName).test(nickname) && Array.isArray(hobbies)) {
        try {
            let response = services.update(req, res, data);
            res.send(response);
        } catch (err) {
             logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            return res.status(501).send({message : message.ERROR}).end();
        }

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
