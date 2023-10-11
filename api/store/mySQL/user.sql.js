const DBController = require('../dbController.js');

class UserSQL extends DBController {
    constructor() {
        super();
    }

    getAllUser() {
        this.connect();
        const query = 'SELECT * FROM matchHistory';
        const result = this.executeQuery(query, __dirname, 'getMatchHistory');
        this.disconnect();
        return result;
    }
}

module.exports = UserSQL;