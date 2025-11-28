# Developer Portfolio

A modern, minimalistic, glassmorphic developer portfolio built with React, Vite, and Tailwind CSS.

## Features

- **Angular Navigation Bar** - Modern geometric design with cut corners
- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Fully Responsive** - Works on all screen sizes
- **Hamburger Menu** - Animated mobile navigation dropdown
- **Dark Theme** - Slate/cyan/violet color palette
- **Smooth Animations** - Subtle transitions and hover effects

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project folder
cd dev-portfolio

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

## Project Structure

```
dev-portfolio/
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
Edit the Tailwind classes to change the color scheme. The current palette uses:
- `slate-950` - Background
- `cyan-400/500` - Primary accent
- `violet-400/500` - Secondary accent

### Content
Update the data arrays in `DevPortfolio.jsx`:
- `navItems` - Navigation links
- `projects` - Portfolio projects
- `skills` - Technical skills

### Typography
Fonts are loaded from Google Fonts in `index.html`. Change to your preferred fonts.

## Tech Stack

- **React 18** - UI library
- **Vite 6** - Build tool
- **Tailwind CSS 3** - Styling
- **PostCSS** - CSS processing

## License

MIT
# thedevsite
