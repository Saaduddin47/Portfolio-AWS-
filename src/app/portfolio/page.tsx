import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { certifications } from "@/data/profile";
import { ProjectCard } from "@/components/project-card";
import { CertCard } from "@/components/cert-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Cloud & DevOps projects — AWS architectures, CI/CD pipelines, Docker and Kubernetes deployments — plus verifiable certifications.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <Reveal>
        <p className="font-mono text-sm text-muted">$ ls ~/projects</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Portfolio<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Cloud infrastructure, CI/CD, and container work. Each project covers
          the architecture decisions and outcomes; certifications are
          verifiable.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <p className="font-mono text-sm text-muted">$ ls ~/certifications</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Certifications<span className="text-accent">.</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 0.08}>
            <CertCard cert={c} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
