## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-20 - Custom Framer Motion Divs as Buttons Lack Keyboard Support
**Learning:** `motion.div` components used as interactive cards (e.g. `ProjectCard`, `ExperienceCard`) with `onClick` handlers natively lack keyboard accessibility (tab navigation and Enter/Space key support).
**Action:** When using `div` or `motion.div` as a button, always include `role="button"`, `tabIndex={0}`, keyboard event handlers (`onKeyDown` for Enter/Space), and visual focus indicators (`focus-visible`).
