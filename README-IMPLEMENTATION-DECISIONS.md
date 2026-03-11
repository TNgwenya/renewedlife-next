# Renewed Life Implementation Decisions

This file records implementation decisions made autonomously during the March 11, 2026 improvement pass.

## Decision log

1. Prompt and checklist workflow files were added to .gitignore so they can remain local operating documents and not ship as project content.
2. The existing Next.js App Router structure was preserved rather than introducing a larger redesign, because the site already has a solid route foundation and shared content model.
3. `lib/siteContent.ts` is being treated as the main content and structured-copy source so improvements stay consistent across pages and are easier to maintain.
4. Phase order is being followed from highest-impact visitor conversion work first: homepage, newcomer journey, trust signals, then family, sermons, ministries, and final SEO/QA.
5. Copy decisions are being optimized for warmth, clarity, and local trust, with natural references to Dube, Soweto, and Johannesburg where relevant.
6. Where exact operational details are missing, safe and non-deceptive general wording is preferred over inventing specifics.
7. Manual items outside the codebase, such as legacy WordPress cleanup and Search Console actions, will be documented in the checklist rather than marked complete.
8. A dedicated /families route was added rather than hiding family guidance inside a generic ministry block, because parents need a clearer first-visit reassurance path.
9. The top navigation was kept stable to avoid header crowding; the new families pathway is surfaced through homepage, visit page, footer, sitemap, and CTA links instead.
10. Sermons were given a curated "start here" path instead of fake depth or invented metadata, using only reliable information already present in the content source.
11. Ministry cards were expanded with concrete expectations and direct inquiry actions so the page becomes actionable without adding unnecessary route sprawl.
12. The repo’s current lint script was not treated as complete QA because `next lint` is not working with the current setup; successful production builds were used as the reliable verification path for this pass.

## Working principle

When multiple acceptable options exist, decisions are being made in favor of:

- stronger first-time visitor confidence
- clearer next steps
- minimal regression risk
- reuse of existing components
- church-appropriate tone over trend-driven design
