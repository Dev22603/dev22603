## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
## 2024-05-18 - Keyboard Accessibility for Non-Interactive Elements
**Learning:** Animated wrappers (like `motion.div`) acting as interactive cards often break keyboard accessibility if they lack proper roles and event handlers.
**Action:** When making elements interactive without using native `<button>` or `<a>` tags, always ensure `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (triggering on Enter/Space, with Space preventing default scroll), and clear `focus-visible` styles are included.
