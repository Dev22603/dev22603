## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-19 - Keyboard Inaccessible Interactive Cards
**Learning:** Using `div` or `motion.div` with an `onClick` handler for complex interactive components (like ProjectCard and ExperienceCard) creates a barrier for keyboard users who cannot focus or activate the cards.
**Action:** When making non-interactive elements clickable, always include `role="button"`, `tabIndex={0}`, an `onKeyDown` handler to simulate clicks on Enter/Space, and visible focus states (`focus-visible:ring-2`) to ensure full keyboard accessibility.
