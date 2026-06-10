## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
## 2026-06-10 - [Adding full keyboard support to non-interactive element used as a button]
**Learning:** When using `motion.div` or `div` as an interactive clickable card, it's not enough to just rely on `onClick`. Screen readers and keyboard users cannot interact with it naturally.
**Action:** Add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler mapping Enter and Space to the `onClick` action, and ensure `focus-visible:ring-2` is applied for focus states to ensure keyboard accessibility.
