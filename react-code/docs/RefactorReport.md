# Refactor Report

## Component Map

- components/layout/Header.jsx: Used on Home, About, Projects, Blog, Resume, Contact. Replaces per-page sticky/mobile listeners by wiring hooks internally.
- components/layout/Footer.jsx: Used on all pages. Replaces inline footers in Projects, Contact.
- components/layout/PageHeader.jsx: Used on About, Projects, Blog, Contact, Resume (with `parallax`). Replaces ad-hoc page header sections.
- components/layout/Container.jsx: Shared `.container` wrapper. Used by PageHeader; available for future use.
- components/layout/Section.jsx: Generic section wrapper for spacing variants; used across pages to wrap sections.
- components/nav/Navbar.jsx: Desktop nav, unchanged classes/structure.
- components/nav/MobileNav.jsx: Mobile hamburger control with ARIA; Header now composes Navbar + MobileNav.
- components/ui/Carousel.jsx: Base carousel with auto-advance + pause; used by TestimonialsCarousel.
- components/home/TestimonialsCarousel.jsx: Uses Carousel; identical classes/behavior; sources data from data/testimonials.json.
- components/ui/FilterTabs.jsx: Used by Projects to render filter buttons; preserves `.filter-tabs` and `.filter-btn` classes.
- components/ui/FlipCard.jsx: Extracted flip card primitive for About skills; preserves `.skill-card*` classes.
- components/ui/{Button, Tag, Card, Grid, MediaImage}.jsx: UI primitives; ready for gradual use.

## Hooks Map

- hooks/useStickyNav.js: Adds/removes `sticky` on `#navbar` at 100px. Wired in Header only.
- hooks/useMobileNav.js: Toggles `.active` on `nav` via `.mobile-toggle`; sets `aria-expanded`; supports ESC to close; click/Enter/Space toggle.
- hooks/useIntersectionFade.js: Observes selectors; adds `fadeIn` on intersect; used on Home, Projects, About, Resume.
- hooks/useParallax.js: Applies identical parallax transforms to `.parallax-layer-{1,2,3}`; used on Home and Resume.
- hooks/useFlipCard.js: Returns onClick handler that toggles `.flipped` on skill cards; used by FlipCard.

## Content Map

- data/projects.json: Former inline `projectData` from `src/pages/Projects.jsx`.
  - Shape: [{ id, category, image, alt, title, summary, tags[], details: [{ h3, p? , ul?[] }] }]
- data/testimonials.json: Testimonials moved here; images referenced via `author.imageKey` and mapped to imported assets in `components/home/TestimonialsCarousel.jsx`.
  - Shape: [{ content, author: { name, company, imageKey } }]

## Before/After Visual Parity Checklist

- Home: Header stickiness, mobile toggle, parallax, fade-ins, testimonials auto-advance/pause — matched. Footer shared.
- About: Header/Sticky/Mobile via Header; page header standardized; skills flip via FlipCard; fade-ins matched.
- Projects: Header standardized; Filters identical; Cards, entrance animation, and categories matched; Footer shared; data sourced from JSON.
- Blog: Header standardized; page header standardized; layout/content unchanged; Footer shared.
- Resume: Header standardized; parallax/fade hooks added; PageHeader used; Footer shared.
- Contact: Header + page header standardized; Footer shared.

Notes: All classes and animations preserved; no tokens or styles changed. ARIA: Mobile toggle now sets `aria-expanded` and supports ESC.
