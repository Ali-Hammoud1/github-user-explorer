export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-page/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-3 rounded-lg">
          <span className="grid size-9 place-items-center rounded-lg border border-line bg-elevated text-accent">
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </span>
          <span className="text-base font-semibold tracking-tight">GitHub User Explorer</span>
        </a>

        <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted max-[420px]:hidden">
          <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
          api.github.com
        </span>
      </div>
    </header>
  );
}
