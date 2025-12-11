# Jordan Runyon - Developer Portfolio

A futuristic, Tron-inspired developer portfolio with glassmorphic design, built with React, Vite, and Tailwind CSS.

🌐 **Live Site:** [thedevsite.netlify.app](https://thedevsite.netlify.app) *(update with your actual Netlify URL)*

## Features

- **Boot Screen Animation** - Terminal-style startup sequence
- **Tron Legacy Theme** - Neon green (#00ff41) color scheme
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Angular Design** - Geometric cut-corner styling throughout
- **Animated Background** - Morphing blobs, floating panels, and light streaks
- **Monospace Typography** - Code-styled font throughout
- **Fully Responsive** - Works on all screen sizes
- **Smooth Animations** - Typewriter effects, transitions, and hover states

## Sections

- **Home** - Hero section with typewriter animation
- **About** - Education info (Penn State IST) and current status
- **Experience** - Timeline layout ready for future roles
- **Projects** - DeckForge, Top Notch Construction, Neo Tracker
- **Skills** - Frontend, Backend, DevOps, and Interpersonal skills
- **Contact** - Contact form with angular styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jjr6639/thedevsite.git

# Navigate to project folder
cd thedevsite

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## Deployment

This site is deployed on **Netlify** with continuous deployment from GitHub.

Any push to the `main` branch automatically triggers a new build.

### Netlify Build Settings
- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Project Structure

```
thedevsite/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── index.css
    └── DevPortfolio.jsx
```

## Customization

### Colors
The Tron theme uses:
- `#00ff41` - Neon Green (primary)
- `#00cc33` - Neon Green Dark (secondary)
- `#000000` - Pure Black (background)

### Content
Update the data arrays in `DevPortfolio.jsx`:
- `navItems` - Navigation links
- `projects` - Portfolio projects
- `skillsData` - Technical and interpersonal skills
- `bootSequence` - Boot screen messages

## Tech Stack

- **React 18** - UI library
- **Vite 6** - Build tool
- **Tailwind CSS 3** - Styling
- **PostCSS** - CSS processing

## Author

**Jordan Runyon**  
Penn State University - Information Sciences and Technology  
Design and Development Track

## License

MIT
