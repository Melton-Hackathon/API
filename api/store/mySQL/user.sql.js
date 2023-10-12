const DBController = require('../dbController.js');

class UserSQL extends DBController {
    constructor() {
        super();
    }

    getAllUser() {
        this.connect();
        const query = 'SELECT * FROM users';
        const result = this.executeQuery(query, __dirname, 'getAllUser');
        this.disconnect();
        return result;
    }
}

module.exports = UserSQL;