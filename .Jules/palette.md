## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
## 2026-05-26 - [Header Navigation Accessibility]
**Learning:** Changing a non-interactive element (span/div) to a button for interactive elements (like a logo that scrolls to top) drastically improves accessibility out-of-the-box by making it focusable and triggerable via keyboard. Additionally, providing ARIA attributes `aria-expanded` and `aria-controls` for mobile menus ensures screen readers correctly interpret the toggle state.
**Action:** Always prefer native interactive HTML elements like `<button>` instead of `<div cursor-pointer>` for actions, and verify ARIA attributes for expanding/collapsing sections.
