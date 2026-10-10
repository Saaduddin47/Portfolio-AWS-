"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${name || "a visitor"}`
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-edge bg-card p-6"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted"
        >
          Your name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Jane Recruiter"
          className="w-full rounded-lg border border-edge bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          placeholder="Hi Saaduddin, we have a Cloud Engineer role..."
          className="w-full resize-y rounded-lg border border-edge bg-background px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
      >
        Send via email →
      </button>
      <p className="text-center font-mono text-[11px] text-muted">
        Opens your email client — no data stored.
      </p>
    </form>
  );
}
