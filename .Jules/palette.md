## 2024-05-20 - Interactive Divs Block Keyboard Users
**Learning:** Interactive UI components built with `div` or `motion.div` tags inherently lack keyboard accessibility, completely blocking keyboard-only users from interacting with cards that open modals or trigger actions.
**Action:** When building interactive card components (like ProjectCard or ExperienceCard) that do not use semantic `<button>` or `<a>` tags, always implement `role="button"`, `tabIndex={0}`, an `onKeyDown` handler for Enter/Space, and visible focus styling (`focus-visible`).
