const DBController = require('../dbController.js');

class CreatureSQL extends DBController {
    constructor() {
        super();
    }

    async getAllCreature() {

        try {
            this.connect();

            const query = `SELECT * from creatures`;
            const result = await this.executeQuery(query, __dirname, 'getAllCreature');

            this.disconnect();

            console.log(result)
            return result;

        } catch (error) {
            console.error('Error:', error);
        }


    }

    async getCreatureWithCategory(name) {

        try {
            this.connect();

            const query = `SELECT c.name, t.name
            from creaturetotype g
            JOIN creatures c on g.figureid = c.id
            JOIN creaturetypes t on g.typeid = t.id
            WHERE c.name LIKE '%${name}%'`;
            const result = await this.executeQuery(query, __dirname, 'getCreatureWithCategory');

            this.disconnect();
            return result;

        } catch (error) {
            console.error('Error:', error);
        }
    }
}

module.exports = CreatureSQL;