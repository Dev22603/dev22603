## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
## 2024-07-05 - Adding Keyboard Accessibility to Interactive Divs
**Learning:** When converting `div` or `motion.div` elements into interactive components, mouse interactions (`onClick`) are not sufficient for accessibility. Keyboard users rely on focus and keydown events.
**Action:** Always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (to simulate click on Enter/Space, ignoring inner tags like `a` or `button`), and `focus-visible` styles to ensure full keyboard navigation support.
