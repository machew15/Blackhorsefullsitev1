# Deployment Guide - Blackhorse Publishing v2.0

## Quick Start

This is a **static site** with **zero build requirements**. You can deploy it anywhere that serves HTML files.

---

## 🚀 Cloudflare Pages (Recommended)

### Method 1: Git Integration
1. Push all files to a GitHub repository
2. Log in to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   ```
   Build command: (leave empty)
   Build output directory: /
   Root directory: /
   ```
6. Click "Save and Deploy"
7. Connect custom domain: `blackhorsepublishing.net`

### Method 2: Direct Upload
1. Log in to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project" → "Upload assets"
3. Drag and drop all files:
   - index.html
   - defense.html
   - publishing.html
   - white-paper.html
   - institutional-white-paper.html
   - styles.css
   - script.js
4. Click "Deploy site"
5. Connect custom domain in settings

---

## 📦 Netlify

### Method 1: Drag & Drop
1. Go to [Netlify](https://www.netlify.com/)
2. Drag the entire project folder into the deploy zone
3. Site is live immediately
4. Add custom domain in "Domain settings"

### Method 2: Git Integration
1. Push to GitHub
2. Click "New site from Git"
3. Select repository
4. Build settings:
   ```
   Build command: (leave empty)
   Publish directory: /
   ```
5. Click "Deploy site"

---

## 🐙 GitHub Pages

1. Push all files to GitHub repository
2. Go to repository Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: `main` or `master`
5. Folder: `/ (root)`
6. Click "Save"
7. Site will be live at `yourusername.github.io/repo-name`
8. Add custom domain in GitHub Pages settings

---

## 🌐 Any Web Server

### Via FTP/SFTP
1. Connect to your web server using FTP client (FileZilla, Cyberduck, etc.)
2. Navigate to public directory (usually `public_html/` or `www/`)
3. Upload all files:
   ```
   index.html
   defense.html
   publishing.html
   white-paper.html
   institutional-white-paper.html
   styles.css
   script.js
   ```
4. Ensure file permissions are readable (644 for files)

### Via cPanel
1. Log in to cPanel
2. Open "File Manager"
3. Navigate to `public_html/`
4. Click "Upload"
5. Select all files and upload
6. Site is immediately live

---

## 🔗 Custom Domain Setup

### DNS Configuration (for blackhorsepublishing.net)

#### If using Cloudflare Pages:
1. Add domain in Cloudflare Pages dashboard
2. Update nameservers to Cloudflare nameservers
3. DNS records will be automatically configured

#### If using other hosting:
Add an A record or CNAME:
```
Type: A
Name: @
Value: [Your host's IP address]

Type: CNAME  
Name: www
Value: [Your host's domain]
```

---

## ✅ Pre-Deployment Checklist

Before deploying, verify:

- [ ] All 5 HTML files are present
- [ ] styles.css exists and is referenced correctly
- [ ] script.js exists and is referenced correctly
- [ ] All navigation links work (test locally first)
- [ ] Email links point to contact@blackhorsepublishing.net
- [ ] Fonts are loading from Google Fonts CDN
- [ ] No broken links or missing assets

---

## 🧪 Testing Locally

Before deployment, test locally:

### Option 1: Simple File Opening
```bash
# macOS
open index.html

# Linux  
xdg-open index.html

# Windows
start index.html
```

### Option 2: Local Server (Optional)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have npx)
npx serve

# Then visit: http://localhost:8000
```

---

## 🔄 Updating the Site

### Cloudflare Pages (Git)
```bash
git add .
git commit -m "Update content"
git push origin main
```
Site automatically rebuilds and deploys.

### Cloudflare Pages (Direct Upload)
1. Make changes to local files
2. Go to Cloudflare Pages dashboard
3. Click "Create new deployment"
4. Upload updated files

### Netlify
```bash
git add .
git commit -m "Update content"  
git push origin main
```
Auto-deploys via Git integration.

### FTP/cPanel
1. Edit local files
2. Re-upload changed files via FTP
3. Changes are live immediately

---

## 📊 Site Structure After Deployment

Your site will be accessible at:
```
https://blackhorsepublishing.net/
https://blackhorsepublishing.net/defense.html
https://blackhorsepublishing.net/publishing.html
https://blackhorsepublishing.net/white-paper.html
https://blackhorsepublishing.net/institutional-white-paper.html
```

---

## 🆘 Troubleshooting

### Links not working
- Ensure all HTML files are in root directory
- Check that file names match exactly (case-sensitive on some servers)

### Styles not loading
- Verify `styles.css` is in root directory
- Check browser console for 404 errors

### Fonts not loading
- Ensure internet connection (fonts load from Google Fonts CDN)
- Check browser console for blocked resources

### Email links not working
- Verify `mailto:` links are formatted correctly
- Check that user has email client configured

---

## 📧 Support

For deployment issues: contact@blackhorsepublishing.net

---

**Version:** 2.0 Official  
**Last Updated:** February 19, 2026
