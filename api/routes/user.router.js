const express = require('express');
const { getAll, createUser, getUserRole, getUserLogin } = require('../controller/user.controller.js');
const userRouter = express.Router();

userRouter.get('', getAll);

userRouter.get('/role/:username', getUserRole);

userRouter.post('/create', createUser);

userRouter.post('/login', getUserLogin);

module.exports = userRouter;