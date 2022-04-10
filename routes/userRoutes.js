const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/userController')

router
    .route('/')
    .get(UserController.getAllUsers)
    .post(UserController.setNewUser);

router
    .route('/:id')
    .get(UserController.getUserById)
    .patch(UserController.updateUserById)
    .delete(UserController.deleteUserById)

module.exports = router;