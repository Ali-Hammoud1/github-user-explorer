import { RepoIcon, UsersIcon, UserCheckIcon } from "../icons/Icons";

export default function ProfileStats({user}) {
  return (
    <section aria-label="Account statistics">
      <dl className="grid grid-cols-3 gap-3 sm:gap-4">
        <div className="rounded-xl border border-line bg-surface p-3 sm:p-5">
          <dt className="flex items-center gap-2 text-xs text-muted sm:text-sm">
            <span className="hidden sm:inline-flex"><RepoIcon /></span>
            Repositories
          </dt>
          <dd className="mt-2 font-mono text-2xl font-semibold tabular-nums sm:text-3xl">{user.public_repos}</dd>
        </div>

        <div className="rounded-xl border border-line bg-surface p-3 sm:p-5">
          <dt className="flex items-center gap-2 text-xs text-muted sm:text-sm">
            <span className="hidden sm:inline-flex"><UsersIcon /></span>
            Followers
          </dt>
          <dd className="mt-2 font-mono text-2xl font-semibold tabular-nums sm:text-3xl">{user.followers}</dd>
        </div>

        <div className="rounded-xl border border-line bg-surface p-3 sm:p-5">
          <dt className="flex items-center gap-2 text-xs text-muted sm:text-sm">
            <span className="hidden sm:inline-flex"><UserCheckIcon /></span>
            Following
          </dt>
          <dd className="mt-2 font-mono text-2xl font-semibold tabular-nums sm:text-3xl">{user.following}</dd>
        </div>
      </dl>
    </section>
  );
}
