(() => {

"use strict"

const createTask = event => {
    event.preventDefault();
    const taskList = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');

    const task = document.createElement('li');
    task.classList.add('task');
    const content = `<p class="content">${input.value}</p>`;
    task.innerHTML = content;
    task.appendChild(DoneButton());
    task.appendChild(DeleteButton());

    taskList.appendChild(task);
    input.value = '';
}

const $button = document.querySelector('[data-form-button]');
$button.addEventListener('click', createTask)

const DoneButton = () => {
    const doneButton = document.createElement('button');
    doneButton.classList.add('check-button');
    doneButton.innerText = 'Done';
    doneButton.addEventListener('click', doneTask);
    return doneButton;
}

const DeleteButton = () => {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    return deleteButton;
}

const doneTask = event => {
    event.target.parentElement
    .classList.toggle('done');
}

const deleteTask = event => {
    event.target.parentElement.remove();
}

})();