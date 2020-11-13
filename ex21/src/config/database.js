const sqlite3 = require('sqlite3').verbose()
const bd = new sqlite3.Database('./data.db')

const USERS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    )
`

bd.serialize(() => {
    bd.run(USERS_SCHEMA)
})

module.exports = bd