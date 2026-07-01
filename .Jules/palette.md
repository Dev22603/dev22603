## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2026-07-01 - Missing Keyboard Accessibility on Interactive Divs
**Learning:** Non-interactive elements (like `div` or `motion.div`) that act as buttons were lacking keyboard accessibility, preventing users from navigating to them and triggering actions with the keyboard.
**Action:** Always verify that interactive non-button elements have `role="button"`, `tabIndex={0}`, `focus-visible` styles, and an `onKeyDown` handler for 'Enter' and 'Space' that simulates click while optionally ignoring events from embedded links.
