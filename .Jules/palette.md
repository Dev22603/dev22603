## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2024-05-25 - Interactive Div Keyboard Accessibility
**Learning:** Framer Motion's `<motion.div>` elements used as interactive cards (like Project and Experience cards) aren't keyboard accessible by default, even if they have an `onClick` handler. This prevents keyboard and screen reader users from navigating or interacting with them.
**Action:** Always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (for "Enter" and " " keys), and visual focus styles (e.g., `focus-visible:outline-none focus-visible:ring-2`) to interactive `div` or `motion.div` components to ensure they behave like semantic buttons.
