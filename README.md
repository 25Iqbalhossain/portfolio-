# Md. Iqbal Hossain — Portfolio

A clean, editorial-style React portfolio inspired by the minimal, content-first aesthetic of jeremy.fast.ai.

## Design Philosophy

- **Warm parchment tones** (not dark/dark) — professional and readable
- **Instrument Serif** for headings — editorial elegance
- **Geist Mono** for labels, tags, dates — technical precision
- **Geist Sans** for body — clean and modern
- Content-first layout inspired by jeremy.fast.ai — substance over spectacle

## Tech Stack

- React 18 + Vite
- Pure CSS (no Tailwind, no component libraries)
- Zero external dependencies beyond React

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Adding your profile photo

Place your photo at `public/static/profile.jpg` (or update the path in `Hero.jsx`).

## Project Structure

```
src/
  App.jsx              # Root component
  index.css            # Global design system (CSS variables, typography)
  components/
    Navbar.jsx         # Fixed navigation
    Hero.jsx           # Landing / intro section
    About.jsx          # Bio, stats, contact info
    Experience.jsx     # Work history + education
    Skills.jsx         # Technical skills grouped by category
    Projects.jsx       # Project showcase (featured + grid)
    Publications.jsx   # Research papers
    Contact.jsx        # Contact form + info
    Footer.jsx         # Footer
```

## Customisation

All content is defined as plain JS arrays/objects at the top of each component file — no external CMS needed. Just edit the data and the UI updates.
git action 
## Deployment

Works with any static host: Vercel, Netlify, GitHub Pages, or your own server.

Added gitaction for auto deployment
