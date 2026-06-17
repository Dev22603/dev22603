## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-06-17 - Screen Reader Support for Mobile Menus
**Learning:** Collapsible mobile menus in standard components often lack the necessary ARIA links (`aria-expanded` and `aria-controls`) to inform screen readers about their open/closed state and the element they are manipulating.
**Action:** When implementing collapsible sections or mobile menus, always ensure `aria-expanded` and `aria-controls` are set on the toggle button and the controlled container has the corresponding `id`.
