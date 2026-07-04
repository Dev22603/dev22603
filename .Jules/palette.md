## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2025-02-12 - Missing Keyboard Accessibility on Interactive Card Components
**Learning:** Interactive UI components made from non-interactive tags (like `motion.div` or standard `div`) with `onClick` handlers must be given `role="button"`, `tabIndex={0}`, and an `onKeyDown` handler to simulate clicks on `Enter` or `Space` key presses to be usable via keyboard navigation. In addition, it's critical to verify and conditionally ignore events bubbling up from inner interactive tags (like `<a>` or `<button>`) in the custom `onKeyDown` handler to prevent double-triggering logic.
**Action:** Always verify keyboard accessibility (`tab` navigation and `enter`/`space` triggers) for any custom interactive elements (especially `div`s functioning as cards/buttons) and add focus-visible styles to indicate active focus.
