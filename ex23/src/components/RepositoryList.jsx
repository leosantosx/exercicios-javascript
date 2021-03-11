import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList({ repositories }) {
    return (
        <section className="repository-list">
            <ul>
                {repositories.map(repository => 
                    <RepositoryItem key={repository.id} repository={repository}/>
                )}
            </ul>
        </section>
    )
}