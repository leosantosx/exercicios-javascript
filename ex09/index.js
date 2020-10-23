const app = document.querySelector('#app');
const ulElement = document.createElement('ul');
app.appendChild(ulElement);

var nomes = ["Diego", "Gabriel", "Lucas"];

nomes.forEach(nome => {
   adicionaItem(nome);
})

function adicionaItem(nome){
    const liElement = document.createElement('li');
    liElement.textContent = nome;
    document.querySelector('ul').appendChild(liElement);
}

const form = document.querySelector('form');
form.send.addEventListener('click', event => {
    event.preventDefault();
    const nome = form.nome.value;
    if(nome.length > 0){
        adicionaItem(form.nome.value);
    }else{
        alert('O campo nome está em branco')
    }
})