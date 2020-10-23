/*
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
*/

var usuarios = [
    {
        nome: "Leo",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

usuarios.forEach(usuario => {
    console.log(`O usuário ${usuario.nome} possui as habilidades: 
    ${usuario.habilidades.join(', ')}.`);
});