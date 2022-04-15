class DataSet {

    constructor(UserModel, APIFeatures) {
        this.APIFeaturesObj = APIFeatures;
        this.UserModelObj = UserModel;
    }
    getAllUsers = async (query) => {
        try {
            const features = new this.APIFeaturesObj(this.UserModelObj.find(), query).filter().sort().limitFields().paginate();
            const responseData = await features.query;
            return {
                statusCode: 200,
                info: {
                    status: 'success',
                    data: { responseData },
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
            const user =  await this.UserModelObj.findById(id);
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
            const user = await this.UserModelObj.create(data)
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
            const user = await this.UserModelObj.findByIdAndUpdate(id, data, {
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
            await this.UserModelObj.findByIdAndDelete(id)
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

module.exports = DataSet;
