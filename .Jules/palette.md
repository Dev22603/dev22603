## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2026-06-22 - Mobile Menu ARIA Controls
**Learning:** The mobile menu toggle button lacked `aria-expanded` and `aria-controls` attributes, and the corresponding dropdown menu was missing an `id`. This made it difficult for screen reader users to understand the state of the menu and navigate its contents.
**Action:** Always verify that expand/collapse toggles include `aria-expanded` reflecting the current state, and use `aria-controls` pointing to the `id` of the controlled element.
