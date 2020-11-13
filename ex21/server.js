const app = require('./src/config/custom-express')
const rotas = require('./src/rotas/rotas')
rotas(app)

app.listen(3000, () =>
    console.log('Servidor rodando na porta 3000')
)