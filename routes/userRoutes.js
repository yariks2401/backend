const express = require('express');
const router = express.Router();
const UserMiddleWare = require('./../middleWares/UserMiddleWare');
const UserController = require('./../controllers/userController');
const UserService = require('./../UserService/UserService');
const APIFeatures = require('./../UserService/APIFeatures');
const UserModel = require('./../models/userModel');

const UserControllerObj = new UserController(UserService, UserModel, APIFeatures);
const UserMiddleWareObj = new UserMiddleWare(UserModel);

router
    .route('/')
    .get(UserMiddleWareObj.usersQueryParams, UserControllerObj.getAllUsers)
    .post(UserControllerObj.setNewUser);

router
    .route('/:id')
    .get(UserControllerObj.getUserById)
    .patch(UserControllerObj.updateUserById)
    .delete(UserControllerObj.deleteUserById)

module.exports = router;
