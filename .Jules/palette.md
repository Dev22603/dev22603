## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-19 - Clickable Container Keyboard Accessibility with Inner Links
**Learning:** Making entire cards clickable (like `motion.div` in ProjectCard/ExperienceCard) without explicit keyboard support breaks accessibility for keyboard-only users, as they cannot trigger the main action. Furthermore, if inner interactive elements (like anchor tags for source code or live demos) exist, the container's keyboard event handler needs to ignore events originating from those inner elements to prevent unintended actions and double-triggering.
**Action:** When creating custom clickable containers, always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (supporting 'Enter' and 'Space'), clear `focus-visible` styling, and an `aria-label`. In the `onKeyDown` handler, ensure events originating from inner interactive elements (`e.target.tagName.toLowerCase() === 'a'`) are ignored.
