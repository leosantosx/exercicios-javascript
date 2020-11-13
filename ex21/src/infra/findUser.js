const db = require('../config/database')

const findUser = (res, id) => {
    db.each(`SELECT * FROM users WHERE id = ${id}`, (err, result) => {
        res.send(result)
    })
}

module.exports = findUser