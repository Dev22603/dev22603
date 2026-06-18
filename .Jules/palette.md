## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-06-18 - Missing Keyboard Support on Interactive Cards
**Learning:** Interactive cards built using generic containers like `div` or `motion.div` are inaccessible to keyboard users by default, preventing them from using Tab to focus the element or Enter/Space to trigger its action.
**Action:** Always ensure that non-native interactive elements include `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (that triggers the click action and calls `e.preventDefault()` for the Space key to prevent scrolling), and clear focus indicator styles (e.g., `focus-visible:ring-2`).
