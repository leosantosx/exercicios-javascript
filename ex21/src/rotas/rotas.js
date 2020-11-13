const listUsers = require('../infra/listUsers')
const insertUser = require('../infra/insertUser')
const findUser = require('../infra/findUser')

module.exports = app => {
    app.get('/users', (req, res) => {
        listUsers(res)
    })

    app.get('/users/:id', (req, res) => {
        const { id } = req.params
        findUser(res, id)
    })

    app.post('/users', (req, res) => {
        const { name, email, password } = req.body
        insertUser(res, name, email, password)
    })
}

