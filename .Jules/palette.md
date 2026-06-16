## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-19 - Keyboard Accessibility for Interactive motion.div Components
**Learning:** Using `motion.div` from Framer Motion (or standard `div` elements) as interactive, clickable components drops built-in keyboard accessibility present in native `<button>` or `<a>` elements. Users relying on keyboard navigation cannot focus on or interact with these cards using `Enter` or `Space` keys.
**Action:** When using non-interactive elements as clickable components, always ensure keyboard accessibility by adding `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to simulate clicks on `Enter`/`Space` (using `e.preventDefault()` for `Space` to prevent scrolling), and `focus-visible` styling utilities for clear visual focus indicators.
