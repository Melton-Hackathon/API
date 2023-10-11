const express = require('express');
const { getAll } = require('../controller/user.controller.js');
const userRouter = express.Router();

userRouter.get('/', getAll);

module.exports = userRouter;