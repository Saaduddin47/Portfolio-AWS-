"use client";

import { useEffect, useState } from "react";

export function Typing({ phrases }: { phrases: string[] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let delay: number;

    if (!deleting && text === current) {
      delay = 1800; // pause at full phrase
    } else if (deleting && text === "") {
      delay = 300; // pause before next phrase
    } else {
      delay = deleting ? 35 : 70;
    }

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, phraseIndex, phrases]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="cursor-blink">▍</span>
    </span>
  );
}
