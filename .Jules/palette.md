## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2026-07-03 - Interactive Elements Must Be Keyboard Accessible
**Learning:** Using `div` or `motion.div` as clickable cards (e.g. `ProjectCard.jsx`) without native keyboard support makes them completely inaccessible to users navigating via keyboard. Even if `onClick` is provided, elements like `<div />` are natively non-interactive and thus excluded from the tab sequence and do not respond to Enter/Space.
**Action:** Whenever a non-interactive element is used as an interactive component, always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (to simulate click on Enter/Space, whilst using `e.preventDefault()` on Space to prevent scrolling), and `focus-visible` styling to ensure parity with native `<button>` elements. Ensure inner interactive elements do not trigger the outer card's handler.
