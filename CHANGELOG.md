# Changelog

All notable changes to this project will be documented here.

## [Unreleased]
### Planned
- Add lightweight unit tests for conversion logic
- Add currency formatting helpers (locale + rounding policy)
- Improve accessibility (focus trap inside modal, aria labels)

## [1.1.0] - 2026-02-17
### Changed
- Cleaned semantic HTML layout (single `<main>`, predictable overlay/modal layering).
- Replaced multiple modals with a single modal component using a `mode` state (`convert` / `request`).
- Introduced centralized `state` object as single source of truth (enabled, active wallet, balances, mode).
- Refactored exchange logic into a single `convertAmount(amount, from, to)` function using a base currency model.
- Rebuilt layout using responsive flex/grid (removed fixed pixel positioning).
- Replaced hide/show spam with `disabled` states for a clearer UX.
- Implemented inline validation errors (replaced `alert()` with an in-modal error box).
- Standardized keyboard behavior: `Enter` submits, `Esc` closes modal.
- Upgraded UI to an “XE-like” dashboard: active wallet panel, balances grid, sample rate chip.

### Why it matters
This release focuses on maintainability (DRY + state management), correctness (conversion model), and reviewability (clean structure + predictable UI).

## [1.0.0] - 2025-03-03
### Added
- Initial currency exchange prototype with basic conversion flow.
- Basic UI interactions and wallet concept.
