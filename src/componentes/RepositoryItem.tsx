import { Repository } from "./RepositoryList";

interface RepositoryItemProps {
  repository: Repository
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a target="_blank" href={repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}