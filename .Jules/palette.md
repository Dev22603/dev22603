## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-24 - Missing Keyboard Accessibility on Clickable Cards
**Learning:** Interactive `motion.div` elements (like `ProjectCard` and `ExperienceCard`) were missing keyboard accessibility, meaning users navigating with a keyboard couldn't trigger their click actions.
**Action:** When making non-interactive elements like `div` or `motion.div` clickable, always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to simulate clicks on Enter/Space, and visible focus styles (`focus-visible`).
