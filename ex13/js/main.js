"use strict"

class List {
    constructor() {
        this.todos = [];
    }

    addTodo(newTodo){
        this.todos.push(newTodo)
    }
}

class TodoList extends List{
    constructor(){
        super();
        this.nome = 'Leo';
    }

    listTodo(){
        console.log(this.nome);
        return this.todos
    }
}

const MyList = new TodoList();

document.querySelector('.add-todo')
.addEventListener('click', () => {
    const newTodo = document.querySelector('.new-todo').value
    MyList.addTodo(newTodo);
    const listTodos = MyList.listTodo();
    renderTodos(listTodos)
});

function renderTodos(listTodos){
    const lisElements = listTodos.map(todo => `<li>${todo}</li>`);
    const ulElement = document.querySelector('.list-todos');
    ulElement.innerHTML = '';
    ulElement.insertAdjacentHTML('beforeend', lisElements.join(''));
}
