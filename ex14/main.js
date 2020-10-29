"use strict"

import DoneButton from './components/doneTask.js';
import DeleteButton from './components/deleteTask.js';

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
$button.addEventListener('click', createTask);