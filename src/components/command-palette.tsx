"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

type Item = {
  label: string;
  hint: string;
  action: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const items = useMemo<Item[]>(() => {
    const nav: Item[] = [
      { label: "Home / About", hint: "Page", action: () => router.push("/") },
      { label: "Portfolio", hint: "Page", action: () => router.push("/portfolio") },
      { label: "Resume", hint: "Page", action: () => router.push("/resume") },
      { label: "Contact", hint: "Page", action: () => router.push("/contact") },
      { label: "Terminal", hint: "Page", action: () => router.push("/terminal") },
      {
        label: "Download CV",
        hint: "Action",
        action: () => window.open(profile.resumeFile, "_blank"),
      },
      {
        label: "GitHub Profile",
        hint: "Link",
        action: () => window.open(profile.socials.github, "_blank"),
      },
      {
        label: "LinkedIn Profile",
        hint: "Link",
        action: () => window.open(profile.socials.linkedin, "_blank"),
      },
    ];
    const projectItems: Item[] = projects.map((p) => ({
      label: p.title,
      hint: "Project",
      action: () => {
        if (p.github) window.open(p.github, "_blank");
        else router.push("/portfolio");
      },
    }));
    return [...nav, ...projectItems];
  }, [router]);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter((i) => i.label.toLowerCase().includes(q));
  }, [items, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    }
    function onOpenEvent() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpenEvent);
    };
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-[18vh] backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-edge bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-edge px-4">
          <span className="font-mono text-sm text-accent">$</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter" && filtered[active]) {
                filtered[active].action();
                close();
              }
            }}
            placeholder="Search pages, projects, links..."
            className="w-full bg-transparent py-3.5 font-mono text-sm outline-none placeholder:text-muted"
          />
          <kbd className="rounded border border-edge px-1.5 py-0.5 font-mono text-[10px] text-muted">
            ESC
          </kbd>
        </div>
        <ul className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-3 py-6 text-center font-mono text-sm text-muted">
              command not found: {query}
            </li>
          )}
          {filtered.map((item, i) => (
            <li key={item.label}>
              <button
                onMouseEnter={() => setActive(i)}
                onClick={() => {
                  item.action();
                  close();
                }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  i === active
                    ? "bg-accent-soft text-accent"
                    : "text-foreground hover:bg-accent-soft"
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {item.hint}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
