## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
## 2024-06-26 - Missing Keyboard Accessibility on Interactive Cards
**Learning:** `motion.div` elements used as interactive cards (like `ProjectCard` and `ExperienceCard`) were functioning purely as click targets without keyboard accessibility, alienating users navigating via keyboard.
**Action:** When using non-semantic elements as buttons, always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to process "Enter" and " " (Space) keys, and `focus-visible` styling to make the interactive element accessible.
