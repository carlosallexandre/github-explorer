export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? 'Description default'}</p>

      <a href={repository?.link ?? 'https://github.com'}>
        Acessar repositório
      </a>
    </li>
  );
}