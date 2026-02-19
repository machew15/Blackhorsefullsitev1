# Blackhorse Publishing - Static Website

**Version 2.0 Official** - Multi-page static site architecture

A fully static multi-page website for blackhorsepublishing.net with no build tools, frameworks, or dependencies.

## Structure

```
/
├── index.html                        # Main landing page
├── defense.html                       # Blackhorse Defense Systems
├── publishing.html                    # Blackhorse Publishing
├── white-paper.html                   # White Paper access
├── institutional-white-paper.html     # Institutional White Paper
├── styles.css                         # Shared global stylesheet
├── script.js                          # Shared JavaScript (dropdown functionality)
└── README.md                          # This file
```

## Features

- **No build step required** - Open any `.html` file directly in any browser
- **No dependencies** - Pure HTML, CSS, and vanilla JavaScript
- **Multi-page architecture** - Separate HTML files for each section
- **Shared navigation** - Consistent header and footer across all pages
- **Responsive design** - Works on all screen sizes
- **Static hosting ready** - Deploy to any static host (Cloudflare Pages, Netlify, GitHub Pages, etc.)

## Pages

1. **Home** (`index.html`) - Minimal landing page with wordmark
2. **Defense Systems** (`defense.html`) - Blackhorse Defense Systems
3. **Publishing** (`publishing.html`) - Blackhorse Publishing
4. **White Paper** (`white-paper.html`) - White Paper access
5. **Institutional** (`institutional-white-paper.html`) - Institutional White Paper

## Navigation

All pages share the same navigation structure:
- **HOME** - Links to index.html
- **PROJECTS** dropdown:
  - Blackhorse Defense Systems → defense.html
  - Blackhorse Publishing → publishing.html
  - White Paper → white-paper.html
  - Institutional White Paper → institutional-white-paper.html
- **INQUIRE** - mailto:contact@blackhorsepublishing.net

## Local Usage

Simply open any HTML file in a web browser:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or drag and drop any `.html` file into your browser.

## Deployment to Cloudflare Pages

1. Push this repository to GitHub
2. Connect your GitHub repo to Cloudflare Pages
3. Set build settings:
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
   - **Root directory**: `/`
4. Deploy

The site will be live at your Cloudflare Pages URL, and you can connect it to `blackhorsepublishing.net` via DNS settings.

## Deployment to Other Hosts

### Netlify
- Drag and drop the root folder into Netlify
- Or connect via Git with no build command

### GitHub Pages
```bash
git add .
git commit -m "Deploy static site"
git push origin main
```
Enable GitHub Pages in repository settings pointing to root.

### Any Web Server
Simply upload all files to your web server's public directory.

## Design System

- **Fonts**: 
  - Headings: Cormorant Garamond (serif)
  - Body: Inter (sans-serif)
- **Colors**:
  - Background: #000000 (black)
  - Text: #F5F5F5, #E5E5E5 (off-white/soft gray)
  - Accents: #A0A0A0, #909090 (steel gray)
- **Typography**: Minimal, institutional, refined
- **Spacing**: Generous whitespace, clean layout

## Contact

All inquiries: contact@blackhorsepublishing.net

## License

© 2026 Blackhorse. All rights reserved.