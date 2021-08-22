import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('http://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository, index) => (
          <RepositoryItem key={String(index)} repository={repository} />
        ))}
      </ul>
    </section>
  )
}