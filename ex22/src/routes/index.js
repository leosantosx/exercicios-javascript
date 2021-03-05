const Router = require('express').Router;
const usersRouter = require('./users.routes');

const routes = Router();

routes.use('/users', usersRouter);

module.exports = routes;