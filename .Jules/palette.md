## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-07-07 - Keyboard Accessibility for Non-Interactive Elements with Inner Links
**Learning:** Using non-interactive elements like `div` or `motion.div` as clickable cards requires explicit keyboard accessibility (`role="button"`, `tabIndex={0}`, `onKeyDown` with `Enter` and `Space` support). If these cards contain inner interactive elements (like anchor `<a>` tags), the keyboard event handler on the container must explicitly ignore events triggered from the inner tags to prevent double-triggering actions.
**Action:** Always ensure keyboard accessibility for custom interactive elements and handle event bubbling appropriately when inner interactive elements are present.
