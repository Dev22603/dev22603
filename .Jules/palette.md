## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
## 2026-05-31 - Keyboard Accessibility for Custom Interactive Elements
**Learning:** In this application, custom interactive components like `motion.div` are frequently used as clickable cards (`ProjectCard`, `ExperienceCard`), but they lack native keyboard accessibility compared to standard `<button>` or `<a>` elements. This makes them inaccessible to keyboard users and screen readers, who expect to be able to focus the item and trigger it with Enter or Space.
**Action:** When creating or modifying custom clickable cards, always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler that simulates clicks on Enter/Space, and visible focus indicators like `focus-visible:ring-2`.
