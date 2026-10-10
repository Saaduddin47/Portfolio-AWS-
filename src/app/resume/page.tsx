import type { Metadata } from "next";
import {
  profile,
  education,
  internships,
  certifications,
  achievements,
  skillGroups,
} from "@/data/profile";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Education, internships, certifications, and key Cloud & DevOps projects of Syed Saaduddin Azhaan.",
};

function TimelineSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative border-l border-edge pl-8">
      <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
        <span className="text-accent">$</span> {label}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-muted">$ cat resume.pdf</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              Resume<span className="text-accent">.</span>
            </h1>
          </div>
          <a
            href={profile.resumeFile}
            download="Saaduddin_Cloud_DevOps_Resume.pdf"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Download CV ↓
          </a>
        </div>
        <p className="mt-6 leading-relaxed text-muted">{profile.summary}</p>
      </Reveal>

      <div className="mt-14 space-y-14">
        {/* EDUCATION */}
        <Reveal>
          <TimelineSection label="education">
            <div className="rounded-xl border border-edge bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold">{education.degree}</h3>
                <span className="font-mono text-xs text-muted">
                  {education.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <p className="mt-2 font-mono text-xs text-term">
                {education.gpa}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Coursework: {education.coursework}
              </p>
            </div>
          </TimelineSection>
        </Reveal>

        {/* INTERNSHIPS */}
        <Reveal>
          <TimelineSection label="internship experience">
            {internships.map((job) => (
              <div
                key={job.role}
                className="rounded-xl border border-edge bg-card p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs text-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{job.company}</p>
                <ul className="mt-3 space-y-2">
                  {job.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="text-accent" aria-hidden>
                        ·
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </TimelineSection>
        </Reveal>

        {/* CERTIFICATIONS */}
        <Reveal>
          <TimelineSection label="certifications">
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li
                  key={c.title}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-edge bg-card px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium">{c.title}</p>
                    <p className="text-xs text-muted">{c.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {c.date}
                  </span>
                </li>
              ))}
            </ul>
          </TimelineSection>
        </Reveal>

        {/* KEY PROJECTS */}
        <Reveal>
          <TimelineSection label="key projects">
            <ul className="space-y-3">
              {projects.slice(0, 6).map((p) => (
                <li
                  key={p.title}
                  className="rounded-lg border border-edge bg-card px-4 py-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium">{p.title}</p>
                    <span className="font-mono text-[11px] text-muted">
                      {p.tech.slice(0, 4).join(" · ")}
                    </span>
                  </div>
                  {p.metric && (
                    <p className="mt-1 font-mono text-xs text-term">
                      ▲ {p.metric}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </TimelineSection>
        </Reveal>

        {/* ACHIEVEMENTS */}
        <Reveal>
          <TimelineSection label="achievements">
            <ul className="space-y-2">
              {achievements.map((a) => (
                <li
                  key={a.title}
                  className="flex gap-2 text-sm leading-relaxed text-muted"
                >
                  <span className="text-accent" aria-hidden>
                    ▲
                  </span>
                  <span>
                    <strong className="font-medium text-foreground">
                      {a.title}:
                    </strong>{" "}
                    {a.detail}
                  </span>
                </li>
              ))}
            </ul>
          </TimelineSection>
        </Reveal>

        {/* SKILLS */}
        <Reveal>
          <TimelineSection label="technical skills">
            <div className="space-y-4">
              {skillGroups.map((g) => (
                <div key={g.group}>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                    {g.group}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-edge px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TimelineSection>
        </Reveal>
      </div>
    </div>
  );
}
