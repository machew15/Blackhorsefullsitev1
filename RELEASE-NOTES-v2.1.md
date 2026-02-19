# 🎯 RELEASE NOTES - Version 2.1 Official

**Blackhorse Publishing Website**  
**Release Date:** February 19, 2026  
**Version:** 2.1 Official

---

## 🚀 What's New in Version 2.1

### Minor Feature Update
This is a **feature addition** that enhances the Publishing page with external Substack integration.

---

## ✨ New Features

### 🔗 Substack Integration
- **"Visit Substack" button** added to publishing.html
- Links to: `https://substack.com/@vicarofdrip`
- Positioned next to "Contact Publishing" button in CTA section
- Opens in new tab with security attributes (`target="_blank" rel="noopener noreferrer"`)
- Features external link icon (arrow pointing out)
- Maintains consistent design language with btn-secondary style

---

## 📝 Changes Summary

### Files Modified
1. **publishing.html**
   - Added Substack button in CTA section
   - Wrapped both buttons in `.home-buttons` container for proper layout
   
2. **src/app/App.tsx**
   - Updated React version to match HTML changes
   - Added same Substack button to Publishing page component

### Design Updates
- CTA section now displays two buttons side-by-side
- Consistent button styling maintained
- External link icon added to Substack button for visual clarity

---

## 🔄 Migration from v2.0

### What Changed
- ✅ Added: Substack button on publishing page
- ✅ Maintained: All v2.0 functionality
- ✅ No breaking changes

### Upgrade Steps
If you already deployed v2.0:
1. Replace `publishing.html` with updated version
2. Replace `src/app/App.tsx` with updated version (if using React)
3. No other changes needed
4. Redeploy

---

## 📊 Technical Details

### Button Implementation
```html
<a href="https://substack.com/@vicarofdrip" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="btn btn-secondary">
  Visit Substack
  <svg><!-- External link icon --></svg>
</a>
```

### Security Attributes
- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer"` - Prevents tabnabbing security vulnerability

---

## 🎯 Publishing Page CTA Layout

**Before v2.1:**
```
[Contact Publishing]
```

**After v2.1:**
```
[Contact Publishing]  [Visit Substack →]
```

Both buttons are equal width and aligned horizontally.

---

## ✅ Testing Checklist

Verified functionality:

- [x] Substack button appears on publishing page
- [x] Button links to correct URL (https://substack.com/@vicarofdrip)
- [x] Opens in new tab
- [x] External link icon displays correctly
- [x] Button styling matches design system
- [x] Both buttons align properly side-by-side
- [x] Responsive layout works on mobile
- [x] No console errors
- [x] React version matches HTML version

---

## 🌍 Deployment

### Same as v2.0
This update requires no changes to your deployment process:

1. Upload updated `publishing.html`
2. Done!

All other files remain unchanged from v2.0.

---

## 📦 File Inventory

**Production files (same 7 files as v2.0):**
1. ✅ index.html (unchanged)
2. ✅ defense.html (unchanged)
3. ✅ **publishing.html** ← **Updated**
4. ✅ white-paper.html (unchanged)
5. ✅ institutional-white-paper.html (unchanged)
6. ✅ styles.css (unchanged)
7. ✅ script.js (unchanged)

**React version:**
- ✅ **src/app/App.tsx** ← **Updated**

---

## 📈 Version Comparison

| Feature | v2.0 | v2.1 |
|---------|------|------|
| Multi-page architecture | ✅ | ✅ |
| 5 HTML pages | ✅ | ✅ |
| Navigation dropdown | ✅ | ✅ |
| Email integration | ✅ | ✅ |
| Smart subject lines | ✅ | ✅ |
| **Substack button** | ❌ | ✅ |

---

## 🔒 Security

- ✅ External links use `rel="noopener noreferrer"`
- ✅ No new security vulnerabilities introduced
- ✅ Same security posture as v2.0

---

## 🎨 Design Consistency

- ✅ Matches existing button styles
- ✅ Maintains color palette (black, off-white, steel gray)
- ✅ Uses same typography (Cormorant Garamond + Inter)
- ✅ Consistent iconography (SVG external link icon)
- ✅ Responsive on all screen sizes

---

## 📧 Contact Integration

### Publishing Page Now Has:
1. **Contact Publishing** → `mailto:contact@blackhorsepublishing.net`
2. **Visit Substack** → `https://substack.com/@vicarofdrip` (new tab)

All other pages remain unchanged.

---

## 📚 Documentation Updates

Updated documentation:
- ✅ VERSION.md - Added v2.1 entry
- ✅ RELEASE-NOTES-v2.1.md - This file
- ✅ README.md - Updated version number
- ✅ INDEX.md - Updated version reference
- ✅ MANIFEST.md - Updated version reference

---

## 🎯 Future Roadmap

Potential additions for v2.2+:
- Additional social/platform integrations
- Newsletter signup form
- RSS feed integration
- Archive page for research

---

## 📞 Support

For technical issues or questions:  
**contact@blackhorsepublishing.net**

---

## 🏆 Credits

**Designed & Developed by:** Blackhorse  
**Typography:** Cormorant Garamond (Google Fonts), Inter (Google Fonts)  
**Icons:** Custom SVG  
**Hosting:** Cloudflare Pages  
**Domain:** blackhorsepublishing.net  
**Substack:** @vicarofdrip

---

## 📜 License

© 2026 Blackhorse. All rights reserved.

---

**🎉 Version 2.1 Official - Substack Integration Complete!**
