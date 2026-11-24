export default function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-line px-6 py-14 text-center">
      <div className="mx-auto grid size-12 place-items-center rounded-full bg-elevated text-muted">
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <h2 className="mt-4 text-lg font-semibold">Search for a GitHub user</h2>
      <p className="mx-auto mt-1 max-w-sm text-sm text-muted">
        Enter a username above to see their profile and latest repositories.
      </p>
    </div>
  );
}
