# ⚡ QUICKSTART - Deploy in 5 Minutes

**Blackhorse Publishing v2.0 Official**

---

## 🎯 What You Need

Only **7 files** - that's it!

```
✅ index.html
✅ defense.html
✅ publishing.html
✅ white-paper.html
✅ institutional-white-paper.html
✅ styles.css
✅ script.js
```

**Total size:** ~48 KB  
**Build step:** None  
**Dependencies:** None

---

## 🚀 Deploy to Cloudflare Pages (2 minutes)

### Option A: Drag & Drop
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Click "Upload assets"
3. Drag the 7 files above
4. Done! ✨

### Option B: GitHub (Auto-Deploy)
1. Push files to GitHub
2. Connect repo to Cloudflare Pages
3. Build settings: **Leave everything empty**
4. Deploy
5. Done! ✨

**Custom domain:** Add `blackhorsepublishing.net` in Cloudflare dashboard

---

## 📦 Deploy to Netlify (1 minute)

1. Go to [netlify.com](https://www.netlify.com)
2. Drag entire project folder
3. Done! ✨

**Custom domain:** Settings → Domain management

---

## 🐙 Deploy to GitHub Pages (3 minutes)

```bash
git init
git add .
git commit -m "v2.0 official"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

Then: Settings → Pages → Deploy from branch: `main` → `/root`

---

## 🧪 Test Locally First

### Just open in browser:
```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

### Or run a local server:
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

---

## ✅ Verify It Works

After deployment, test these:

1. ✅ Open homepage → Should see "Blackhorse ♛"
2. ✅ Click PROJECTS → Dropdown appears
3. ✅ Click "Blackhorse Defense Systems" → Navigates to defense page
4. ✅ Click "BACK TO BLACKHORSE" → Returns home
5. ✅ Click INQUIRE → Opens email client
6. ✅ Go to white-paper.html → Click REQUEST ACCESS → Email opens with subject line

**If all 6 work → You're live! 🎉**

---

## 🔗 Your Live URLs

```
https://your-site.pages.dev/                         # Homepage
https://your-site.pages.dev/defense.html             # Defense
https://your-site.pages.dev/publishing.html          # Publishing
https://your-site.pages.dev/white-paper.html         # White Paper
https://your-site.pages.dev/institutional-white-paper.html  # Institutional
```

Replace `your-site.pages.dev` with your actual domain.

---

## 🆘 Something Wrong?

### Pages not loading?
→ Make sure all 7 files are in root directory (not in a subfolder)

### Styles broken?
→ Check that `styles.css` is in the same folder as HTML files

### Links not working?
→ Verify file names match exactly (case-sensitive)

### Email not opening?
→ Check that you have a default email client configured

---

## 📧 Need Help?

**Email:** contact@blackhorsepublishing.net

---

## 🎯 Next Steps

After deployment:

1. ✅ Connect custom domain (`blackhorsepublishing.net`)
2. ✅ Enable HTTPS (automatic on Cloudflare/Netlify)
3. ✅ Test on mobile devices
4. ✅ Share with team
5. ✅ Done!

---

## 📚 Want More Details?

- **Full deployment guide:** See `DEPLOYMENT.md`
- **File structure:** See `FILES.md`
- **What's new:** See `RELEASE-NOTES-v2.0.md`
- **Project overview:** See `README.md`

---

**🎉 That's it! Your site is live in under 5 minutes.**

**Version:** 2.0 Official  
**Last Updated:** February 19, 2026
