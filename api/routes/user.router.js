const express = require('express');
const { getAll, createUser, getUserRole, getUserLogin, getAuth } = require('../controller/user.controller.js');
const userRouter = express.Router();

userRouter.get('', getAll);

userRouter.get('/role/:username', getUserRole);

userRouter.post('/create', createUser);

userRouter.post('/login', getUserLogin);

userRouter.post('/auth', getAuth);

module.exports = userRouter;