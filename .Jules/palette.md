## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
## 2026-06-08 - Keyboard Accessibility for div Buttons
**Learning:** When using non-interactive elements like `div` or `motion.div` as clickable components (like cards), they lack native keyboard accessibility. Users relying on keyboard navigation cannot focus on them or trigger their actions.
**Action:** Always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to simulate clicks on Enter/Space, and clear `focus-visible` styles to any `div` that functions as an interactive button.
