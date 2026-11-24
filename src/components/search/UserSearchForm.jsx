import { useState } from 'react';



export default function UserSearchForm({ onSearch }) {

  const [username, setUsername] = useState('octocat');

  function makeSearch(event) {
    event.preventDefault();
    const trimmedUsername = username.trim();
    console.log("trimmedUsername", trimmedUsername);
    if(!trimmedUsername) return;
    onSearch(trimmedUsername);
    
  }


  return (
    <section className="relative px-0 py-12 text-center sm:py-20">
      {/* Decorative grid, fades out toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(39_52_73/0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgb(39_52_73/0.45)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Explore GitHub Developers
      </h1>
      <p className="mx-auto mt-3 max-w-md text-base text-muted">
        Search GitHub users by username
      </p>

      <form className="mx-auto mt-8 max-w-2xl" onSubmit={makeSearch}>
        <label htmlFor="username" className="sr-only">
          GitHub username
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex h-14 flex-1 items-center rounded-lg border border-line bg-surface px-4 text-left transition focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/20">
            <span className="select-none font-mono text-sm text-muted sm:text-base">
              github.com/
            </span>
            <input
              id="username"
              name="username"
              value={username}
              type="text"
              placeholder="octocat"
              autoComplete="off"
              autoCapitalize="none"
              spellCheck="false"
              onChange={(event) => setUsername(event.target.value)}
              className="h-full w-full min-w-0 bg-transparent pl-1 font-mono text-sm text-ink outline-none placeholder:text-muted/50 sm:text-base"
            />
          </div>

          <button
            type="submit"
            
            className="h-14 rounded-lg bg-accent px-8 font-medium text-white transition hover:brightness-110 active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}
