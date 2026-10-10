import { certifications } from "@/data/profile";

type Cert = (typeof certifications)[number];

const statusStyle: Record<Cert["status"], { label: string; cls: string }> = {
  verified: { label: "verified", cls: "text-term border-term/40" },
  "in-progress": { label: "in progress", cls: "text-accent border-accent/40" },
  planned: { label: "planned", cls: "text-muted border-edge" },
};

export function CertCard({ cert }: { cert: Cert }) {
  const s = statusStyle[cert.status];
  return (
    <article className="flex h-full flex-col rounded-xl border border-edge bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold leading-snug">{cert.title}</h3>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] ${s.cls}`}
        >
          {s.label}
        </span>
      </div>
      <p className="text-xs text-muted">{cert.issuer}</p>
      <p className="mb-3 font-mono text-xs text-muted">{cert.date}</p>
      <div className="mt-auto space-y-1.5">
        {cert.credentialId && (
          <p
            className="truncate font-mono text-[10px] text-muted"
            title={cert.credentialId}
          >
            ID: {cert.credentialId}
          </p>
        )}
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
          >
            Verify credential
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
