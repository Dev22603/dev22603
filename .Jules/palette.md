## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2026-06-12 - Keyboard Accessibility for Custom Interactive Cards
**Learning:** Using `div` or `motion.div` as interactive components (like cards opening modals) creates an accessibility gap if they lack keyboard support, preventing non-mouse users from interacting.
**Action:** Always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (for 'Enter' and 'Space'), and clear `focus-visible` styles to any non-native element designed to be clicked.
