## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-06-06 - Missing Keyboard Accessibility in Clickable Cards
**Learning:** Using `div` or `motion.div` as clickable interactive components without semantic properties makes them inaccessible to keyboard users (unable to tab to them or trigger them with Enter/Space).
**Action:** Always ensure keyboard accessibility when using non-interactive elements as buttons by adding `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to simulate clicks on Enter/Space, and appropriate `focus-visible` styles.
