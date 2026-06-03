## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2026-06-03 - Keyboard accessibility on interactive motion.div elements
**Learning:** Found a recurring pattern in the design system where `motion.div` elements are used as interactive, clickable cards (e.g., ProjectCard, ExperienceCard) but lack proper keyboard accessibility. Users navigating via keyboard could not tab to or trigger these cards.
**Action:** When using non-interactive elements like `motion.div` for clickable components, always include `role="button"`, `tabIndex={0}`, `onKeyDown` handlers to simulate clicks on Enter/Space, and `focus-visible` styling for keyboard focus indicators.
