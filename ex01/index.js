var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log(retornaDados(endereco));

function retornaDados(dados){
    return `O usuário mora em ${dados.cidade} / ${dados.uf}, no bairro ${dados.bairro}, na rua "${dados.rua}" com nº ${dados.numero}.`;
}




