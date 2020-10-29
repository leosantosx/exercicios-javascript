const DeleteButton = () => {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    return deleteButton;
}

const deleteTask = event => {
    event.target.parentElement.remove();
}

export default DeleteButton