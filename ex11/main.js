
function getReposGithub(user){
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(function(response) {
        response.data.forEach(repo => {
            createList(repo.name);
        });
    })
    .catch(function(error) {
        console.warn(error)
        createList('Ocorreu um erro')
    });
}

function createList(repo){
    const liElement = document.createElement('li');
    liElement.textContent = repo;

    document.querySelector('.repos')
    .appendChild(liElement);
}

document.querySelector('.buscar')
.addEventListener('click', () => {
    const user = document.querySelector('.user').value;
    getReposGithub(user);
})