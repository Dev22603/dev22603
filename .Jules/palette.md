## 2024-05-21 - [Keyboard & Screen Reader A11y]
**Learning:** Found that custom `div` elements used as interactive cards lack native keyboard support and need `role="button"`, `tabIndex={0}`, keyboard event handlers, and focus indicators. Also, icon-only modal close buttons need `aria-label` for screen reader clarity.
**Action:** Always ensure interactive custom elements replicate button functionality and add `aria-label` to icon-only interactive elements.
