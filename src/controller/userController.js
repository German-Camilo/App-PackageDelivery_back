let mongoose = require('mongoose'),
    express = require('express');

const userController = {};
// Model
let userSchema = require('../models/userModel');

// READ Students
userController.allUsers = function(req, res) {
    
    // res.send("HOLA MUNDO")
    userSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log("USERS ===> " + data);
            res.json(data)
        }
    })
}

module.exports = userController;