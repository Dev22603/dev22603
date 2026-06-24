## 2024-05-24 - Focus States and Div Interactivity
**Learning:** Using `div` and `motion.div` as interactive wrappers (e.g. `cursor-pointer`) completely bypasses keyboard accessibility without active intervention. This breaks navigation for keyboard-only users navigating the component cards (Project, Experience, Blog).
**Action:** Always add `role="button"`, `tabIndex={0}`, an `onKeyDown` handler (Space/Enter), and specific `focus-visible` styles to pseudo-interactive generic containers.
