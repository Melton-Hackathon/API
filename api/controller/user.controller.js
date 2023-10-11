const UserSQL = require('../store/mySQL/user.sql.js');

module.exports = {
    getAll: async (res, req, next) => {
        const user = new UserSQL();
        return user.getAllUser();
    },
}