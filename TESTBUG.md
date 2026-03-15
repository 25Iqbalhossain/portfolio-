# Test & Bug Review

Summary:
No critical defects found. The issues below have been fixed in the current codebase and are retained for regression testing.

Findings:
1. Medium: Anchor jumps can land under the fixed navbar because sections have no scroll offset. Add `scroll-margin-top` to `section` so the top content isn’t hidden. Reference: `src/index.css:112`.
2. Low: The contact form uses `setTimeout` without cleanup, which can trigger state updates after unmount. Use a ref to store the timer and clear it in a `useEffect` cleanup. Reference: `src/components/Contact.jsx:11`.
3. Low: Form labels aren’t associated with inputs (`htmlFor`/`id` missing), which reduces accessibility and click-to-focus behavior. Reference: `src/components/Contact.jsx:121`, `src/components/Contact.jsx:126`, `src/components/Contact.jsx:132`, `src/components/Contact.jsx:137`.
4. Low: Projects list uses array index as React keys, which can cause incorrect DOM reuse if items are reordered or filtered. Prefer a stable key like `p.title`. Reference: `src/components/Projects.jsx:128`, `src/components/Projects.jsx:144`.

Test Gaps:
No automated tests were found or referenced for UI behavior (navigation, form interactions, anchor offsets).
