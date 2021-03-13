import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";

import '../styles/repositories.scss';

type IRepositoryList = {
    id: string;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<IRepositoryList[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/leosantosx/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])
    
    return (
        <section className="repositories-list">

            <h1>Lista de repositóries</h1>
            
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository={repository}/>
                })}
            </ul>
        </section>
    )
}