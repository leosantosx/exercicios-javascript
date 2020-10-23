var nomes = ["Diego", "Gabriel", "Lucas"];

const ulElement = document.createElement('ul');

nomes.forEach(nome => {
    const liElement = document.createElement('li');
    liElement.textContent = nome;
    ulElement.appendChild(liElement);
})

document.querySelector('#app')
.appendChild(ulElement);