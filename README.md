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
