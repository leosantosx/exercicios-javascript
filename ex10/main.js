const ulTodos = document.querySelector('.todos');
const buttonAddElement = document.querySelector('.add');

const listTodos = JSON.parse(localStorage.getItem('list_todos')) || [];
console.log(listTodos);
    
buttonAddElement.addEventListener('click', addElementInList);
listTodos.forEach(todo => renderTodo(todo));

function addElementInList(){
    const inputAdd = document.querySelector('.input-add');
    var key = 0;
    if(listTodos.length > 0){
        key = listTodos.slice(-1)[0].key + 1;
    }
    const newTodo = {key: key, name: inputAdd.value};
    listTodos.push(newTodo);
    saveTodoStorage()
    
    renderTodo(newTodo);
    inputAdd.value = '';
    inputAdd.focus();
}

function addEventDeleteTodo(liElement){
    const todoAncora = liElement.querySelector('a');
    todoAncora.addEventListener('click', () => {
        keyTodo = todoAncora.parentNode.getAttribute('data-key');
        listTodos.splice(keyTodo, 1);
        saveTodoStorage();
        todoAncora.parentNode.remove();
    })
}

function renderTodo(todo){
    const liElement = document.createElement('li');
    liElement.textContent = todo.name;
    liElement.appendChild(createAncora('Excluir'));
    liElement.setAttribute('data-key', todo.key);
    ulTodos.appendChild(liElement);
    addEventDeleteTodo(liElement);
}

function createAncora(text){
    const ancoraDelete = document.createElement('a');
    ancoraDelete.setAttribute('href', '#');
    ancoraDelete.textContent = text;
    return ancoraDelete;
}


function saveTodoStorage(){
    localStorage.setItem('list_todos', JSON.stringify(listTodos));
}

