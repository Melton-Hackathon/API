const express = require('express');
const { getAll } = require('../controller/endpoint.controller.js');
const endpointRouter = express.Router();

endpointRouter.get('', getAll);

module.exports = endpointRouter;