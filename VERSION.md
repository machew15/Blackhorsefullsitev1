# Blackhorse Publishing - Version History

## Version 2.1 Official
**Release Date:** February 19, 2026

### 🎯 Updates

#### Substack Integration
- Added "Visit Substack" button on publishing.html page
- Links to https://substack.com/@vicarofdrip
- Positioned next to "Contact Publishing" CTA
- Opens in new tab with security attributes
- Consistent design with existing button styles

### 📁 File Changes
- Updated: publishing.html
- Updated: /src/app/App.tsx (React version)

---

## Version 2.0 Official
**Release Date:** February 19, 2026

### 🎯 Major Updates

#### Multi-Page Static Architecture
- Converted from single-page React app to multi-page static site
- Created 5 separate HTML pages with shared navigation and design system
- Zero build dependencies - pure HTML, CSS, and vanilla JavaScript

#### New Pages Added
1. **defense.html** - Blackhorse Defense Systems landing page
2. **publishing.html** - Blackhorse Publishing landing page  
3. **white-paper.html** - White Paper access and catalog
4. **institutional-white-paper.html** - Institutional services page

#### Interactive Features
- **Projects Dropdown** - Working navigation menu across all pages
- **Email Integration** - All "INQUIRE" and "REQUEST ACCESS" buttons link to contact@blackhorsepublishing.net
- **Smart Subject Lines** - White Paper access requests include paper title in email subject
- **Back Navigation** - All subpages include "BACK TO BLACKHORSE" links

#### Design Consistency
- Unified navigation header across all 5 pages
- Shared footer with contact information
- Single global stylesheet (styles.css)
- Consistent typography (Cormorant Garamond + Inter)
- Maintained black/off-white/steel gray color palette

### 📁 File Structure
```
/
├── index.html                        # Main landing page
├── defense.html                       # Defense Systems page
├── publishing.html                    # Publishing page
├── white-paper.html                   # White Paper catalog
├── institutional-white-paper.html     # Institutional services
├── styles.css                         # Shared global stylesheet
├── script.js                          # Shared JavaScript
├── /src/app/App.tsx                  # React version (for Figma Make)
├── README.md                          # Documentation
└── VERSION.md                         # This file
```

### 🚀 Deployment Ready
- **Cloudflare Pages** - No build configuration needed
- **Netlify** - Drag and drop deployment
- **GitHub Pages** - Direct hosting from repository
- **Any Static Host** - Upload files to web root

### 🔗 URL Structure
- `blackhorsepublishing.net` → index.html
- `blackhorsepublishing.net/defense.html`
- `blackhorsepublishing.net/publishing.html`
- `blackhorsepublishing.net/white-paper.html`
- `blackhorsepublishing.net/institutional-white-paper.html`

### ✨ Key Features
- ✅ No build step required
- ✅ No npm dependencies
- ✅ No React/Vite/Node.js needed for deployment
- ✅ Works in any browser by opening HTML files
- ✅ Fully responsive design
- ✅ SEO-friendly multi-page structure
- ✅ Fast load times (static files only)

### 📧 Contact Integration
All contact points route to: **contact@blackhorsepublishing.net**

---

## Version 1.0
**Release Date:** February 2026

### Initial Features
- Single-page React application
- Homepage with wordmark and descriptor
- Basic navigation structure
- Initial design system (black, off-white, serif/sans-serif typography)

---

**Current Version:** 2.1 Official  
**Maintained by:** Blackhorse  
**Last Updated:** February 19, 2026