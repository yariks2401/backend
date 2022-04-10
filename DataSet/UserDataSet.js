const User = require("../models/userModel");

class DataSet {

    constructor() {}
    getAllUsers = async () => {
        try {
           const users = await User.find()
            return {
                statusCode: 200,
                info: {
                    status: 'success',
                    data: { users },
                }
            }
        } catch (err){
            console.warn(err)
            return {
                statusCode: 404,
                info: {
                    status: 'Error',
                    message: err
                }
            }
        }
    }

    getUserById = async (id) => {
        try {
            console.log(id);
            const user =  await User.findById(id);
            return {
                statusCode: 200,
                info: {
                    status: 'success',
                    data: { user },
                }
            }
        } catch (err){
            console.warn(err)
            return {
                statusCode: 404,
                info: {
                    status: 'Error',
                    message: err
                }
            }
        }
    }

    setNewUser = async (data) => {
        try {
            const user = await User.create(data)
            return {
                statusCode: 201,
                info: {
                    status: 'success',
                    data: { user },
                }
            }
        }
        catch (err) {
            console.warn(err)
            return {
                statusCode: 400,
                info: {
                    status: 'Error',
                    message: err
                }
            }
        }
    }

    updateUserById = async (id, data) => {
        try {
            const user = await User.findByIdAndUpdate(id, data, {
                new: true,
                runValidators: true
            })
            return {
                statusCode: 200,
                info: {
                    status: 'success',
                    data: { user },
                }
            }
        } catch(err) {
            console.warn(err)
            return {
                statusCode: 400,
                info: {
                    status: 'Error',
                    message: err
                }
            }
        }
    }

    deleteUserById = async (id) => {
        try {
            await User.findByIdAndDelete(id)
            return {
                statusCode: 204,
                info: {
                    status: 'success',
                    data: null,
                }
            }
        } catch(err) {
            console.warn(err)
            return {
                statusCode: 404,
                info: {
                    status: 'Error',
                    message: err
                }
            }
        }
    }

}

module.exports = new DataSet();