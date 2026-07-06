## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-20 - Keyboard Accessibility for Custom Interactive Cards
**Learning:** Using `div` or `motion.div` as clickable elements requires explicit keyboard support. Without `role="button"`, `tabIndex={0}`, and `onKeyDown` handlers, these elements are inaccessible to keyboard users, breaking the navigation experience.
**Action:** Always add semantic roles, tab indices, keyboard event listeners (handling Enter/Space), and visible focus states (`focus-visible`) to custom interactive elements to ensure full keyboard accessibility.
