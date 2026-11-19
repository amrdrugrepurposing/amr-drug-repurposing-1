import Link from "next/link";

import { Mark } from "./Mark";

/**
 * The footer, built like the header: the brand lockup and the one sentence
 * every page owes its reader, the places to go, where the records come from,
 * and, quietly at the end, who made it.
 */

const SOURCES = ["FDA Orange Book", "ChEMBL", "ClinicalTrials.gov", "Protein Data Bank"];

const EXPLORE = [
  { href: "/", label: "Overview" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/methods", label: "The method" },
];

/** The author's links. */
const AUTHOR = {
  name: "Ved Chauhan",
  github: "https://github.com/VED2107",
  portfolio: "https://ved.snowbros.me",
};

export function Footer() {
  return (
    <footer className="border-t border-rule bg-raised">
      <div className="mx-auto max-w-shell px-4 pb-6 pt-10 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
          {/* Brand and the sentence every page owes its reader. */}
          <div>
            <Link href="/" aria-label="AMR Drug Repurposing, Smart Screening: overview" className="amr-brand inline-flex items-center gap-3 rounded-full no-underline">
              <Mark size={36} className="rounded-full" />
              <span className="flex flex-col pr-3 leading-none">
                <span className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink">AMR Drug Repurposing</span>
                <span className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Smart Screening</span>
              </span>
            </Link>
            <p className="m-0 mt-5 max-w-[46ch] text-[13px] leading-relaxed text-ink-2">
              <strong className="font-semibold text-ink">Research prototype, not medical advice.</strong>{" "}
              Nothing here shows that a medicine treats a disease. Every candidate is a lead for
              laboratory testing.
            </p>
          </div>

          {/* Places to go. */}
          <nav aria-label="Footer">
            <p className="m-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Explore</p>
            <ul className="m-0 mt-3 flex list-none flex-col items-start gap-1 p-0">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="amr-foot-link inline-flex min-h-9 items-center gap-2 rounded-full px-3 font-display text-[13px] font-semibold text-ink-2 no-underline"
                  >
                    {item.label}
                    <span aria-hidden="true" className="amr-foot-arrow text-accent">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Where the records come from. */}
          <div>
            <p className="m-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Sources</p>
            <ul className="m-0 mt-3 flex list-none flex-wrap gap-1.5 p-0">
              {SOURCES.map((s) => (
                <li key={s} className="rounded-full border border-rule bg-paper px-3 py-1 font-mono text-[11px] text-ink-2">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar: the limit, and who made it. */}
        <div className="mt-10 flex flex-col gap-4 border-t border-rule pt-5 md:flex-row md:items-center md:justify-between">
          <p className="m-0 font-mono text-[11px] text-muted">
            Computational screening only. No new patient or laboratory experiments were performed.
          </p>

          <div className="flex items-center gap-3 self-start rounded-full border border-rule bg-paper py-1.5 pl-1.5 pr-2 md:self-auto">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-[12px] font-semibold tracking-[0.02em] text-paper"
            >
              VC
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">Crafted by</span>
              <span className="mt-1 font-display text-[13px] font-semibold text-ink">{AUTHOR.name}</span>
            </span>
            <span aria-hidden="true" className="mx-1 h-6 w-px bg-rule" />
            <a
              href={AUTHOR.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${AUTHOR.name} on GitHub`}
              className="amr-credit-link inline-flex h-8 items-center gap-1.5 rounded-full px-2.5 font-mono text-[11px] text-ink-2 no-underline"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.08.58.54.93 1.42.66 1.77.5.05-.39.21-.66.38-.81-1.6-.18-3.27-.8-3.27-3.55 0-.78.28-1.42.74-1.92-.07-.18-.32-.91.07-1.9 0 0 .6-.19 1.98.73.57-.16 1.18-.24 1.79-.24.61 0 1.22.08 1.79.24 1.38-.93 1.98-.73 1.98-.73.39.99.14 1.72.07 1.9.46.5.74 1.13.74 1.92 0 2.76-1.67 3.37-3.27 3.55.21.18.39.54.39 1.09 0 .79-.01 1.42-.01 1.61 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              GitHub
            </a>
            <a
              href={AUTHOR.portfolio}
              target="_blank"
              rel="noreferrer"
              aria-label={`${AUTHOR.name}'s portfolio`}
              className="amr-credit-link inline-flex h-8 items-center gap-1.5 rounded-full px-2.5 font-mono text-[11px] text-ink-2 no-underline"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
                <path d="M1.5 8h13M8 1.5c2 2 2 11 0 13M8 1.5c-2 2-2 11 0 13" fill="none" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
