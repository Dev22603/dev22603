## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-06-09 - Keyboard Inaccessible Custom Cards
**Learning:** Custom interactive components (like `motion.div` acting as buttons in ProjectCard and ExperienceCard) lacked `role="button"`, `tabIndex={0}`, keyboard event handlers, and `focus-visible` styles, rendering them unusable for keyboard-only navigation.
**Action:** Always ensure that non-button elements used for interaction have full keyboard support by adding appropriate ARIA roles, tabindex, keyboard handlers for Enter/Space, and visible focus states.
