## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-06-14 - Keyboard Accessibility for Non-Interactive Motion Elements
**Learning:** Using `motion.div` as a clickable card component creates accessibility issues because non-interactive elements don't inherently support keyboard focus or simulated clicks.
**Action:** When using `div` or `motion.div` as buttons, always explicitly add `role="button"`, `tabIndex={0}`, an `onKeyDown` event handler to simulate clicks on 'Enter' and 'Space', and visible focus indicators (`focus-visible`).
