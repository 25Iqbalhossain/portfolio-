# Portfolio Design & Code Structure

এই ডকুমেন্টে বর্তমান portfolio app-এর design theme, UI rules, component structure, এবং future maintenance notes রাখা হলো।

## Overview

এই project একটি single-page React portfolio, Vite দিয়ে build করা। Design direction হলো content-first editorial portfolio: minimal layout, strong typography, thin rules, restrained cards, technical mono labels, এবং AI/ML professional identity-focused content।

Primary user journey:

1. Hero identity
2. About and credentials
3. Work history and education
4. Skills
5. Projects
6. Kaggle/open-source profile
7. Publications
8. Contact

## Tech Stack

- React 18
- Vite 5
- Plain CSS
- No Tailwind
- No UI component library
- No routing library
- Static assets served from `public/`

Main entry flow:

```text
index.html
src/main.jsx
src/App.jsx
src/components/*
src/index.css
```

## Current Theme Direction

The visual language is editorial, professional, and technical.

- Serif display headings create an academic/research feel.
- Mono labels, dates, tags, and metadata create a technical/documentation feel.
- Sans body copy keeps reading clean.
- Thin borders and section dividers are used more than heavy shadows.
- Cards are mostly flat, rectangular, and content-focused.
- Accent colors communicate hierarchy and status.
- The layout avoids decorative marketing sections and keeps the portfolio direct.

## Color System

Global colors are defined in [src/index.css](./src/index.css) with CSS variables on `:root` and `:root[data-theme='dark']`.

### Light Theme

```css
--bg: #F4F1EB;
--bg-alt: #EDE9E0;
--bg-card: #FFFDF8;
--ink: #1A1612;
--ink-2: #4A4540;
--ink-3: #8A8480;
--accent: #C1440E;
--accent-2: #1A4D8F;
--accent-3: #2D7A4F;
--rule: #D4CFC5;
```

Light mode reads as warm parchment/editorial. The main accent is rust red, supported by blue and green.

### Dark Theme

```css
--bg: #0B1118;
--bg-alt: #121A24;
--bg-card: #0E1721;
--ink: #E7EEF6;
--ink-2: #B2BECC;
--ink-3: #7D8A99;
--accent: #20BEFF;
--accent-2: #7CF2A3;
--accent-3: #FFB84D;
--rule: #1E2A36;
```

Dark mode shifts into a cooler AI/tech look with cyan, green, and amber accents. It also enables aurora radial backgrounds and a subtle grid.

## Typography

Fonts are imported in [src/index.css](./src/index.css):

- `Instrument Serif`: headings and brand moments
- `Geist`: body, navigation, forms, most UI text
- `Geist Mono`: labels, tags, dates, metadata, buttons

Current global rules:

- `html` base font size: `18px`
- Body line height: `1.65`
- `h1`, `h2`, `h3`: serif, light weight, tight line-height
- Section labels: mono, uppercase, spaced letters, accent color
- Tags/buttons: mono, uppercase, compact

Note: `Navbar.jsx` also imports and uses `Inter` locally for the nav identity and links.

## Layout System

Global layout helpers:

```css
.container {
  max-width: var(--max-w);      /* 980px */
  margin: 0 auto;
  padding: 0 2rem;
}

.container--wide {
  max-width: var(--max-w-wide); /* 1200px */
  margin: 0 auto;
  padding: 0 2rem;
}
```

Section rhythm:

- Each section uses `padding: 5rem 0`
- Sections are separated by `border-top: 1px solid var(--rule)`
- Hero removes top border
- `scroll-margin-top` uses `--nav-offset` to account for fixed navbar

Responsive behavior:

- Under `640px`, section padding becomes `3.5rem 0`
- Containers use `1.25rem` side padding
- Under `900px`, side geometric background patterns are hidden
- Under `700px`, nav offset is reduced

## Background & Decorative System

The app root uses two fixed side geometric SVG patterns through `.app::before` and `.app::after`.

- Light mode: rust technical circuit-like line art
- Dark mode: cyan technical line art
- Hidden on tablet/mobile under `900px`

Dark mode also enables:

- Radial aurora background gradients
- Subtle grid background variables

## Shared UI Primitives

Shared classes live in [src/index.css](./src/index.css).

### Tags

```css
.tag
.tag--red
.tag--blue
.tag--green
.tag--ink
```

Usage:

- Project tags
- Publication status
- Experience current badge

### Buttons

```css
.btn
.btn--ghost
```

Usage:

- Hero CTAs
- About contact button
- Projects GitHub CTA
- Kaggle CTA
- Contact submit button

Primary button uses `--ink` background and `--bg` text. Hover switches to `--accent`.

### Section Labels

```css
.section-label
```

Used at the start of each section to create consistent page rhythm.

## Theme State

Theme logic lives in [src/App.jsx](./src/App.jsx).

Behavior:

- Reads `localStorage.theme`
- Accepts only `dark` or `light`
- Falls back to `prefers-color-scheme: dark`
- Defaults to light if no preference is found
- Writes current theme to `document.documentElement` as `data-theme`
- Persists theme back to localStorage

The Navbar receives:

```jsx
<Navbar
  theme={theme}
  onToggleTheme={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
/>
```

## Code Structure

```text
src/
  main.jsx
  App.jsx
  index.css
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Skills.jsx
    Projects.jsx
    Kaggle.jsx
    Publications.jsx
    Contact.jsx
    Footer.jsx
```

### `main.jsx`

Creates the React root and renders `<App />` inside `StrictMode`.

### `App.jsx`

Root composition file.

Responsibilities:

- Theme initialization
- Theme persistence
- Page section order
- Imports global CSS
- Renders navbar, main content, and footer

Current section order:

```jsx
<Hero />
<About />
<Experience />
<Skills />
<Projects />
<Kaggle />
<Publications />
<Contact />
```

### `Navbar.jsx`

Fixed top navigation.

Responsibilities:

- Desktop anchor links
- Mobile hamburger menu
- Theme toggle
- Scroll shadow state
- Identity block with avatar

Important notes:

- Uses internal `links` array for section navigation
- Uses `/profile1.png`
- Uses local SVG icons for sun/moon
- Uses local inline `<style>` block
- Mobile links collapse under `700px`

### `Hero.jsx`

Landing/identity section.

Responsibilities:

- Full-height hero
- Typewriter role animation
- Profile photo frame
- Credential badges
- Primary CTAs
- Social/contact links

Important notes:

- Uses `/profile.png`
- Typewriter roles are stored in `roles`
- Contains image fallback initials if the photo fails
- Uses inline component CSS

### `About.jsx`

Bio and profile details.

Responsibilities:

- Professional summary
- Stats row
- Sidebar details
- Contact/link rows

Layout:

- Two-column grid: content + sidebar
- Collapses to one column under `700px`

### `Experience.jsx`

Work history and education.

Responsibilities:

- Professional experience data
- Education/training data
- Reusable `ExpItem` and `EduItem` renderers

Data is stored in the local `experience` object.

Note: Some item styles are inline instead of class-based.

### `Skills.jsx`

Grouped technical skills.

Responsibilities:

- Renders categorized skill groups
- Uses mono chips
- Uses category accent colors

Data is stored in `skillGroups`.

### `Projects.jsx`

Project showcase.

Responsibilities:

- Project data array
- Featured project filtering
- Featured grid
- Remaining project grid
- GitHub links and tags

Data fields:

```js
{
  title,
  period,
  desc,
  tags,
  link,
  featured
}
```

### `Kaggle.jsx`

Kaggle profile section.

Responsibilities:

- Static Kaggle stats
- Custom SVG badge visuals
- Tier color palettes
- Kaggle profile CTA

Important notes:

- This is the most visually custom component.
- Badge SVGs are component-local.
- Tier palettes are stored in `TIER`.

### `Publications.jsx`

Research/publication list.

Responsibilities:

- Publication status
- Year
- Title
- Venue
- Description
- Disclaimer for under-review papers

Data is stored in local `pubs` array.

### `Contact.jsx`

Contact information and local form UI.

Responsibilities:

- Controlled form state
- Temporary success message
- Contact details
- Online presence links

Important note:

- The form currently does not send to an API.
- Submit only resets the fields and shows a temporary success message.

### `Footer.jsx`

Simple footer.

Responsibilities:

- Brand line
- Social links
- Current year

## Content Model

There is no CMS. Most content is plain JavaScript data inside each component.

Recommended pattern when adding new content:

- Add/update the local array or object at the top of the component.
- Keep render logic generic when possible.
- Avoid hardcoding repeated list items directly in JSX.
- Reuse `.tag`, `.btn`, `.section-label`, `.container`, and `.container--wide`.

## Styling Pattern

Current styling is mixed:

1. Global design tokens and shared primitives in `src/index.css`
2. Component-local `<style>` blocks inside each component
3. Some inline style objects for one-off layout/typography

This is workable for a small portfolio, but future larger changes should preferably move repeated styles into either:

- `src/index.css`, if shared across components
- Component-specific CSS files, if the component becomes large

Avoid adding another styling system unless the project scope grows.

## Assets

Static files live in `public/`.

Current notable assets:

```text
public/profile.png
public/profile1.png
public/favicon.png
public/favicon.svg
public/Md_Iqbal_Hossain_CV.pdf
```

Usage:

- Hero photo: `/profile.png`
- Navbar avatar: `/profile1.png`

## Responsive Design Notes

Current breakpoints:

- `900px`: hide fixed side decorations
- `700px`: mobile nav and several layout collapses
- `640px`: tighter global section/container spacing
- `600px`: publication/experience item grids collapse

General responsive rule:

- Desktop uses two-column or grid layouts.
- Mobile collapses into single-column content.
- Typography uses `clamp()` for hero and section headings.

## Accessibility Notes

Already present:

- Navbar has `role="banner"`
- Theme toggle has `aria-label` and `aria-pressed`
- Hamburger has `aria-label` and `aria-expanded`
- Images have alt text
- Contact form labels are connected to inputs

Future improvement candidates:

- Close mobile menu on Escape
- Add focus-visible styles for keyboard navigation
- Add real form submission/error states
- Reduce motion support with `prefers-reduced-motion`

## Known Code Quality Notes

- Several files contain mojibake/encoding artifacts, for example broken dash, icon, and copyright characters.
- Some component comments also show corrupted characters.
- `README.md` mentions `public/static/profile.jpg`, but current code uses `/profile.png` and `/profile1.png`.
- `Experience.jsx` defines `.exp-item-grid` media CSS, but rendered items do not use that class.
- `Contact.jsx` form success message is UI-only; no backend or email service is connected.
- Many styles are embedded in component `<style>` tags, so design changes can require editing multiple files.

## Design Rules For Future Changes

Keep:

- Editorial, content-first layout
- Serif headings
- Mono labels/tags/dates
- Thin rules and restrained surfaces
- Warm light mode and cool technical dark mode
- CSS variable-based theming
- Static data arrays for small content sections

Avoid:

- Heavy gradients in light mode
- Large marketing-style hero cards
- Overly rounded cards or pill-heavy UI
- Adding Tailwind or a UI library without clear need
- Mixing many new font families
- Hardcoded colors when a CSS variable already exists

When adding a new section:

1. Add the component in `src/components/`.
2. Add it to `App.jsx` in the desired page order.
3. Add a nav item in `Navbar.jsx` if it needs anchor navigation.
4. Give the section a unique `id`.
5. Start with `.section-label`, `h2`, and a `.container` or `.container--wide`.
6. Use existing tags/buttons/cards before creating new styles.

