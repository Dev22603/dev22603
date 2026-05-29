## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-29 - Missing Keyboard Accessibility on Interactive Divs
**Learning:** The app uses framer-motion's `motion.div` for interactive, clickable cards (e.g., `ExperienceCard`, `ProjectCard`), but these lack native keyboard support (tab indexing, focus states, and Enter/Space key triggers). This makes them inaccessible to keyboard-only users.
**Action:** When using non-interactive elements like `div` or `motion.div` as clickable interactive components, always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to simulate clicks on Enter/Space, and `focus-visible` styles to ensure full keyboard accessibility.
