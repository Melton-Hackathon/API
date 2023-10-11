const MatchHistorySQL = require('../store/mySQL/matchHistory.sql.js');




module.exports = {
    getMatchHistory: async (res, req, next) => {
        const matchHistory = new MatchHistorySQL();
        return matchHistory.getMatchHistory();
    },
    
    getTopTenMatchHistory: async (res, req, next) => {	
        const matchHistory = new MatchHistorySQL();
        return matchHistory.getTopTenMatchHistory();
    },
    
    getMatchHistoryByMatchId: async (res, req, next) => {
        const matchHistory = new MatchHistorySQL();
        return matchHistory.getMatchHistoryByMatchId(req.params.matchId);
    },
    
    getMatchHistoryByUserId: async (res, req, next) => {
        const matchHistory = new MatchHistorySQL();
        return matchHistory.getMatchHistoryByUserId(req.params.userId);
    }
}