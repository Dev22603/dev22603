## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
## 2026-06-30 - Added keyboard accessibility to interactive cards
**Learning:** Interactive elements implemented as `motion.div` with `onClick` handlers need explicit keyboard accessibility attributes (`role="button"`, `tabIndex={0}`, `onKeyDown`) to be usable via keyboard, while native elements like `<a>` only needed focus styles.
**Action:** Always ensure any interactive non-native elements include `role="button"`, `tabIndex`, keyboard event listeners, and visible focus styles to support keyboard navigation.
