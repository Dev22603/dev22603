## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2026-06-25 - Interactive Divs with Nested Links
**Learning:** Using `motion.div` or `div` as a clickable card can trap screen reader and keyboard users if not properly configured. When adding an `onKeyDown` handler to simulate clicks for these interactive cards, nested native interactive elements (like `<a>` tags for project links) can cause double-triggering when pressed with Enter/Space.
**Action:** When implementing custom interactive elements (like cards) that wrap native interactive elements (like links), always ensure keyboard accessibility by adding `role="button"`, `tabIndex={0}`, and `focus-visible` styles. In the `onKeyDown` handler, explicitly check `e.target` to ignore events originating from nested interactive elements like `<a>` to prevent duplicate action firing.
