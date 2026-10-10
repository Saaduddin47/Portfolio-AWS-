"use client";

import { useEffect, useRef, useState } from "react";
import {
  profile,
  certifications,
  achievements,
  skillGroups,
  education,
} from "@/data/profile";
import { projects } from "@/data/projects";

type Line = { text: string; kind: "input" | "output" | "accent" | "error" };

const PROMPT = "saaduddin@portfolio:~$";

const BOOT_LINES: string[] = [
  "[  OK  ] Mounting /dev/career ...",
  "[  OK  ] Starting cloud-engineer.service ...",
  "[  OK  ] Loading AWS credentials (role: Cloud & DevOps Engineer) ...",
  "[  OK  ] Pulling image saaduddin/portfolio:latest ...",
  "[  OK  ] All systems operational.",
  "",
  `Welcome to Saaduddin's terminal. Type 'help' to see available commands.`,
  "",
];

const COMMANDS = [
  "help",
  "about",
  "whoami",
  "skills",
  "projects",
  "certs",
  "achievements",
  "contact",
  "resume",
  "clear",
  "coffee",
] as const;

function runCommand(raw: string): Line[] {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case "":
      return [];

    case "help":
      return [
        { text: "Available commands:", kind: "output" },
        { text: "  about         — who I am", kind: "output" },
        { text: "  whoami        — short identity check", kind: "output" },
        { text: "  skills        — tech stack by category", kind: "output" },
        { text: "  projects      — cloud & devops projects", kind: "output" },
        { text: "  certs         — certifications (verifiable)", kind: "output" },
        { text: "  achievements  — awards & highlights", kind: "output" },
        { text: "  contact       — how to reach me", kind: "output" },
        { text: "  resume        — download my CV", kind: "output" },
        { text: "  clear         — clear the screen", kind: "output" },
        { text: "  coffee        — essential devops fuel", kind: "output" },
        {
          text: "Hint: there may be undocumented commands. Try sudo something.",
          kind: "accent",
        },
      ];

    case "about":
      return [
        { text: profile.name, kind: "accent" },
        { text: profile.summary, kind: "output" },
        { text: "", kind: "output" },
        { text: profile.longBio, kind: "output" },
      ];

    case "whoami":
      return [
        { text: "uid=1000(saaduddin) groups=cloud,devops,aws", kind: "output" },
        {
          text: `role: ${profile.role} · location: ${profile.location}`,
          kind: "output",
        },
        { text: "status: open_to_work=true", kind: "accent" },
      ];

    case "skills":
      return skillGroups.flatMap((g) => [
        { text: `# ${g.group}`, kind: "accent" as const },
        { text: `  ${g.skills.join(", ")}`, kind: "output" as const },
      ]);

    case "projects":
      return projects.flatMap((p, i) => [
        { text: `[${i + 1}] ${p.title}`, kind: "accent" as const },
        { text: `    ${p.description}`, kind: "output" as const },
        ...(p.metric
          ? [{ text: `    ▲ ${p.metric}`, kind: "output" as const }]
          : []),
      ]);

    case "certs":
      return certifications.map((c) => ({
        text: `[${c.status === "verified" ? "✓" : c.status === "in-progress" ? "~" : " "}] ${c.title} — ${c.issuer} (${c.date})`,
        kind: c.status === "verified" ? "output" : "accent",
      }));

    case "achievements":
      return achievements.map((a) => ({
        text: `▲ ${a.title}: ${a.detail}`,
        kind: "output",
      }));

    case "contact":
      return [
        { text: `email:    ${profile.email}`, kind: "output" },
        { text: `phone:    ${profile.phone}`, kind: "output" },
        { text: `github:   ${profile.socials.github}`, kind: "output" },
        { text: `linkedin: ${profile.socials.linkedin}`, kind: "output" },
        { text: profile.repliesWithin.toLowerCase(), kind: "accent" },
      ];

    case "resume":
      if (typeof window !== "undefined") window.open(profile.resumeFile, "_blank");
      return [{ text: "Opening resume.pdf ...", kind: "accent" }];

    case "education":
      return [
        { text: education.degree, kind: "accent" },
        { text: `${education.school} · ${education.period}`, kind: "output" },
        { text: education.gpa, kind: "output" },
      ];

    case "coffee":
      return [
        { text: "      ( (", kind: "output" },
        { text: "       ) )", kind: "output" },
        { text: "    ........", kind: "output" },
        { text: "    |      |]", kind: "output" },
        { text: "    \\      /", kind: "output" },
        { text: "     `----'", kind: "output" },
        { text: "Coffee brewed. Pipeline unblocked. ☕", kind: "accent" },
      ];

    case "sudo hire-me":
    case "sudo hire me":
      return [
        { text: "[sudo] password for recruiter: ********", kind: "output" },
        { text: "Access granted.", kind: "accent" },
        {
          text: "Deploying Saaduddin to your team... ████████████ 100%",
          kind: "accent",
        },
        {
          text: `Deployment successful. Next step: mailto:${profile.email}`,
          kind: "output",
        },
      ];

    case "sudo":
    case "sudo su":
      return [
        {
          text: "saaduddin is not in the sudoers file. This incident will be reported. (try: sudo hire-me)",
          kind: "error",
        },
      ];

    case "rm -rf /":
      return [
        {
          text: "Nice try. This infrastructure is immutable. 🛡️",
          kind: "error",
        },
      ];

    case "ls":
      return [
        {
          text: "about  skills  projects  certs  achievements  contact  resume",
          kind: "output",
        },
      ];

    case "pwd":
      return [{ text: "/home/saaduddin/portfolio", kind: "output" }];

    case "exit":
      return [
        { text: "There is no escape from the cloud. ☁️", kind: "accent" },
      ];

    default:
      return [
        {
          text: `command not found: ${cmd}. Type 'help' for available commands.`,
          kind: "error",
        },
      ];
  }
}

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [booted, setBooted] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // boot sequence
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= BOOT_LINES.length) {
        clearInterval(interval);
        setBooted(true);
        return;
      }
      const text = BOOT_LINES[i];
      setLines((prev) => [
        ...prev,
        {
          text,
          kind: text.startsWith("[  OK  ]") ? "output" : "accent",
        },
      ]);
      i++;
    }, 220);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function submit() {
    const raw = input;
    setInput("");
    setHistoryIndex(-1);
    if (raw.trim()) {
      setHistory((h) => [raw, ...h]);
    }
    if (raw.trim().toLowerCase() === "clear") {
      setLines([]);
      return;
    }
    setLines((prev) => [
      ...prev,
      { text: `${PROMPT} ${raw}`, kind: "input" },
      ...runCommand(raw),
    ]);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, history.length - 1);
      if (history[next] !== undefined) {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = historyIndex - 1;
      if (next < 0) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const partial = input.toLowerCase();
      if (!partial) return;
      const match = COMMANDS.find((c) => c.startsWith(partial));
      if (match) setInput(match);
    }
  }

  const colorFor = (kind: Line["kind"]) =>
    kind === "input"
      ? "text-foreground"
      : kind === "accent"
        ? "text-accent"
        : kind === "error"
          ? "text-red-400"
          : "text-term";

  return (
    <div
      className="flex h-[70vh] flex-col overflow-hidden rounded-xl border border-edge bg-[#0c0c0f] font-mono text-sm shadow-2xl"
      onClick={() => inputRef.current?.focus()}
    >
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-edge bg-[#17171c] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-neutral-400">
          saaduddin@portfolio — bash
        </span>
      </div>

      {/* output */}
      <div className="flex-1 space-y-1 overflow-y-auto p-4">
        {lines.map((line, i) => (
          <p
            key={i}
            className={`whitespace-pre-wrap break-words leading-relaxed ${colorFor(line.kind)}`}
          >
            {line.text || "\u00A0"}
          </p>
        ))}

        {booted && (
          <div className="flex items-center gap-2">
            <span className="shrink-0 text-accent">{PROMPT}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal input"
              className="w-full bg-transparent text-neutral-100 caret-[var(--accent)] outline-none"
            />
          </div>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
