# Installations — React exercise

A small hands-on task, **10–15 minutes**. Styling does not matter. Nothing here is a trick.

## Getting started

```bash
npm install
npm run dev
```

Everything you need is in `src/App.jsx`. The data is already there.

If you would rather not install anything, open the repository directly in
[StackBlitz](https://stackblitz.com) or [CodeSandbox](https://codesandbox.io) —
both can load a GitHub URL and give you a running dev server in the browser.

## What to build

You are shown a list of software installations. Build a small screen for browsing them.

1. **Render the list** — show each installation's machine name, version and status.
2. **Search** — a text box that filters by machine name as you type. Case-insensitive.
3. **Status filter** — let the user narrow to All / Online / Offline / Error.
4. **Count** — show something like *"Showing 3 of 7 installations"*.
5. **Empty state** — a sensible message when nothing matches.

Search and the status filter should work **together**, not one at a time.

### If you finish early

Clicking a row selects it, and its details appear in a panel next to the list.

## Notes

- Plain React is fine. No router, no state library, no component kit — but use them
  if you genuinely prefer to.
- `src/index.css` has a few optional helper classes (`.row`, `.status`, `.controls`,
  `.count`). Use them, ignore them, or delete the file. Your call.
- We are interested in how you think about the problem, so please talk through what
  you are doing as you go, and ask us anything.
