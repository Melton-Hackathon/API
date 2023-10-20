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
            const uidseed = req.body.password + req.body.user;
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            const uid = await bcrypt.hash(uidseed, salt);
            const result = await user.createUser(req.body.user, hashedPassword, uid);
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
    },

    getAuth: async (req, res, next) => {
        const user = new UserSQL();
        const auth_token = new UserSQL();
        try {
            const hashArray = await user.getUserHash(req.body.user);
            
            if (hashArray.length > 0) {
                const hash = hashArray[0].password;
                const plaintextPassword = req.body.password; // Change to password field
                
                var tresult = '';
    
                const result = await new Promise((resolve, reject) => {
                    bcrypt.compare(plaintextPassword, hash, (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                });
    
                if (result) {
                    const tokenarray = await auth_token.getUserAuthToken(req.body.user);
                    const token = tokenarray[0].auth_token;
                    tresult = token;
                }
                
                res.send({
                    success: true,
                    message: 'Authentication successful',
                    data: JSON.stringify(tresult)
                });
            } else {
                res.send({
                    success: false,
                    message: 'User not found',
                    data: null
                });
            }
        } catch (error) {
            res.send({
                success: false,
                message: 'Error during authentication',
                data: JSON.parse(error)
            });
        }
    }
    
}