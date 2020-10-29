const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {
    nome, 
    endereco: {cidade}, 
    endereco: {estado}
} = empresa;
   

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
