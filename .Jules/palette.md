## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-14 - Interactive Divs Need Explicit Keyboard Handling
**Learning:** Using `div` or `motion.div` as interactive, clickable cards requires adding `role="button"`, `tabIndex={0}`, and most importantly, explicit `onKeyDown` handlers for the 'Enter' and 'Space' keys. Screen readers and keyboard navigators expect interactive components to respond to these keys natively like a `<button>` does. Omitting this breaks keyboard navigation. Also `e.preventDefault()` should be called for 'Space' key to prevent unwanted page scrolling.
**Action:** Whenever using non-native elements as buttons, ensure `role="button"`, `tabIndex={0}`, `focus-visible` styles, and the complete `onKeyDown` handler (Space/Enter) are implemented for full accessibility.
