## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-07-08 - Keyboard Navigation for Interactive Cards
**Learning:** Using `motion.div` as a clickable card creates a "div button" that completely breaks keyboard navigation and screen reader accessibility unless explicitly handled. Keyboard users couldn't trigger or even tab to the cards.
**Action:** When making `div` or `motion.div` elements clickable, always ensure keyboard accessibility by adding `role="button"`, `tabIndex={0}`, a visible focus ring (`focus-visible`), and an `onKeyDown` handler to simulate clicks on 'Enter' and 'Space' (using `e.preventDefault()` on 'Space' to prevent scrolling). Remember to explicitly ignore keydown events from internal nested tags (like `<a>` tags in ProjectCard) to prevent double-triggering actions.
