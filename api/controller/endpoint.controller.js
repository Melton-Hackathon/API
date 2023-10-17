const endpoints = require('../store/json/endpoints.json').endpoints;

module.exports = {
    getAll: async (req, res, next) => {
        try {
            res.send({
                success: true,
                message: 'Successfully retrieved all creatures with category',
                data: JSON.stringify(endpoints)
            })
        } catch (error) {
            res.send({
                success: false,
                message: 'Failed to retrieve all creatures with category',
                data: JSON.parse(error)
            })
        }
    },
}