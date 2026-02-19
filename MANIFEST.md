# 📦 Complete File Manifest - Blackhorse Publishing v2.1

**Release:** Version 2.1 Official  
**Date:** February 19, 2026  
**Total Files:** 13 (7 required for deployment + 6 documentation)

---

## ✅ PRODUCTION FILES (Required for Deployment)

### HTML Pages (5 files)
| File | Size | Purpose |
|------|------|---------|
| `index.html` | ~3 KB | Main landing page with wordmark |
| `defense.html` | ~6 KB | Blackhorse Defense Systems page |
| `publishing.html` | ~7 KB | Blackhorse Publishing page |
| `white-paper.html` | ~8 KB | White Paper catalog and access |
| `institutional-white-paper.html` | ~8 KB | Institutional services page |

### Assets (2 files)
| File | Size | Purpose |
|------|------|---------|
| `styles.css` | ~15 KB | Global stylesheet (shared by all pages) |
| `script.js` | ~1 KB | Navigation dropdown functionality |

**Total Production Size:** ~48 KB

---

## 📚 DOCUMENTATION FILES (Optional)

| File | Purpose |
|------|---------|
| `README.md` | Project overview and features |
| `VERSION.md` | Complete version history |
| `DEPLOYMENT.md` | Step-by-step deployment guide for all platforms |
| `FILES.md` | File dependencies and structure |
| `QUICKSTART.md` | 5-minute deployment guide |
| `RELEASE-NOTES-v2.0.md` | Release notes for v2.0 |

---

## 🔧 DEVELOPMENT FILES (Not needed for deployment)

### React Version (Figma Make Preview Only)
```
/src/app/App.tsx                 # React component version of the site
```

### Build Configuration (Not used in production)
```
package.json                     # npm configuration (no build step needed)
vite.config.ts                   # Vite config (for dev environment only)
postcss.config.mjs               # PostCSS config (for dev environment only)
```

### Figma Make Components
```
/src/app/components/figma/       # Figma-specific React components
/src/app/components/ui/          # UI component library (not used in static version)
/src/styles/                     # React styles (not used in static version)
```

---

## 📊 Dependency Tree

### index.html
```
index.html
├── styles.css (shared)
├── script.js (shared)
├── Google Fonts CDN
│   ├── Cormorant Garamond
│   └── Inter
└── Links to:
    ├── defense.html
    ├── publishing.html
    ├── white-paper.html
    └── institutional-white-paper.html
```

### defense.html, publishing.html, white-paper.html, institutional-white-paper.html
```
[page].html
├── styles.css (shared)
├── script.js (shared)
├── Google Fonts CDN
│   ├── Cormorant Garamond
│   └── Inter
└── Links to:
    └── index.html (+ all other pages via dropdown)
```

### styles.css
```
styles.css
└── Google Fonts (loaded in HTML)
    ├── Cormorant Garamond (400, 500, 600)
    └── Inter (300, 400, 500)
```

### script.js
```
script.js
└── No dependencies (vanilla JavaScript)
```

---

## 🌐 External Dependencies

### Google Fonts CDN (required)
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

**That's it!** No npm packages, no build tools, no other external dependencies.

---

## 📁 Directory Structure

```
blackhorse-publishing/
│
├── 🌐 STATIC SITE (Deploy these 7 files)
│   ├── index.html                        ✅ Required
│   ├── defense.html                      ✅ Required
│   ├── publishing.html                   ✅ Required
│   ├── white-paper.html                  ✅ Required
│   ├── institutional-white-paper.html    ✅ Required
│   ├── styles.css                        ✅ Required
│   └── script.js                         ✅ Required
│
├── 📚 DOCUMENTATION (Optional)
│   ├── README.md                         📖 Project overview
│   ├── VERSION.md                        📖 Version history
│   ├── DEPLOYMENT.md                     📖 Deployment guide
│   ├── FILES.md                          📖 File structure
│   ├── QUICKSTART.md                     📖 Quick deploy guide
│   ├── RELEASE-NOTES-v2.0.md            📖 Release notes
│   ├── MANIFEST.md                       📖 This file
│   └── ATTRIBUTIONS.md                   📖 Credits
│
├── 🔧 DEVELOPMENT (Not for deployment)
│   ├── package.json                      ⚙️ npm config
│   ├── vite.config.ts                    ⚙️ Vite config
│   ├── postcss.config.mjs                ⚙️ PostCSS config
│   └── /src/                             ⚙️ React version
│       ├── /app/
│       │   ├── App.tsx                   React component
│       │   └── /components/              React components
│       └── /styles/                      React styles
│
└── 📋 OTHER
    └── /guidelines/                      Internal guidelines
        └── Guidelines.md
```

---

## ✅ What to Upload

### For Production Deployment
Upload **only these 7 files** to your web server root:
```
index.html
defense.html
publishing.html
white-paper.html
institutional-white-paper.html
styles.css
script.js
```

### Optional (for reference)
```
README.md    (helpful for documentation)
```

### Do NOT Upload
```
❌ /src/ folder
❌ /node_modules/
❌ package.json
❌ vite.config.ts
❌ postcss.config.mjs
❌ Any .md files (unless you want them public)
```

---

## 🔍 File Checksums (for verification)

Use these to verify file integrity after upload:

| File | Lines | Characters |
|------|-------|------------|
| index.html | ~100 | ~3,000 |
| defense.html | ~200 | ~6,000 |
| publishing.html | ~220 | ~7,000 |
| white-paper.html | ~240 | ~8,000 |
| institutional-white-paper.html | ~240 | ~8,000 |
| styles.css | ~500 | ~15,000 |
| script.js | ~50 | ~1,000 |

---

## 📧 Contact Information

### Site Email
All contact forms and INQUIRE buttons route to:  
**contact@blackhorsepublishing.net**

### Technical Support
For deployment issues or questions:  
**contact@blackhorsepublishing.net**

---

## 🏷️ Version Information

**Current Version:** 2.0 Official  
**Previous Version:** 1.0  
**Release Date:** February 19, 2026  
**Next Planned Version:** 2.1 (TBD)

---

## 📜 License

© 2026 Blackhorse. All rights reserved.

---

**End of Manifest**