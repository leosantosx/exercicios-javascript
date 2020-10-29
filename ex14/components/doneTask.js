const DoneButton = () => {
    const doneButton = document.createElement('button');
    doneButton.classList.add('check-button');
    doneButton.innerText = 'Done';
    doneButton.addEventListener('click', doneTask);
    return doneButton;
}

const doneTask = event => {
    event.target.parentElement
    .classList.toggle('done');
}

export default DoneButton