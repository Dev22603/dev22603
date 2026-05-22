## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2025-02-12 - Missing Keyboard Events on Motion Cards
**Learning:** In Framer Motion or interactive `div` elements used as cards (like `ProjectCard` and `ExperienceCard`), attaching an `onClick` handler isn't enough for keyboard accessibility. These elements do not natively receive focus or handle enter/space keypresses.
**Action:** When making non-interactive elements (like `div` or `motion.div`) act as buttons or links, always add `role="button"`, `tabIndex={0}`, `onKeyDown` (for Enter/Space), and `focus-visible` styling to provide focus indicators for keyboard navigation.
