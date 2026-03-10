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

- Implement OpenGraph tags for better sharing on social media
- Link to view/download my CV
- Implement a colour picker to let users choose their own theme colour
- Add a dropdown for colour blind users to switch to a more accessible palette
- Add more "whimsical" things (as Joshua W. Comeau calls it)

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

## Other credits/sources

- Font optimisation techniques from [Jono Alderson](https://www.jonoalderson.com/performance/youre-loading-fonts-wrong/)
- Circle scribble animation on links from [Mariusz Dabrowski](https://codepen.io/MarioD/pen/KmWQog)
- "Fuzzy" SVG filters from [John D. Jameson](https://codepen.io/johndjameson/pen/xbGvXop)
- Project cards glowy borders from [Elpeeda](https://codepen.io/Mahe76/pen/PoyWvXX)
- Project tags/technologies expanding borders from [LukyVJ](https://codepen.io/LukyVj/pen/LENVMBj)

### Icons/shapes

- Sun and moon icons from [Vjacheslav Trushkin](https://github.com/cyberalien/line-md)
- Big sparkle and heart from [BRIX Templates](https://www.figma.com/community/file/1110620368778902916/50-hand-drawn-doodles-brix-templates)
- Underlines from [Kate Birukova](https://www.figma.com/community/file/1071185599375231112/hand-drawn-shapes)
- Down arrow and project link star and arrow from [Abhijit Chirde](https://www.figma.com/community/file/1115239183719894864/doodle-arrows)
- Diamond from [Valery Belaziorau](https://www.figma.com/community/file/1241125633606791793/crispy-doodles-120-free-and-fresh-doodles-for-your-mockups)
- Lilly arrow from [Sanel Selimovic](https://www.figma.com/community/file/1114930608793798350/hand-drawn-vector-shapes)
- Smiley face from [Mary Amato](https://www.figma.com/community/file/1163036056014082231/free-notion-style-scribbles)
- LinkedIn and GitHub logo icons from [Maria Ko](https://www.figma.com/community/file/1209522599861224380/social-media-companies-doodle-icons)
- Mail icon from [Streamline](https://www.streamlinehq.com/icons/flex-solid-free)

## Deployment

Deployed on Netlify because it's easy and works great with Astro.

## License

MIT License. That being said, please don't just entirely copy this!

---

_*Here lies the "built with too much caffeine, not enough sleep" comment that everybody has for some reason.*_
