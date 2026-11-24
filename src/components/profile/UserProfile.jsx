import {
  LocationIcon,
  BuildingIcon,
  LinkIcon,
  ExternalLinkIcon,
} from "../icons/Icons";

export default function UserProfile({ user }) {
  console.log("user", user);
  return (
    <section className="rounded-xl border border-line bg-surface p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <img
          src={user.avatar_url}
          alt="Avatar of user"
          className="h-[88px] w-[88px] shrink-0 rounded-full bg-elevated ring-2 ring-line"
        />

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {user.name || user.login}
          </h2>
          <p className="font-mono text-sm text-muted">@{user.login}</p>

          <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink/90">
            {user.bio || "This user has no bio."}
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">

            {user.location && (
              <li className="flex items-center gap-1.5">
                <LocationIcon />
                {user.location}
              </li>
            )}

            {user.company && (
              <li className="flex items-center gap-1.5">
                <BuildingIcon />
                {user.company}
              </li>
            )}

            {user.blog && (
              <li className="flex min-w-0 items-center gap-1.5">
                <LinkIcon />
                <a
                  href={user.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                className="truncate hover:text-accent hover:underline"
              >
                {user.blog}
              </a>
            </li>)}

          </ul>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 self-stretch rounded-lg border border-line bg-elevated px-4 py-2 text-sm font-medium transition hover:border-accent sm:self-start"
        >
          View GitHub Profile
          <ExternalLinkIcon />
        </a>
      </div>
    </section>
  );
}
