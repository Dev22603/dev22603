## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.

## 2026-06-28 - Keyboard Accessibility for Div-Based Cards
**Learning:** Using non-interactive elements like `div` or `motion.div` as clickable components (e.g., Project and Experience cards) breaks keyboard navigation unless explicitly configured. Users navigating via keyboard cannot focus or trigger these elements.
**Action:** When creating interactive cards out of `div` elements, always add `role="button"`, `tabIndex={0}`, `focus-visible` styling, and an `onKeyDown` handler to support Space and Enter keys (preventing default scrolling behavior on Space). If the card contains nested interactive elements like links, ensure the keydown handler ignores events originating from them to prevent double-triggering.
