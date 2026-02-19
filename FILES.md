# File Manifest - Blackhorse Publishing v2.0

## 📄 Required Files for Deployment

Upload these files to your web server root directory:

### ✅ HTML Pages (5 files)
```
index.html                        # Homepage with wordmark
defense.html                      # Blackhorse Defense Systems
publishing.html                   # Blackhorse Publishing
white-paper.html                  # White Paper catalog
institutional-white-paper.html    # Institutional services
```

### ✅ Assets (2 files)
```
styles.css                        # Global stylesheet (shared by all pages)
script.js                         # Navigation dropdown functionality
```

---

## 📂 Complete File Structure

```
blackhorse-publishing/
│
├── 🌐 STATIC SITE FILES (required for deployment)
│   ├── index.html
│   ├── defense.html
│   ├── publishing.html
│   ├── white-paper.html
│   ├── institutional-white-paper.html
│   ├── styles.css
│   └── script.js
│
├── 📱 REACT VERSION (for Figma Make preview only)
│   └── src/
│       └── app/
│           └── App.tsx
│
└── 📚 DOCUMENTATION
    ├── README.md              # Project overview
    ├── VERSION.md             # Version history
    ├── DEPLOYMENT.md          # Deployment guide
    └── FILES.md               # This file
```

---

## 🎯 What to Upload for Production

### For Static Hosting (Cloudflare, Netlify, GitHub Pages, etc.)
**Upload only these 7 files:**
- ✅ index.html
- ✅ defense.html
- ✅ publishing.html
- ✅ white-paper.html
- ✅ institutional-white-paper.html
- ✅ styles.css
- ✅ script.js

### Optional (but recommended)
- 📄 README.md (for documentation)

### NOT needed for deployment
- ❌ /src/ folder (React version - only for Figma Make)
- ❌ package.json (no build step needed)
- ❌ node_modules/ (no dependencies)
- ❌ VERSION.md (internal documentation)
- ❌ DEPLOYMENT.md (internal guide)
- ❌ FILES.md (this file)

---

## 📊 File Dependencies

### index.html
- Imports: `styles.css`, `script.js`
- Links to: defense.html, publishing.html, white-paper.html, institutional-white-paper.html

### defense.html
- Imports: `styles.css`, `script.js`
- Links to: index.html (and other pages via dropdown)

### publishing.html
- Imports: `styles.css`, `script.js`
- Links to: index.html (and other pages via dropdown)

### white-paper.html
- Imports: `styles.css`, `script.js`
- Links to: index.html (and other pages via dropdown)

### institutional-white-paper.html
- Imports: `styles.css`, `script.js`
- Links to: index.html (and other pages via dropdown)

### styles.css
- Imports: Google Fonts (Cormorant Garamond, Inter) via CDN
- Used by: All 5 HTML pages

### script.js
- Dependencies: None (vanilla JavaScript)
- Used by: All 5 HTML pages

---

## 📝 File Sizes (Approximate)

```
index.html                     ~3 KB
defense.html                   ~6 KB
publishing.html                ~7 KB
white-paper.html               ~8 KB
institutional-white-paper.html ~8 KB
styles.css                     ~15 KB
script.js                      ~1 KB
────────────────────────────────────
TOTAL                          ~48 KB
```

**Extremely lightweight!** The entire site is under 50KB.

---

## 🔗 External Dependencies

### Google Fonts CDN (loaded in HTML)
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

**No other external dependencies.**

---

## ✅ Deployment Verification Checklist

After uploading files, verify:

- [ ] All 5 HTML files are in root directory
- [ ] styles.css is in root directory
- [ ] script.js is in root directory
- [ ] All files are readable (permissions: 644)
- [ ] Open index.html in browser - should load with proper styling
- [ ] Click "PROJECTS" dropdown - should show all 4 pages
- [ ] Navigate to each page - should load correctly
- [ ] Click "BACK TO BLACKHORSE" - should return to homepage
- [ ] Click "INQUIRE" - should open email client
- [ ] Click "REQUEST ACCESS" on white-paper.html - should open email with subject line

---

## 📧 Contact

For questions about file structure: contact@blackhorsepublishing.net

---

**Version:** 2.0 Official  
**Total Files Required:** 7  
**Total Size:** ~48 KB  
**Build Step:** None  
**Dependencies:** None (except Google Fonts CDN)
