## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-30 - Keyboard Accessibility on Custom Clickable Elements
**Learning:** Non-interactive elements (like `div` or `motion.div`) that act as clickable interactive components frequently lack native keyboard support, missing both focusability and keyboard event handling.
**Action:** Always ensure keyboard accessibility by adding `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to simulate clicks on Enter/Space, and `focus-visible` styles when using non-interactive elements as clickable components.
