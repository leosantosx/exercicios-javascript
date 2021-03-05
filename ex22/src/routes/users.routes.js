const Router = require('express').Router;

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
    response.json({ status: 'Ok' });
});

usersRouter.post('/', (request, response) => {
    response.json({ status: 'Ok' });
});

usersRouter.put('/', (request, response) => {
    response.json({ status: 'Ok' });
});

module.exports = usersRouter;