// REST
const soma = (...params) => {
    return params.reduce(
        (total, next) => total + next
    )
}

//console.log(`Soma: ${soma(20, 20)}`);

// SPREAD

const arr = [1, 2, 3, 4];
const [x, ...y] = arr;
//console.log(x, y);


// Object Short Syntax
const nome = 'Diego';
const idade = 23;

const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul',
};

console.log(usuario);