const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

const arr = usuarios.map(usuario => ({
            nome: usuario.nome, 
            idade: usuario.idade * 2, 
            empresa: usuario.empresa 
        }));

const users = arr.filter(usuario => {
    if(usuario.idade <= 50) return usuario;
})

console.log(users);