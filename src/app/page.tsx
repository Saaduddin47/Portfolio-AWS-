import Link from "next/link";
import { Typing } from "@/components/typing";
import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import {
  profile,
  stats,
  areasOfWork,
  achievements,
  skillGroups,
} from "@/data/profile";

export default function HomePage() {
  return (
    <div>
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-24 sm:pt-32">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 rounded-full border border-edge bg-card px-3 py-1.5 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-term opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-term" />
                </span>
                {profile.availability}
              </span>
              <span className="rounded-full border border-edge bg-card px-3 py-1.5 font-mono text-xs text-muted">
                {profile.repliesWithin}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {profile.name}
              <span className="text-accent">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 text-lg sm:text-2xl">
              <span className="font-mono text-muted">$ whoami → </span>
              <Typing phrases={profile.typingRoles} />
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                View Portfolio
              </Link>
              <a
                href={profile.resumeFile}
                download
                className="rounded-lg border border-edge px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Download CV
              </a>
              <Link
                href="/terminal"
                className="rounded-lg border border-edge px-5 py-2.5 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                $ open terminal
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ STATS ----------------------------- */}
      <section className="border-y border-edge bg-card/50">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px px-5 py-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="text-3xl font-bold text-accent sm:text-4xl">
                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                />
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* -------------------------- ABOUT / BIO --------------------------- */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight">
            About Me<span className="text-accent">.</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_280px]">
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-muted">{profile.longBio}</p>
            <p className="mt-4 leading-relaxed text-muted">
              Informatics isn&apos;t just my degree — building resilient,
              automated infrastructure is what I want to do every day. Open to
              Cloud, DevOps, and Platform Engineering roles where reliability
              and automation are non-negotiable.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="space-y-4 rounded-xl border border-edge bg-card p-5 font-mono text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  Role
                </dt>
                <dd>Cloud & DevOps</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  Location
                </dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  Status
                </dt>
                <dd className="text-term">open_to_work=true</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">
                  Headline Cert
                </dt>
                <dd>AWS Cloud Practitioner</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* -------------------------- AREAS OF WORK ------------------------- */}
      <section className="border-t border-edge bg-card/50">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">
              Areas of Work<span className="text-accent">.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {areasOfWork.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.08}>
                <div className="group h-full rounded-xl border border-edge bg-background p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-sm text-muted">
                      {area.index}
                    </span>
                    <span className="rounded-md border border-edge px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent">
                      {area.tag}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- ACHIEVEMENTS -------------------------- */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight">
            Achievements<span className="text-accent">.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="flex h-full gap-4 rounded-xl border border-edge bg-card p-5">
                <span className="font-mono text-lg text-accent" aria-hidden>
                  ▲
                </span>
                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{a.title}</h3>
                    <span className="rounded-md border border-edge px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-muted">
                      {a.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {a.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ----------------------------- SKILLS ------------------------------ */}
      <section className="border-t border-edge bg-card/50">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">
              Tech Stack<span className="text-accent">.</span>
            </h2>
          </Reveal>
          <div className="mt-10 space-y-8">
            {skillGroups.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.06}>
                <div>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                    <span className="text-accent">$</span> {g.group}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-edge bg-background px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------- */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <Reveal>
          <p className="font-mono text-sm text-muted">
            $ ./lets-build-something.sh
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Have a role or project in mind?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Get in touch →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
