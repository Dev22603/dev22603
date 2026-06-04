## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-19 - Keyboard Accessibility for Non-Interactive Elements used as Buttons
**Learning:** Using `motion.div` or `div` as a clickable card component creates accessibility barriers for keyboard and screen reader users since these elements are not inherently interactive.
**Action:** Always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to simulate clicks on the Enter and Space keys, and clear `focus-visible` styles to non-interactive elements when they are designed to function like buttons or clickable cards.
