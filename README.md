# Tri Oaks Ward Sacrament Program

Public page: https://trioaksward.github.io/program

## How it works

- **The data** is the "Tri Oaks Sacrament Hymns" Google Sheet: one tab per year, one row per Sunday.
  Fill in a Sunday's row and the page shows it within about 2 minutes (the server caches for 1 minute; open pages
  re-check every minute on Sundays). There's no publish step.
- **The page** (`index.html`) shows today's program on Sunday, otherwise the upcoming Sunday's.
  Tap the date to pick an earlier program (the last 10 years are offered). Future Sundays are never shown.
  Pages left open check for changes every minute on Sundays (every 10 minutes other days) and whenever the
  viewer returns to them.
- **The connection** is a read-only Google Apps Script web app (the "ProgramAdmin" project, owned by the
  ward account). It returns only the program columns and hymn links, never the Members tab.

## Filling in a Sunday (the year tabs)

Columns are found by their names, so the names must stay exactly as they are (they're protected).

| Column | Notes |
|---|---|
| Date … Closing Hymn | As always. Hymns are picked from the dropdown. |
| **Program Details** | Optional. When filled in, it replaces the speakers on the page (see below). |
| **Speaker 1–8** | In speaking order, youth or adult. Everyone is shown as "Speaker". |
| Intermediate Hymn Position | "After Speaker N" places the intermediate hymn / musical number. |
| Conducting, Presiding, Opening/Closing Prayer | As always. |

Blank required fields show **TBA** for upcoming Sundays and **—** for past ones.
Regular Sundays always show at least 2 speakers.

### Special Program

| Value | What the page shows |
|---|---|
| General Conference, Stake Conference, Temple Dedication | A short notice that sacrament service isn't held (plus Program Details, if any) |
| Fast Sunday | "Bearing of Testimonies" instead of speakers |
| Musical Testimony Meeting | "Hymns of Testimony" instead of speakers |
| Primary Program, Christmas Program, Easter Program | A heading and short description instead of speakers |
| Ward Conference, Mother's Day Program, Under Stake Direction, anything else | A normal program with speakers, labeled with the value |

Special images (640×800, cropped 4:5) replace the default picture for General and Stake Conference (the Christus),
Temple Dedication, Primary, Christmas, Easter and Mother's Day programs. They're set in `IMAGES` / `TYPES` in `index.html`.

### Program Details (one cell; press Ctrl/Cmd + Enter for a new line)

```
## Primary Program
Opening Song: #1005
Narrator: Sister Jane Doe
The children will sing between each section.
```

- `## ` starts a heading.
- `Label: name` shows a label with the name under it.
- `#123` links the hymn and fills in its title.
- Any other line is shown as text. A blank line adds space.

## Automatic upkeep (ProgramAdmin Apps Script project, owned by the ward account)

- **November 1** (retried December 1): next year's tab is created by copying the current year. It gets every
  Sunday, Presiding pre-filled, the Table renamed, the same protections, and the tab from 2 years back hidden.
  An email goes to TriOaksWardBulletin@gmail.com. If the dates don't show like "January 4, 2026", the email
  explains the two-click fix (Format > Number > Custom date and time); scripts can't set that format.
- **January 1**: last year's tab is locked (whole-tab protection, copied from the earlier years' settings).
- **Every Saturday**: a check emails TriOaksWardBulletin@gmail.com if a needed column is missing or
  tomorrow has no row.
- **Members / Hymns** "Last Spoke", "Last Prayed", "Last Sung", "Times Sung" read from the hidden **History**
  tab, which lists every speaker, prayer and hymn for the last 4 years by column name.

## Members, texting & hymns (clerk tools in the Sheet)

- **Adding a move-in:** open the Sheet on a computer, then **Members → Add member…** (the menu only shows for people
  allowed to edit the Members tab). Enter title, name, optional preferred name, birth date, phone and household
  ("Lastname, Head & Spouse"). It's inserted alphabetically, with Tri Oaks and Active checked and the formulas
  filled in. Uncheck **Active** later for members who don't usually attend. The Sheets phone app has no custom menus.
- **Asking someone to pray:** in the **Prayers Report** (people who prayed longest ago are listed first; "never" means
  no prayer on record), tap **Opening** or **Closing**, then open the link. Messages opens with a draft:
  adults by title ("Hi, Sister Taylor :)"), ages 13–17 with their own phone by first name, and children under 13
  (or anyone without a phone) through a parent ("Would Macie be willing…"). It says "tomorrow" on Saturday,
  "today" on Sunday, otherwise "this Sunday". Add who you are the first time you text someone.
  The links go through `sms.html` on this site, which only hands the draft to Messages; the number and text
  stay on the phone.
- **New hymns:** when the church releases new hymns, use **Hymns → Add new hymn…** (computer; shows for people who can
  edit the Hymns tab). Enter the number and title; the church link fills in automatically
  (`…/study/music/hymns-for-home-and-church/<title>?lang=eng`). Tap **Open** to check it, then **Add hymn**. It's added
  in number order and appears in the hymn dropdowns and on this site.
- **Access:** to let a new clerk use these, add them in **Data → Protected sheets and ranges → Members** (and **Hymns**).

## Sharing a specific week

Add `?date=YYYY-MM-DD`, for example https://trioaksward.github.io/program/?date=2026-02-08

## Making changes

| What changed | How it goes live | How long |
|---|---|---|
| A program in the Sheet | Nothing to do. | up to ~2 min on Sundays |
| This page (`index.html`, images) | Commit and push to `main`. GitHub Pages rebuilds automatically. | ~1 min; browsers may keep the old page for up to 10 min |
| The Apps Script code (`Code.js`, `Maintenance.js`) | `clasp push`, `clasp create-version`, then `clasp update-deployment <deploymentId> -V <version>`. The URL stays the same. | immediate |
