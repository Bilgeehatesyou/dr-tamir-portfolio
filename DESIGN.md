---
name: Dr. Tamir Doljinsuren
description: Bilingual professional profile set as a hospital wayfinding system.
colors:
  signage-ground: "#f2f4f3"
  paper-white: "#ffffff"
  sign-navy: "#0e1a24"
  slate-text: "#4a5863"
  muted-slate: "#6b7880"
  hairline-rule: "#d5dcda"
  panel-raised: "#1c2b36"
  panel-text-secondary: "#a9b7c0"
  zone-clinical-green: "#00866b"
  zone-management-blue: "#1f5fae"
  zone-research-violet: "#6e45a8"
  zone-venture-amber: "#a65a0d"
  zone-education-slate: "#4a5863"
  directory-profile-tab: "#33475a"
  ink-hover: "#26394a"
  hover-tint: "#e3e8e6"
  lobby-signal-green: "#3fd0a8"
  tile-blue-light: "#0d5590"
  tile-blue: "#0a3f78"
  tile-blue-deep: "#072a5a"
typography:
  display:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(44px, 5vw, 76px)"
    fontWeight: 750
    lineHeight: 0.98
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(30px, 3.2vw, 46px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(22px, 2.05vw, 30px)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.25
  title-small:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Onest, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: "Onest, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  lobby-role:
    fontFamily: "Onest, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(17px, 1.3vw, 19px)"
    fontWeight: 400
    lineHeight: 1.55
  exit-headline:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(40px, 5vw, 72px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  exit-lead:
    fontFamily: "Onest, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(19px, 1.6vw, 23px)"
    fontWeight: 400
    lineHeight: 1.55
  contact-value:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(22px, 2.6vw, 38px)"
    fontWeight: 600
    lineHeight: 1.2
  plate-name:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(19px, 1.5vw, 22px)"
    fontWeight: 700
    lineHeight: 1.2
  caption:
    fontFamily: "Onest, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  plate-small:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.35
    fontFeature: "\"tnum\" 1"
  plate-micro:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.35
    fontFeature: "\"tnum\" 1"
  label:
    fontFamily: "Geologica, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.35
    fontFeature: "\"tnum\" 1"
rounded:
  line: "2px"
  marker: "3px"
  plate: "4px"
  sm: "6px"
  md: "8px"
  sign: "10px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  rail: "clamp(48px, 5vw, 76px)"
  stop: "20px"
  section-break: "64px"
  zone: "clamp(72px, 10vw, 128px)"
components:
  button-ink:
    backgroundColor: "{colors.sign-navy}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
  button-ink-hover:
    backgroundColor: "#26394a"
  button-light:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.sign-navy}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
  room-plate:
    textColor: "{colors.sign-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.plate}"
    padding: "3px 9px"
  zone-square:
    backgroundColor: "{colors.zone-clinical-green}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.sm}"
    size: "clamp(30px, 2.6vw, 38px)"
  directory-board:
    backgroundColor: "{colors.sign-navy}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.sign}"
---

# Design System: Dr. Tamir Doljinsuren

## Overview

**Creative North Star: "The Bilingual Lobby Directory"**

The site reads like the signage of a modern hospital. A career is laid out as zones on a lobby directory, each with its own colour and pictogram, and a single painted guide line runs down the whole page through every zone, the way a floor line leads a visitor to a department. Signs carry both languages at once, as Mongolian hospitals do: the active language large, the other set beneath it. Running text shows only the active language.

The ground is a pale, slightly green signage grey with near-black navy sign panels. Colour is a wayfinding tool, never decoration: it appears on zone squares, directory tabs and the guide line, and nowhere else. The audience is senior and professional, so the system stays calm, legible and exact, with dates in fixed tabular plates like room numbers.

**Key Characteristics:**
- Pale signage ground, navy sign panels, four zone colours used only for wayfinding.
- Bilingual signs: active language primary, other language beneath at 0.42em (never below 14px).
- One continuous guide line through the page, coloured per zone.
- Years set as outlined room-number plates in a fixed column.
- Arrows are the only ornament.

## Colors

A restrained neutral system with four saturated zone colours that act as signage, not accent.

### Primary
- **Sign Navy** (sign-navy): the directory board, the contact panel, primary text, the ink button and the language switch. The voice of every sign.

### Secondary
- **Zone Clinical Green** (zone-clinical-green): clinical practice zone; also the text selection colour.
- **Zone Management Blue** (zone-management-blue): health management zone; focus ring colour on light grounds.
- **Zone Research Violet** (zone-research-violet): research and publications zone.
- **Zone Venture Amber** (zone-venture-amber): Tana Khorkhon Medical zone. Darkened so white text on it reaches 5:1.
- **Zone Education Slate** (zone-education-slate): education and awards zone.

### Neutral
- **Signage Ground** (signage-ground): page background.
- **Paper White** (paper-white): the venture zone band, door name plate, light button.
- **Slate Text** (slate-text): secondary text on light grounds.
- **Muted Slate** (muted-slate): tertiary labels such as counts.
- **Hairline Rule** (hairline-rule): 1px dividers between stops and list rows.
- **Panel Raised** (panel-raised): dividers and hover fills inside navy panels.
- **Panel Text Secondary** (panel-text-secondary): secondary text on navy only (about 8:1 there; never use on white).
- **Directory Profile Tab** (directory-profile-tab): the profile row's tab on the board, lifted off the navy so it stays visible.

### Named Rules
**The Wayfinding-Only Rule.** Zone colours appear only on zone squares, directory tabs and the guide line. Headings, body text, bullets and borders stay neutral.

**The White-On-Zone Rule.** Every zone colour must hold white text at 4.5:1 or better, because the board fills a whole row with it on hover.

## Typography

**Display Font:** Geologica (with Helvetica Neue, Arial)
**Body Font:** Onest (with Helvetica Neue, Arial)

**Character:** Geologica is a sturdy signage grotesk for everything that acts as a sign: names, zone headings, leads, entry titles, plates, buttons. Onest is a quiet, readable text face for paragraphs and source lines. Both are self-hosted variable fonts with cyrillic-ext, which covers Mongolian Ө ө Ү ү.

### Hierarchy
- **Display** (750, clamp 44–76px, 0.98): the name in the lobby only. On phones in Mongolian it shrinks to min(46px, 9.4vw) so "Должинсүрэнгийн" fits at 320px.
- **Headline** (700, clamp 30–46px, 1.05): zone sign headings; the contact sign goes to clamp 40–72px.
- **Lead** (500, clamp 22–30px, 1.3): the one fact that opens each zone, max 30em.
- **Title** (600, 23px, 1.25): post or role names in a zone's route.
- **Title small** (500, 18px, 1.4): training, education and award entries.
- **Body** (400, 17px, 1.55): running text; long paragraphs 18px/1.65 at max 64ch.
- **Label** (600, 13–14px, tabular figures): room plates and year plates.

### Named Rules
**The Two-Language Sign Rule.** A sign shows both languages; text shows one. Secondary sign text is 0.42em of the sign, never below 14px (13px on the board).

**The Room Number Rule.** Every date is set in tabular figures inside an outlined plate, in a fixed-width column (116px) so years scan straight down.

## Layout

A 1440px max container with a fluid gutter (clamp 16–56px). Zones use a left rail (clamp 48–76px, 50px on phones) that carries the guide line and zone squares, then a two-column grid: a sticky sign on the left (4fr) and the zone body on the right (8fr). The lobby is 7fr copy and directory against a 5fr portrait.

The guide line sits at one x position for the whole page: gutter + 8px + half a zone square. It passes through the centre of every directory tab and every zone square, and leaves the bottom of the directory board into the first zone.

Breakpoints: at 1080px zones stack to one column and signs stop sticking; at 900px the lobby stacks (name, role, portrait, board); at 640px the bar compacts, entries stack their year above the title, and the board shows years under each label.

Spacing rhythm: zones get clamp 72–128px top and bottom; 64px above a sub-heading, 8–12px below it; route stops 20px (14px compact).

## Elevation & Depth

Mostly flat. Depth only marks real signage objects lifting off the wall.

### Shadow Vocabulary
- **Board lift** (`box-shadow: 0 22px 44px -26px rgba(14, 26, 36, .6)`): the directory board only.
- **Plate lift** (`box-shadow: 0 10px 30px -12px rgba(14, 26, 36, .45)`): the name plate over the portrait.
- **Ground halo** (`box-shadow: 0 0 0 6px <ground>`): zone squares sitting on the guide line, cut out of it by a ring of the ground colour.

### Named Rules
**The Mounted-Sign Rule.** Only physical signs (the board, the door plate) cast shadows. Lists, entries and sections never do.

## Shapes

Enamel-sign corners: 10px for large signs and the portrait, 8px for the door plate, 6px for buttons, the language switch and zone squares, 4px for room plates. Dividers are 1px hairlines; plates use a 1.5px outline. The guide line is 4px with rounded ends.

## Components

### Buttons
- **Shape:** gently rounded (6px).
- **Ink:** navy fill, white Geologica 600 15px, 10px 18px; hover lightens to #26394a. Used for Contact in the top bar (icon only on phones, 44×40).
- **Light:** white fill, navy text, on the navy contact panel.
- **Line:** 2px translucent white outline on navy; hover solid white outline.
- **Focus:** 3px management-blue outline, 3px offset; white on navy panels.

### Language Switch
- A 2px navy-outlined segmented sign, EN | МН. The pressed side is filled navy with white text. Switching is instant, with a 0.28s fade on the page body.

### Navigation
- A sticky 64px bar on the ground with a hairline bottom rule: monogram plate, the "You are here" strip (zone square plus zone name), language switch, Contact.

### Directory Board (signature)
- A navy sign with a header ("Directory / Лавлах", "You are here: lobby"). Each row is a full-height zone-colour tab with a white pictogram, the bilingual label, a year plate and a circled arrow.
- On hover or focus the zone colour slides from the tab across the whole row (clip-path, 0.45s ease-out), the secondary label and year plate turn white, and the arrow circle fills white with a zone-coloured arrow.

### Zone Menu
- Under each zone heading, the sign column lists the zone's sub-sections with a count plate (e.g. Positions 4, International training 6). The open one fills with the zone colour and white text; the others are quiet slate rows that tint on hover.
- A 3px branch with a junction dot runs from the guide line to the open row and slides to the new row (0.45s ease-out) when another is chosen. The right panel swaps with a short rise-and-fade.
- Built as ARIA tabs with arrow, Home and End keys. Below 1080px the menu becomes a horizontal row of outlined pills and the branch is hidden. Without JavaScript or in print, every panel shows in sequence with its own sub-heading.

### Equipment Tile
- Brochure device photos sit on a deep-blue display tile (radial #0d5590 to #072a5a, 10px corners, 4:3), their own blue edges faded into the tile with a radial mask. Model in Geologica 18px, kind in 15px semibold, description in 15px slate.

### Zone Sign and Route
- The zone square rides the guide line and sticks with the heading on desktop. Below the lead, entries are ruled stops: room plate, title, source line in slate.

### Contact Panel
- A full-bleed navy exit sign. Contact lines are large Geologica values; links grow an underline on hover, while plain values (Facebook, location) are set lighter so they don't read as links.

## Do's and Don'ts

### Do:
- **Do** put every new section on the guide line with its own zone square and bilingual heading.
- **Do** write all copy twice, English and Mongolian, as sibling spans.
- **Do** set every date in a room plate with tabular figures.
- **Do** check new zone colours for 4.5:1 white text before using them on the board.

### Don't:
- **Don't** colour headings, bullets or borders with zone colours; colour is for wayfinding only.
- **Don't** add check marks, thick top bars or other ornament; arrows are the only ornament.
- **Don't** add eyebrow labels above headings or numbered section markers.
- **Don't** use panel-text-secondary (#a9b7c0) on a light ground.
- **Don't** drop below 14px for secondary sign text.
