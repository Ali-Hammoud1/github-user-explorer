export default function ErrorState() {
  return (
    <div
      role="alert"
      className="rounded-xl border border-danger/40 bg-danger/10 p-6 sm:p-8"
    >
      <div className="flex items-start gap-4">
        <span className="mt-0.5 text-danger">
          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold">User not found</h2>
          <p className="mt-1 max-w-prose text-sm leading-relaxed text-ink/80">
            No GitHub account matches that username. Check the spelling and search again.
          </p>
          <button
            type="button"
            className="mt-5 rounded-lg border border-danger/50 px-4 py-2 text-sm font-medium transition hover:bg-danger/15"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
