const { use } = require('bcrypt/promises.js');
const DBController = require('../dbController.js');

class UserSQL extends DBController {
    constructor() {
        super();
    }

    getAllUser() {
        this.connect();
        const query = 'SELECT id, user_type_id, username, xp, account_created, last_seen FROM users';
        const result = this.executeQuery(query, __dirname, 'getAllUser');
        this.disconnect();
        return result;
    }

    getUserLogin(username) {
        this.connect();
        const query = `SELECT id, user_type_id, username, xp, account_created, last_seen FROM users WHERE username = '${username}'`;
        const result = this.executeQuery(query, __dirname, 'getUserLogin');
        this.disconnect();
        return result;
    }

    createUser(username, hashedPassword, uid) {
        this.connect();
        const query =  `INSERT INTO users (id, user_type_id, password, username, xp, mail, account_created, last_seen, auth_token) VALUES (NULL, '3', '${hashedPassword}', '${username}', '0', 'ss', CURRENT_DATE(), CURRENT_TIME(), '${uid}' );`;
        const result = this.executeQuery(query, __dirname, 'getUserRole');
        this.disconnect();
        return result;
    }
    
    getUserHash(username) {
        this.connect();
        const query = `SELECT password FROM users WHERE username = '${username}'`;
        const result = this.executeQuery(query, __dirname, 'getUserRole');
        this.disconnect();
        return result;
    }

    getUserAuthToken(username) {
        this.connect();
        const query = `SELECT auth_token FROM users WHERE username = '${username}'`;
        const result = this.executeQuery(query, __dirname, 'getUserRole');
        this.disconnect();
        return result;
    }

    getUserRole(username) {
        this.connect();
        const query = `SELECT t.type, u.username FROM users u INNER JOIN user_types t ON t.id = u.user_type_id WHERE u.username = '${username}'`;
        const result = this.executeQuery(query, __dirname, 'getUserRole');
        this.disconnect();
        return result;
    }
}

module.exports = UserSQL;