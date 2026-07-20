# Portfolio Architecture

## Purpose

The portfolio presents Mason Meyer's engineering experience through concise, verifiable examples. It is designed for fast scanning while preserving enough implementation detail to support deeper evaluation.

## Information architecture

1. **Positioning** - role, perspective, location, and primary actions.
2. **Proof signals** - a compact summary of education, product scale, technical focus, and working perspective.
3. **Selected work** - three case studies describing the problem, contribution, technical approach, and evidence.
4. **Experience and capabilities** - a chronological professional summary followed by grouped technical strengths.
5. **Contact** - direct email, GitHub, LinkedIn, and resume paths.

## Application structure

- `src/data/portfolio.js` is the source of truth for portfolio copy and structured content.
- `src/App.jsx` owns the semantic page composition and small presentational components.
- `src/App.css` owns theme tokens, responsive layout, interaction, and motion.
- `src/common/ThemeContext.jsx` owns the persisted light/dark preference.

This intentionally small structure keeps content edits straightforward and avoids component abstraction that would not improve maintainability at the site's current scale.

## Content principles

- Use outcomes only when supported by the resume or project documentation.
- Describe individual contribution explicitly on collaborative work.
- Prefer a small number of substantive case studies over a broad project gallery.
- Group tools by engineering responsibility instead of displaying a logo wall.
- Keep contact paths direct and avoid collecting visitor information unnecessarily.
