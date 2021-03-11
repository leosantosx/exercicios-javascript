export function RepositoryList({ repository }) {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>{repository.name}</strong>
                    <p>{repository.description}</p>

                    <a href={repository.html_url}>
                        Acessar repositório
                    </a>
                </li>
            </ul>
        </section>
    )
}