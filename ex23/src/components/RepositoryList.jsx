import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList({ repositories }) {
    return (
        <section className="repositories-list">

            <h1>Lista de repositóries</h1>
            
            <ul>
                {repositories.map(repository => 
                    <RepositoryItem key={repository.id} repository={repository}/>
                )}
            </ul>
        </section>
    )
}