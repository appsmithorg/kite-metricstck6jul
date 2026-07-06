import type { Metadata } from 'next';
import Script from 'next/script';
import {
  SCRIPT_INJECTOR_CDN_URL,
  buildPosthogInitScript,
} from '@appsmithorg/template-frontend';
import DevErrorOverlay from '@/components/dev-error-overlay';
import { getBaseUrl } from '@/lib/site-url';
import './globals.css';

// metadataBase resolves the relative `alternates.canonical` and
// `openGraph.url` paths that route pages export into absolute URLs, and
// follows the deploy URL (preview, production, custom domain) instead of a
// domain frozen at generation time.
export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: 'Prototype',
  description: '',
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // PostHog analytics (autocapture + pageviews) — sits beside Pirsch. Per-site
  // project token injected at build via NEXT_PUBLIC_POSTHOG_KEY; production-only.
  // The stub + token guard + init live in the shared `buildPosthogInitScript`
  // (one source with the Vite posthog-injector); it returns null for a missing
  // or malformed token.
  const posthogScript =
    process.env.NODE_ENV === 'production'
      ? buildPosthogInitScript(process.env.NEXT_PUBLIC_POSTHOG_KEY)
      : null;

  return (
    <html lang="en">
      <head>
        {/* Script injector enables Kite's point-and-click editor inside the */}
        {/* preview iframe. Skipped in production builds — point-and-click is */}
        {/* an editing-time capability, not a runtime feature for end users. */}
        {process.env.NODE_ENV !== 'production' && (
          <Script src={SCRIPT_INJECTOR_CDN_URL} strategy="afterInteractive" />
        )}
        {/* Pirsch analytics. A static <script> (not next/script) so it sits in */}
        {/* the server HTML at parse time — pa.js then auto-tracks the first */}
        {/* pageview and SPA navigations. next/script's afterInteractive injects */}
        {/* post-load, after pa.js's load hooks have fired, so the initial */}
        {/* pageview is missed; beforeInteractive can strip data-* in app router */}
        {/* (vercel/next.js#49830). Token injected at build via */}
        {/* NEXT_PUBLIC_PIRSCH_TOKEN (deployment_service); absent in dev. */}
        {process.env.NODE_ENV === 'production' &&
          process.env.NEXT_PUBLIC_PIRSCH_TOKEN && (
            <script
              defer
              src="https://api.pirsch.io/pa.js"
              id="pianjs"
              data-code={process.env.NEXT_PUBLIC_PIRSCH_TOKEN}
            />
          )}
        {/* PostHog analytics (autocapture + pageviews). Inline so it sits in the */}
        {/* server HTML at parse time, beside Pirsch. */}
        {posthogScript && (
          <script
            id="posthog-analytics"
            dangerouslySetInnerHTML={{ __html: posthogScript }}
          />
        )}
      </head>
      <body>
        {process.env.NODE_ENV !== 'production' && <DevErrorOverlay />}
        {children}
      </body>
    </html>
  );
}
