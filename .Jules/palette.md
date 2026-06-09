## 2024-05-19 - Missing ARIA Labels on Modal Close Buttons
**Learning:** Icon-only close buttons (like the 'X' in ProjectModal and ExperienceModal) were missing ARIA labels, making them inaccessible to screen readers.
**Action:** Always verify that icon-only buttons include descriptive `aria-label` attributes to ensure keyboard and screen reader accessibility.
## 2024-05-20 - Adding 3D elements for visual interest without impacting accessibility
**Learning:** Integrating Three.js canvases into existing accessible components requires ensuring the 3D element doesn't interfere with the DOM's accessibility tree or standard interactions, and that we must handle window resizing and responsive layouts correctly when dealing with webgl canvases.
**Action:** When adding 3D background elements or interactive 3D components, verify the canvas is styled correctly (e.g., using pointer-events: none for backgrounds) and that accessible text elements remain in front.
