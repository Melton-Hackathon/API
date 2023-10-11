const DBController = require('../dbController.js');

class MatchHistorySQL extends DBController {
    constructor() {
        super();
    }

    getMatchHistory() {
        this.connect();
        const query = 'SELECT * FROM matchHistory';
        const result = this.executeQuery(query, __dirname, 'getMatchHistory');
        this.disconnect();
        return result;
    }

    getTopTenMatchHistory() {
        this.connect();
        const query = 'SELECT * FROM matchHistory ORDER BY matchId DESC LIMIT 10';
        const result = this.executeQuery(query, __dirname, 'getTopTenMatchHistory');
        this.disconnect();
        return result;
    }

    getMatchHistoryByMatchId(matchId) {
        this.connect();
        const query = 'SELECT * FROM matchHistory WHERE matchId = ?';
        const result = this.executeQuery(query, [matchId], 'getMatchHistoryByMatchId');
        this.disconnect();
        return result;
    }

    getMatchHistoryByUserId(userId) {
        this.connect();
        const query = 'SELECT * FROM matchHistory WHERE userId = ?';
        const result = this.executeQuery(query, [userId], 'getMatchHistoryByUserId');
        this.disconnect();
        return result;
    }
}

module.exports = MatchHistorySQL;