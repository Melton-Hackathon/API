const express = require('express');
const { getAll, creatureWithCategory } = require('../controller/creature.controller.js');
const creatureRouter = express.Router();

creatureRouter.get('/all', getAll);

creatureRouter.get('/creatureStats/:name', creatureWithCategory);

module.exports = creatureRouter;