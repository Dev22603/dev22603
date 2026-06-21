## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
## 2024-06-21 - Keyboard Accessibility for Non-Native Interactive Components
**Learning:** In this application, many interactive components (like `ProjectCard` and `ExperienceCard`) are built using `motion.div` or `div` rather than native `<button>` or `<a>` elements to accommodate complex layouts and animations. This makes them inaccessible to keyboard users out of the box because they lack a tab stop, semantics, and keyboard event handlers.
**Action:** When creating or modifying non-interactive elements to act as clickable buttons or links, always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler that simulates clicks on 'Enter' and 'Space' (ensuring `e.preventDefault()` is used on 'Space' to prevent unwanted page scrolling), and `focus-visible` utility classes for visual feedback.
