# Mason Meyer Portfolio

A responsive portfolio centered on systems analysis, solutions delivery, technical projects, and measurable professional outcomes. The site uses a restrained editorial system with persistent light and dark themes.

## Goals

- Present a concise narrative connecting business needs, people, and technology.
- Demonstrate work across discovery, analysis, solution design, implementation, and adoption.
- Preserve engineering depth through substantive technical projects.
- Make the resume, GitHub, LinkedIn, and email paths easy to find.
- Maintain strong accessibility and responsive behavior across devices.

## Selected features

- Systems & Signal responsive visual design.
- A compact discovery-to-adoption solution lifecycle.
- Persisted light and dark mode with operating-system preference fallback.
- Structured case studies for DataWizard and Legacy Modernizer.
- Outcome-oriented experience and capability summaries derived from the current resume.
- Semantic navigation, visible focus states, and reduced-motion support.
- Open Graph and X metadata with a site-specific social preview.

## Technology stack

- React 19
- Vite 6
- JavaScript
- CSS custom properties and responsive layout
- React Icons
- PropTypes

## Architecture

Portfolio content is defined in `src/data/portfolio.js`, page composition lives in `src/App.jsx`, and the visual system lives in `src/App.css`. Theme preference is managed through React context and persisted in local storage.

See [docs/architecture.md](docs/architecture.md) for the information architecture and content principles.

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## Roadmap

- Add systems-analysis case studies when suitable public project material is available.
- Add focused long-form technical case studies when additional public project material is available.
- Add automated accessibility and end-to-end checks.
- Revisit deployment metadata if the canonical domain changes.
