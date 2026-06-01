# mindworks counselling — website

Static HTML/CSS/JS site for **mindworkscounselling.com**  
Stack: plain HTML · CSS · JavaScript — no build step required.

---

## Quick start (local preview)

```bash
# Option 1 — VS Code Live Server (recommended)
# Install the "Live Server" extension → right-click index.html → Open with Live Server

# Option 2 — Python
python3 -m http.server 8080
# then open http://localhost:8080

# Option 3 — Node
npx serve .
```

---

## File structure

```
/
├── index.html                  ← Homepage
├── css/
│   ├── styles.css              ← Shared design system (all pages)
│   └── therapist-profile.css  ← Therapist profile pages only
├── js/
│   ├── content.js              ← ✏️  ALL EDITABLE CONTENT lives here
│   ├── assessments.js          ← BDI-II & BAI questionnaire logic
│   ├── main.js                 ← Homepage interactions & rendering
│   └── therapist-profile.js   ← FAQ, reveal, mobile nav (profiles)
├── therapists/
│   ├── dimple-kishnani.html
│   ├── alina-tambuwala.html
│   ├── armeet-narang.html
│   └── nandini-keshwani.html
├── blog/
│   ├── index.html              ← Blog listing (auto-renders from content.js)
│   ├── how-to-find-a-therapist.html   ← Sample post
│   └── _post-template.html    ← Copy this to create a new post
└── images/                     ← Add photos here (create folder if needed)
    └── therapists/
        ├── dimple.jpg          ← (placeholder — add real photos)
        ├── alina.jpg
        ├── armeet.jpg
        └── nandini.jpg
```

---

## ✏️ How to edit content

**Almost all text, links, and data lives in one file: `js/content.js`.**  
Open it and you'll find clearly labelled sections for every part of the site.

### Common edits

| What you want to change | Where |
|---|---|
| Booking / Calendly link | `CONTENT.site.bookingLink` and each `therapist.bookingLink` |
| Phone / WhatsApp | `CONTENT.site.phone` and `CONTENT.site.whatsappLink` |
| Nav links | `CONTENT.nav.links` |
| Hero headline / body copy | `CONTENT.hero` |
| Approach cards | `CONTENT.approach.cards` |
| Therapist name, price, bio | `CONTENT.therapists.list[n]` |
| Assessment tool text | `CONTENT.assessments` |
| Footer links | `CONTENT.footer.columns` |
| Blog posts list | `CONTENT.blog.posts` |

### Adding a therapist photo

1. Add the photo to `images/therapists/yourname.jpg`
2. In `content.js`, find the therapist object and set `photo: "images/therapists/yourname.jpg"`
3. In their profile HTML, replace the placeholder `<div>` with `<img src="../images/yourname.jpg" alt="Name">`

---

## 📝 Writing a new blog post

1. **Copy the template:**
   ```bash
   cp blog/_post-template.html blog/your-post-slug.html
   ```
2. **Edit the 5 marked blocks** inside the file (✏️ comments guide you through each one)
3. **Add to content.js** — open `js/content.js` and add an entry to `CONTENT.blog.posts`:
   ```js
   {
     slug: "your-post-slug",        // must match the filename (without .html)
     title: "Your post title",
     excerpt: "One-sentence summary shown in the blog listing.",
     author: "Therapist Name",       // optional
     date: "1 July 2025",
     readTime: "5 min read",
     tag: "Mental health",           // used for filtering
     featured: false,
   }
   ```
4. The post will appear automatically on `blog/index.html`

---

## 🔬 Assessments (BDI-II & BAI)

The questionnaires are fully self-contained in `js/assessments.js`. They:
- Present all 21 questions with a progress bar
- Score results using validated cutoffs
- Show a score ring + interpretation
- Let the user **download** a plain-text report or **share** their score via Web Share API (with clipboard fallback)
- Prompt them to book a discovery call

The disclaimer displayed in the modal is editable in `CONTENT.assessments.disclaimer` in `content.js`.

---

## 🚀 Deploying to Netlify via GitHub

### First time setup

1. **Create a GitHub repo** (public or private):
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mindworks-website.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
   - Select your GitHub repo
   - Build command: *(leave blank)*
   - Publish directory: `.` (root)
   - Click Deploy

3. **Custom domain:**  
   In Netlify → Domain settings → Add custom domain → `mindworkscounselling.com`  
   Update your DNS records as Netlify instructs (usually an A record + CNAME).

### Updating the site

```bash
git add .
git commit -m "describe what you changed"
git push
```
Netlify auto-deploys on every push — live in ~30 seconds.

---

## 👀 GitHub Pages preview (before Netlify)

```bash
# Push to a branch called gh-pages, or enable Pages from main in repo settings
# Settings → Pages → Source: Deploy from branch → main → / (root)
# Your preview URL: https://YOUR_USERNAME.github.io/mindworks-website/
```

Note: internal links that start with `/` may break on GitHub Pages subdirectory.  
All links in this project use relative paths (`../index.html`, `./blog/`) so they work correctly.

---

## 🎨 Design system quick reference

| Token | Value | Use |
|---|---|---|
| `--cream` | `#f9f4eb` | Page background |
| `--ink` | `#1a2a33` | Primary text, dark sections |
| `--accent` | `#d46a45` | Terracotta — ONE accent, use sparingly |
| `--muted` | `hsl(200,12%,42%)` | Secondary copy |
| `--border` | `hsl(38,20%,82%)` | Card borders |
| `--display` | Fraunces | All headings |
| `--body` | DM Sans | Body text, UI |

**Rule:** never hardcode hex colours in HTML. Always use CSS variables.

---

## 🔗 Key links to update before going live

Search `content.js` for `calendly.com/mindworks` and replace all booking URLs with your real Calendly links. There are individual links per therapist (`mindworks-dimple`, `mindworks-alina`, etc.) — create these in your Calendly account.

---

*Built with plain HTML, CSS, and JS. No frameworks, no build step, no maintenance overhead.*
