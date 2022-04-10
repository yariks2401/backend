const fs = require("fs");
const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../Jsons/user.json`)
);

class UserMiddleWare {
    constructor() {}

    checkPostBody = (req, res, next) => {
        if(!req.body.name || !req.body.address){
            return res.status(400).json({
                status: 'Failed',
                message: 'Missing name or address',
            })
        }
        next();
    }

    isExistUser = (req, res, next) => {
        const id = Number(req.params.id);
        const isExistUser = users.some(user => user.id === id);
        if(!isExistUser){
            return res.status(404).json({
                status: 'failed',
                message: 'No found user by id'
            })
        }
        next();
    }
}

module.exports = new UserMiddleWare();