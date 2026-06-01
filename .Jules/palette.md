## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2025-02-12 - Missing Keyboard Accessibility on Interactive Card Components
**Learning:** `motion.div` elements used as interactive cards (like ProjectCard and ExperienceCard) lacked keyboard accessibility. While they had `onClick` handlers, they couldn't be triggered via keyboard (Enter/Space) and didn't have focus styles or roles, making them inaccessible to keyboard-only users.
**Action:** When making non-interactive elements (like `div` or `motion.div`) clickable, always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to simulate clicks on Enter/Space, and visible focus styles (e.g. `focus-visible:ring`).
