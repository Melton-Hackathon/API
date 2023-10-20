const UserSQL = require('../store/mySQL/user.sql.js');
const bcrypt = require('bcrypt');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const user = new UserSQL();
            const result = await user.getAllUser();
            res.send({
                success: true,
                message: 'Successfully retrieved all creatures with category',
                data: JSON.stringify(result)
            })
        } catch (error) {
            res.send({
                success: false,
                message: 'Failed to retrieve all creatures with category',
                data: JSON.parse(error)
            })
        }
    },

    getUserLogin: async (req, res, next) => {
        try {
            const user = new UserSQL();
            const result = await user.getUserLogin(req.body.username);
            res.send({
                success: true,
                message: 'Successfully retrieved user',
                data: JSON.stringify(result)
            })
        } catch (error) {
            res.send({
                success: false,
                message: 'Failed to retrieve user',
                data: JSON.parse(error)
            })
        }
    },

    getUserRole: async (req, res, next) => {
        try {
            console.log(req.params.username)
            const user = new UserSQL();
            const result = await user.getUserRole(req.params.username);
            res.send({
                success: true,
                message: 'Successfully retrieved user role',
                data: JSON.stringify(result)
            })
        } catch (error) {
            res.send({
                success: false,
                message: 'Failed to retrieve user role',
                data: JSON.parse(error)
            })
        }
    },

    createUser: async (req, res, next) => {
        try {
            const user = new UserSQL();
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            const result = await user.createUser(req.body.username, hashedPassword);
            res.send({
                success: true,
                message: 'Successfully created user',
                data: JSON.stringify(result)
            })
        } catch (error) {
            res.send({
                success: false,
                message: 'Failed to create user',
                data: JSON.parse(error)
            })
        }
    }
}