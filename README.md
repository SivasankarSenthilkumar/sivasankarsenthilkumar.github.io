# Sivasankar S — Personal Portfolio Website

A dark, bold, ultra-modern legal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks. No dependencies. Just drop it on GitHub Pages and go live.

---

## 🚀 Live Demo

Once deployed, your site will be live at:
```
https://<your-github-username>.github.io
```

---

## 📁 File Structure

```
portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling (dark theme, animations, layout)
├── script.js       # Custom cursor + scroll reveal logic
└── README.md       # This file
```

---

## 🛠️ How to Deploy on GitHub Pages

### Step 1 — Create a Repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it exactly: `<your-username>.github.io`
   - Example: if your username is `sivasankar`, name it `sivasankar.github.io`
4. Set visibility to **Public**
5. Click **Create repository**

### Step 2 — Upload Files
1. Inside the new repo, click **Add file → Upload files**
2. Upload all four files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Scroll down, add a commit message like `Initial portfolio upload`
4. Click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to your repo **Settings**
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select `main` branch and `/ (root)` folder
4. Click **Save**
5. Wait ~60 seconds, then visit `https://<your-username>.github.io`

---

## ✏️ Customisation Guide

### Update Contact Details
In `index.html`, find the contact section and update:
```html
<a href="mailto:indsiva2004@gmail.com">indsiva2004@gmail.com</a>
<a href="tel:+918610766367">+91 86107 66367</a>
<a href="https://www.linkedin.com/in/dsiva2004" target="_blank">LinkedIn</a>
```

### Change Accent Color
In `styles.css`, find `:root` and update `--gold`:
```css
:root {
  --gold: #f0a500; /* Change this to any color */
}
```

### Update Stats (Hero Section)
In `index.html`, find `.hero-stats` and edit the numbers:
```html
<div class="stat-num">8.69</div>
<div class="stat-label">CGPA / 10</div>
```

### Add a New Experience Entry
Copy an existing `.exp-card` block in `index.html` and update the content.

---

## ⚡ Features

- Pure black background with animated gold grid
- Glowing orb effects in the hero section
- Custom gold cursor with trailing ring
- Scroll-triggered reveal animations
- Fully responsive (mobile-friendly)
- Scanline overlay for cinematic depth
- No frameworks — loads instantly
- Single-file deployable (or split into 3 files)

---

## 📄 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | Education | Degrees, institutions, scores |
| 02 | Transactional | Latham & Watkins virtual experience |
| 03 | Internships | 7 internship experiences |
| 04 | Publications | 4 published papers |
| 05 | Affiliations | Memberships, moots, certifications |
| — | Contact | Email, phone, LinkedIn |

---

## 📬 Contact

**Sivasankar S**
- 📧 indsiva2004@gmail.com
- 📞 +91 86107 66367
- 🔗 [LinkedIn](https://www.linkedin.com/in/dsiva2004)

---

*BCom LLB (Hons.) · SASTRA Deemed University · Expected 2026*
