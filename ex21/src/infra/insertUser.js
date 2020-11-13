const db = require('../config/database')

const insertUser = (res, name, email, password) => {
    db.run(
        `INSERT INTO users (
            name, email, password
        ) values(?, ?, ?)`, 
        [name, email, password]
    )
    res.status(201).json({status: 'Ok'})
}

module.exports = insertUser