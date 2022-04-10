const User = require('../DataSet/UserDataSet');

class UserController {
    constructor() {}

    getAllUsers = async (req, res) => {
        const response = await User.getAllUsers()
        res.status(response.statusCode).json(response.info);
    }

    getUserById = async (req, res) => {
        const response = await User.getUserById(req.params.id);
        res.status(response.statusCode).json(response.info);
    }

    setNewUser = async (req, res) => {
        const response = await User.setNewUser(req.body)
        res.status(response.statusCode).json(response.info);
    }

    updateUserById = async (req, res) => {
            const response = await User.updateUserById(req.params.id, req.body)
            res.status(response.statusCode).json(response.info)
    }

    deleteUserById = async (req, res) => {
        const response = await User.deleteUserById(req.params.id)
        res.status(response.statusCode).json(response.info)
    }
}

module.exports = new UserController();