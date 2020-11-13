const db = require('../config/database')

const listUsers = res => {
    db.all('SELECT * FROM users', (err, result) => {
        res.json(result)
    })
}

module.exports = listUsers