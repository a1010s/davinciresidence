# 🎁 How to Edit Special Offers (SUPER EASY!)

## Step-by-Step Guide for Non-Programmers

### What You Need
- A text editor (Notepad, TextEdit, or VS Code)
- 5 minutes of your time
- That's it! No programming knowledge needed!

---

## 📝 Quick Start

### 1. Open the File

Open `offers-config.js` in any text editor

### 2. Find Your Offer

Look for these sections:
```javascript
// ========== OFFER 1 (Featured Offer) ==========
// ========== OFFER 2 ==========
// ========== OFFER 3 ==========
```

### 3. Edit the Text

Change the text between the quotes `"like this"`:

```javascript
title_en: "Summer 2025 Early Bird",  // ← Change this!
discount: "15% OFF",                  // ← Change this!
validity_en: "Valid: January - March 2025",  // ← Change this!
```

### 4. Save & Deploy

```bash
git add .
git commit -m "Updated special offers"
git push
```

Wait 2 minutes → Your site is live! ✅

---

## 🎯 Real Examples

### Example 1: Change to Christmas Offer

**Find this:**
```javascript
offer1: {
    icon: "fa-sun",
    title_en: "Summer 2025 Early Bird",
    discount: "15% OFF",
```

**Change to:**
```javascript
offer1: {
    icon: "fa-snowflake",              // Winter icon
    title_en: "Christmas Special 2025",
    discount: "25% OFF",
```

### Example 2: Update Dates

**Find this:**
```javascript
validity_en: "Valid: January - March 2025",
```

**Change to:**
```javascript
validity_en: "Valid: December 1 - January 15",
```

### Example 3: Change Discount

**Find this:**
```javascript
discount: "15% OFF",
```

**Change to:**
```javascript
discount: "€100 OFF",  // or "20% DISCOUNT" or "SPECIAL PRICE"
```

---

## 🎨 Available Icons

Just change the `icon` field:

```javascript
icon: "fa-sun",           // ☀️ Summer
icon: "fa-snowflake",     // ❄️ Winter
icon: "fa-heart",         // ❤️ Valentine's
icon: "fa-gift",          // 🎁 Special gift
icon: "fa-umbrella-beach", // 🏖️ Beach
icon: "fa-calendar-week", // 📅 Weekly
icon: "fa-bolt",          // ⚡ Flash sale
icon: "fa-star",          // ⭐ Premium
```

---

## ✅ What to Edit (Checklist)

For each offer, you can change:

- [ ] **Icon** - Pick from the list above
- [ ] **Featured** - `true` (shows badge) or `false` (no badge)
- [ ] **Title** - Change for ALL languages (en, de, it, ro, fr)
- [ ] **Discount** - Change the % or amount
- [ ] **Description** - Change for ALL languages
- [ ] **Validity dates** - Change for ALL languages

---

## 🚨 Important Rules

### ✅ DO:
- Keep the quotes `" "` around text
- Keep the commas `,` at the end of lines
- Edit ALL language versions (en, de, it, ro, fr)
- Save the file after editing

### ❌ DON'T:
- Delete any `{` or `}` brackets
- Delete any commas `,`
- Leave text without quotes `" "`
- Forget to save before committing

---

## 📋 Full Example: Changing Offer 1

### Before:
```javascript
offer1: {
    featured: true,
    icon: "fa-sun",
    
    title_en: "Summer 2025 Early Bird",
    title_de: "Sommer 2025 Frühbucher",
    
    discount: "15% OFF",
    
    description_en: "Book your summer vacation now and save 15%!",
    description_de: "Buchen Sie jetzt und sparen Sie 15%!",
    
    validity_en: "Valid: January - March 2025",
    validity_de: "Gültig: Januar - März 2025",
},
```

### After (Easter Special):
```javascript
offer1: {
    featured: true,                    // Still featured
    icon: "fa-gift",                   // Changed icon
    
    title_en: "Easter Special 2025",   // Changed title
    title_de: "Oster-Special 2025",    // Changed title
    
    discount: "20% OFF",               // Changed discount
    
    description_en: "Book for Easter holidays and save 20%!",  // Changed
    description_de: "Buchen Sie für Osterferien und sparen Sie 20%!",
    
    validity_en: "Valid: March 15 - April 30",  // Changed dates
    validity_de: "Gültig: 15. März - 30. April",
},
```

---

## 🔄 How to Deploy Changes

### Option 1: Using Terminal (Recommended)

```bash
cd /Users/andrei.stegaru/Documents/DevOpsTestLab-Projekt/davinciresidence
git add offers-config.js
git commit -m "Updated special offers"
git push origin main
```

### Option 2: Using GitHub Desktop

1. Open GitHub Desktop
2. You'll see `offers-config.js` changed
3. Write commit message: "Updated offers"
4. Click "Commit to main"
5. Click "Push origin"

---

## ⏰ Timeline

| Action | Time |
|--------|------|
| Edit file | 5 minutes |
| Save file | 1 second |
| Git push | 10 seconds |
| Cloudflare deploy | 1-2 minutes |
| **Total** | **~8 minutes** |

---

## 🎓 Tips & Tricks

### Tip 1: Seasonal Offers
Update offers monthly to match seasons:
- **January-March**: "Spring Discount"
- **April-June**: "Summer Early Bird"
- **July-September**: "Last Summer Days"
- **October-December**: "Winter Special"

### Tip 2: Urgency Creates Action
Use words like:
- "Limited time"
- "Book now"
- "Only this month"
- "Last chance"

### Tip 3: Keep It Simple
- Short titles work best
- Clear discount (e.g., "20% OFF" not "Save 20 percent")
- Specific dates (e.g., "Valid: June 1-15" not "Valid soon")

---

## ❓ FAQ

### Q: What if I make a mistake?
**A:** Git saves everything! Just revert:
```bash
git checkout offers-config.js  # Undo local changes
```

### Q: How do I test before deploying?
**A:** Open `index.html` in your browser locally to preview

### Q: Can I add a 4th offer?
**A:** Not easily with this system. Stick to 3 offers (good marketing practice!)

### Q: Do I need to edit all languages?
**A:** Yes! Each language needs its own text for proper translation

### Q: Can I delete an offer?
**A:** You can make it invisible by setting `discount: ""` (empty)

---

## 🆘 Emergency Contact

If something breaks:
1. Don't panic! 😊
2. Revert changes: `git checkout offers-config.js`
3. Check the file has proper `{ }` brackets and `,` commas
4. Make sure quotes `" "` are closed

---

## 🎉 You're Ready!

Updating offers is now as easy as:
1. **Open** `offers-config.js`
2. **Edit** the text between quotes
3. **Save** the file
4. **Push** to GitHub
5. **Wait** 2 minutes
6. **Done!** ✅

**No programming needed! Anyone can do this!** 🚀

---

Made with ❤️ for easy management

