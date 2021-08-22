export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? 'Description default'}</p>

      <a target="_blank" href={repository?.html_url ?? 'https://github.com'}>
        Acessar repositório
      </a>
    </li>
  );
}