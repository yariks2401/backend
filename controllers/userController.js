class UserController {
    constructor(UserService, UserModel, APIFeatures) {
        this.UserServiceObj = new UserService(UserModel, APIFeatures);
    }

    getAllUsers = async (req, res) => {
        const response = await this.UserServiceObj.getAllUsers(req.query)
        res.status(response.statusCode).json(response.info);
    }

    getUserById = async (req, res) => {
        const response = await this.UserServiceObj.getUserById(req.params.id);
        res.status(response.statusCode).json(response.info);
    }

    setNewUser = async (req, res) => {
        const response = await this.UserServiceObj.setNewUser(req.body)
        res.status(response.statusCode).json(response.info);
    }

    updateUserById = async (req, res) => {
            const response = await this.UserServiceObj.updateUserById(req.params.id, req.body)
            res.status(response.statusCode).json(response.info)
    }

    deleteUserById = async (req, res) => {
        const response = await this.UserServiceObj.deleteUserById(req.params.id)
        res.status(response.statusCode).json(response.info)
    }
}

module.exports = UserController;
