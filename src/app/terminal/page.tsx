import type { Metadata } from "next";
import { Terminal } from "@/components/terminal";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Terminal",
  description:
    "Explore Saaduddin's profile the DevOps way — through an interactive terminal.",
};

export default function TerminalPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <Reveal>
        <p className="font-mono text-sm text-muted">$ ssh saaduddin@portfolio</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Terminal<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Explore my profile the DevOps way. Type{" "}
          <code className="rounded border border-edge bg-card px-1.5 py-0.5 font-mono text-xs text-accent">
            help
          </code>{" "}
          to get started — arrow keys browse history, Tab autocompletes, and
          there are a few undocumented commands for the curious.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-10">
        <Terminal />
      </Reveal>
    </div>
  );
}
