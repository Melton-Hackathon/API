const express = require('express');
const { getMatchHistory, getMatchHistoryByMatchId, getTopTenMatchHistory } = require('../controller/matchHistory.controller.js');
const matchHistoryRouter = express.Router();

matchHistoryRouter.get('/all', getMatchHistory);

matchHistoryRouter.get('/topTen', getTopTenMatchHistory);

matchHistoryRouter.get('/matchId/:matchId', getMatchHistoryByMatchId);

module.exports = matchHistoryRouter;