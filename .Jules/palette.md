## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-10-24 - Interactive motion.div requires explicit keyboard accessibility
**Learning:** Using `motion.div` as interactive, clickable components (like project cards) without explicit ARIA roles or keyboard handlers makes them completely inaccessible to keyboard-only and screen reader users. The default behavior drops them from the tab order.
**Action:** When making non-interactive elements clickable, always include `role="button"`, `tabIndex={0}`, an `onKeyDown` handler simulating clicks on Enter/Space, and visible focus states (`focus-visible`).
