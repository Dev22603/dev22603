## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2023-10-24 - Keyboard Support on Interactive Divs
**Learning:** Making non-interactive elements like `div` or `motion.div` function as clickable components requires specific semantic attributes (`role="button"`, `tabIndex={0}`) and custom keyboard event handlers. Furthermore, it requires explicitly ignoring nested interactive elements (like `<a>` or `<button>`) in the keyboard handler to prevent standard navigation actions from accidentally double-triggering the container's custom click logic.
**Action:** When converting non-interactive elements into interactive ones, always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (with `e.preventDefault()` for spacebar), and `focus-visible` styles. Always filter out events bubbling up from child interactive tags.
