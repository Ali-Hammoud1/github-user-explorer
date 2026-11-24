import { StarIcon, ForkIcon, ExternalLinkIcon } from "../icons/Icons";

// ألوان لبعض اللغات الشائعة، وأي لغة ثانية تاخذ اللون الافتراضي
const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Go: "#00add8",
  Rust: "#dea584",
  PHP: "#4f5d95",
  Shell: "#89e051",
};

// تحول التاريخ إلى نص مثل "3 days ago"
function timeAgo(dateString) {
  const seconds = Math.round((Date.now() - new Date(dateString).getTime()) / 1000);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const units = [
    ["year", 31536000],
    ["month", 2592000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ];

  for (const [unit, unitSeconds] of units) {
    if (seconds >= unitSeconds) {
      return rtf.format(-Math.floor(seconds / unitSeconds), unit);
    }
  }
  return "just now";
}

export default function RepositoryCard({ repo }) {
  const languageColor = LANGUAGE_COLORS[repo.language] ?? "#8b949e";

  return (
    <article className="flex w-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/60 hover:bg-elevated">
      <header className="flex items-start justify-between gap-3">
        <h3 className="min-w-0 truncate font-mono text-[15px] font-semibold">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {repo.name}
          </a>
        </h3>
        <span className="text-muted" aria-hidden="true">
          <ExternalLinkIcon />
        </span>
      </header>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
        {repo.description ?? "No description provided."}
      </p>

      <div className="mt-auto pt-5">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          {repo.language && (
            <li className="flex items-center gap-1.5">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: languageColor }}
                aria-hidden="true"
              />
              {repo.language}
            </li>
          )}
          <li className="flex items-center gap-1.5">
            <StarIcon />
            {repo.stargazers_count.toLocaleString()}
            <span className="sr-only">stars</span>
          </li>
          <li className="flex items-center gap-1.5">
            <ForkIcon />
            {repo.forks_count.toLocaleString()}
            <span className="sr-only">forks</span>
          </li>
        </ul>

        <p className="mt-4 border-t border-line pt-3 text-xs text-muted">
          Updated {timeAgo(repo.updated_at)}
        </p>
      </div>
    </article>
  );
}