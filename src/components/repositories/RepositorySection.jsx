import EmptyRepos from "./EmptyRepos";
import RepoCard from "./RepositoryCard";

export default function RepositorySection({ repos }) {
  if (repos.length === 0) {
    return <EmptyRepos />;
  }

  return (
    <section aria-labelledby="repos-heading">
      <h2 id="repos-heading" className="mb-4 text-lg font-semibold">
        Repositories
      </h2>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <li key={repo.id} className="flex">
            <RepoCard repo={repo} />
          </li>
        ))}
      </ul>
    </section>
  );
}