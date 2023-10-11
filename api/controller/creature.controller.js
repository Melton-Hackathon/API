const CreatureSQL = require('../store/mySQL/creature.sql.js');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const creature = new CreatureSQL();
            const result = await creature.getAllCreature();
            res.send({
                success: true,
                message: 'Successfully retrieved all creatures',
                data: JSON.stringify(result)
            })
        } catch (error) {
            res.send({
                success: false,
                message: 'Failed to retrieve all creatures',
                data: JSON.parse(error)
            })
        }
    },

    creatureWithCategory: async (req, res, next) => {
        try {
            const creature = new CreatureSQL();
            const result = await creature.getCreatureWithCategory(req.params.name);
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
    }
}