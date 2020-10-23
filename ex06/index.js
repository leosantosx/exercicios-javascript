const appElement = document.querySelector('#app'); 

document.querySelector('.botao-elemento')
.addEventListener('click', () => {
    const element = document.createElement('div');
    element.classList.add('element');
    appElement.appendChild(element);
});