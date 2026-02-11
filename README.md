# Kate Blake's Personal Website

My personal portfolio site, where I show off some of my work and spend too much time trying to optimise fonts.

## Tech Stack

- **Astro** - Lightweight & easy to use
- **TypeScript** - Just a little here and there
- **CSS** - Plain and simple

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- Custom font optimisation with critical CSS subsets ([this post was my bible](https://www.jonoalderson.com/performance/youre-loading-fonts-wrong/))
- Accessible navigation and content
- Playful animations and SVG filters (another rabbit hole of note)
- Interactive Lilly photo toggle (the most important feature)
- (in progress) Fully responsive design that works everywhere

## Todos/nice to haves

- Change Favicon
- Implement OpenGraph tags for better sharing on social media
- Link to view/download my CV
- Implement a colour picker to let users choose their own theme colour
- Add a dropdown for colour blind users to switch to a more accessible palette
- Add more "whimsical" things (as Joshua W. Comeau calls it)
- Section on the readme to credit where I got my icons/SVGs/techniques from

## Project Structure

```
├── public/
│   └── fonts/          # Optimized font subsets
├── src/
│   ├── components/     # Astro components
│   ├── icons/          # SVG icons
│   ├── images/         # Project screenshots & Lilly pics
│   ├── pages/          # Site pages
│   ├── scripts/        # Client-side JS
│   └── styles/         # Global CSS
└── astro.config.mjs    # Astro configuration
```

## Design Credits

Initial design by the talented [Amber Jones](https://portfolio-amber-jones-projects.vercel.app/)!

## Deployment

Deployed on Netlify because it's easy and works great with Astro.

## License

MIT License. That being said, please don't just entirely copy this!

---

_*Here lies the "built with too much caffeine, not enough sleep" comment that everybody has for some reason*_
