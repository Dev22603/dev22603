## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-28 - Keyboard Accessibility for Custom Interactive Elements
**Learning:** Custom interactive elements (e.g., clickable `motion.div` cards like ExperienceCard and ProjectCard) lack native keyboard support, which prevents keyboard and screen reader users from triggering actions or seeing a focus state.
**Action:** Always ensure that non-native clickable elements include `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (for "Enter" and "Space" keys), and `focus-visible` styles to ensure full keyboard accessibility.
