import { profile } from "@/data/profile";

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <div className="flex items-center gap-3 font-mono text-xs text-muted">
          <span className="flex items-center gap-1.5 rounded-full border border-edge px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-term" />
            build: passing
          </span>
          <span className="hidden sm:inline">
            © {YEAR} {profile.name}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            X
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
      <p className="pb-6 text-center font-mono text-[11px] text-muted sm:hidden">
        © {YEAR} {profile.name}
      </p>
    </footer>
  );
}
