# Portfolio Architecture

## Purpose

The portfolio presents Mason Meyer's systems analysis, solutions delivery, and engineering experience through concise, verifiable examples. It is designed for fast scanning while preserving enough implementation detail to support deeper evaluation.

## Information architecture

1. **Positioning** - role, value proposition, location, and primary actions.
2. **Proof signals** - a compact summary of education, solutions delivered, product scale, and business impact.
3. **Solution lifecycle** - a concise discovery-to-adoption model showing how work progresses.
4. **Technical projects** - two public engineering projects describing the problem, contribution, technical approach, and evidence.
5. **Experience and capabilities** - a chronological professional summary followed by strengths grouped around the solution lifecycle.
6. **Contact** - direct email, GitHub, LinkedIn, and resume paths.

## Application structure

- `src/data/portfolio.js` is the source of truth for portfolio copy and structured content.
- `src/App.jsx` owns the semantic page composition and small presentational components.
- `src/App.css` owns theme tokens, responsive layout, interaction, and motion.
- `src/common/ThemeContext.jsx` owns the persisted light/dark preference.
- `public/og.png` provides the site-specific social sharing preview.

This intentionally small structure keeps content edits straightforward and avoids component abstraction that would not improve maintainability at the site's current scale.

## Content principles

- Use outcomes only when supported by the resume or project documentation.
- Describe individual contribution explicitly on collaborative work.
- Keep technical projects separate from future systems-analysis case studies.
- Prefer a small number of substantive case studies over a broad project gallery.
- Group capabilities by solution responsibility instead of displaying a technology logo wall.
- Keep contact paths direct and avoid collecting visitor information unnecessarily.
