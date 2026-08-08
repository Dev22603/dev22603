## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2026-06-05 - Missing Keyboard Accessibility on Interactive Cards
**Learning:** Interactive UI components that use `div` or `motion.div` with an `onClick` handler and `cursor-pointer` (like ProjectCard and ExperienceCard) look and feel clickable to mouse users but are completely invisible to keyboard navigation.
**Action:** Whenever a non-interactive element is used as a button, strictly enforce adding `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (for Enter/Space), and clear `focus-visible` styles to guarantee keyboard accessibility.
