# Tri Oaks Ward Sacrament Program

Public page: https://trioaksward.github.io/program

## How it works

- **The data** comes from the "Tri Oaks Sacrament Hymns" Google Sheet: one tab per year, one row per Sunday.
  Fill in a Sunday's row and the page shows it within about 2 minutes. There's no publish step.
- **The page** (`index.html`) shows today's program on Sunday, otherwise the upcoming Sunday's.
  The arrows and the date picker (tap the date) go back to earlier programs. Future Sundays are never shown.
- **The connection** is a read-only Google Apps Script web app (the "ProgramAdmin" project). It returns only
  the program columns (A–R) and hymn links, never the Members tab.

## Sharing a specific week

Add `?date=YYYY-MM-DD`, for example https://trioaksward.github.io/program/?date=2026-02-08

## Making changes

| What changed | How it goes live | How long |
|---|---|---|
| A program in the Sheet | Nothing to do. Open pages re-check every 10 minutes and whenever the viewer returns to the tab. | up to ~2 min (server cache) |
| This page (`index.html`, images) | Commit and push to `main`. GitHub Pages rebuilds automatically. | ~1 min to build; browsers may keep the old page for up to 10 min |
| The Apps Script endpoint (ProgramAdmin `Code.js`) | `clasp push`, then `clasp create-version`, then `clasp update-deployment <deploymentId> -V <version>`. The URL stays the same. | immediate |

The endpoint rarely needs to change. It only does if the Sheet's columns change (for example, a new column is added).
