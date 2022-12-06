let mongoose = require('mongoose'),
    express = require('express');

const userController = {};
// Model
let userSchema = require('../models/userModel');

// READ Users
userController.allUsers = function(req, res) {
    
    // Service GET users
    userSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log("USERS ===> " + data);
            res.json(data)
        }
    })
}

// CREATE User
userController.saveUser = function(req, res) {
    const data = req.body;
    console.log(data);

    // Service POST User
    userSchema.insertMany(data, error => {
        if (error) {
            return next(error)
        } else {
            console.log(data);
            res.json(data);
        }
    })
}

// UPDATE User
userController.updateUser = function(req, res) {
    const data = req.body;
    console.log(data);

    // Service UPDATE User
    
}

module.exports = userController;