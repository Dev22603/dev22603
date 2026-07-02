## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-07-02 - Keyboard Accessibility for Clickable Divs
**Learning:** Clickable custom components (like cards) built with `div` or `motion.div` are not inherently accessible via keyboard. They miss focusability and keyboard event triggers. Furthermore, handling keyboard events on a container needs care to avoid double-triggering actions if nested interactive elements (like `<a>` tags) are focused.
**Action:** Always ensure custom clickable components have `role="button"`, `tabIndex={0}`, focus-visible styles, and an `onKeyDown` handler that simulates clicks on `Enter` and `Space` (with `e.preventDefault()` for `Space`). Ensure the handler ignores events from inner interactive tags.
