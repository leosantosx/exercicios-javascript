const appElement = document.querySelector('#app'); 

document.querySelector('.botao-elemento')
.addEventListener('click', () => {
    const divElement = document.createElement('div');
    divElement.classList.add('element');
    appElement.appendChild(divElement);
    addEvent();
});

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addEvent(){
    document.querySelectorAll('.element')
    .forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = getRandomColor();
        })
    })
}
