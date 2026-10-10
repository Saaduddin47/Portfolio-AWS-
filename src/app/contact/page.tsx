import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Syed Saaduddin Azhaan — open to Cloud, DevOps, and Platform Engineering opportunities.",
};

const channels = [
  {
    label: "Email",
    value: "saaduddinsyed10@gmail.com",
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/azhaan47",
    href: profile.socials.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Saaduddin47",
    href: profile.socials.github,
  },
  {
    label: "X / Twitter",
    value: "@Azhaan_47",
    href: profile.socials.x,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <Reveal>
        <p className="font-mono text-sm text-muted">$ ping saaduddin</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Contact<span className="text-accent">.</span>
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 rounded-full border border-edge bg-card px-3 py-1.5 text-xs">
            <span className="h-2 w-2 rounded-full bg-term" />
            {profile.availability}
          </span>
          <span className="rounded-full border border-edge bg-card px-3 py-1.5 font-mono text-xs text-muted">
            {profile.repliesWithin}
          </span>
          <span className="rounded-full border border-edge bg-card px-3 py-1.5 font-mono text-xs text-muted">
            {profile.location}
          </span>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Reveal delay={0.1}>
          <ul className="space-y-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-edge bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/60"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      {c.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{c.value}</p>
                  </div>
                  <span className="text-muted transition-all group-hover:translate-x-1 group-hover:text-accent">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
