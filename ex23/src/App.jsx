import { useEffect, useState } from 'react'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App(){
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/leosantosx/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <>
        {repositories.map(repository => 
            <RepositoryList key={repository.id} repository={repository} />
        )}
        </>
    )
}
