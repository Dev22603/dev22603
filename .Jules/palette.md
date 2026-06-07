## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-06-07 - Inaccessible interactive elements using motion.div
**Learning:** Found `motion.div` elements being used as interactive clickable cards (`onClick` handler) without any keyboard accessibility support. This prevented keyboard-only users from activating the cards or seeing focus styles.
**Action:** Always ensure that non-native interactive elements like `div` or `motion.div` receive `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to trigger actions via Enter/Space keys, and `focus-visible` styles.
