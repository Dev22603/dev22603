## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-19 - Keyboard Accessibility for Clickable Divs
**Learning:** Using `div` or `motion.div` as interactive components (like cards) requires manual implementation of keyboard accessibility, which is often missed compared to native `<button>` or `<a>` elements. Users relying on keyboards cannot activate these cards without explicit focus and keydown handlers.
**Action:** When using non-interactive elements as clickable cards, always ensure to add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to simulate clicks on Enter/Space (with `e.preventDefault()` for Space to prevent page scrolling), and `focus-visible` styles for clear focus indication.
