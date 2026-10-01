# Mindworks Counselling — website

A static site, no build step, no framework. Open `index.html` in a
server (see **Run it locally** below) and it works. Deploys to
Netlify, GitHub Pages, or any static host as-is.

This README documents the architecture — what lives where, and why —
so changes stay easy six months from now. If you're just here to edit
copy, skip to **"I just want to change some text."**

---

## The rule this whole structure follows

**Content lives in `content/`. Rendering logic lives in `js/`. Nothing
is written twice.**

Before this rebuild, the same nav links, footer copy, and phone number
were hardcoded in two different JS files that could silently drift out
of sync, and every therapist's full bio was pasted directly into its
own HTML page — so fixing a typo in someone's job title meant hoping
you'd caught every copy of it. That's the specific problem this layout
solves. If you ever find yourself pasting the same sentence into two
files, that's a sign it belongs in `content/` instead.

## I just want to change some text

Everything editorial lives in `content/`. You don't need to touch
`js/` or `css/` for a copy change.

| To change...                                    | Edit...                              |
|---------------------------------------------------|---------------------------------------|
| Phone number, WhatsApp number, nav links, footer   | `content/site.js`                     |
| Homepage headlines, hero, approach, locations, etc.| `content/home.js`                     |
| A therapist's bio, price, FAQ, credentials         | `content/therapists.js`               |
| A condition page's copy (anxiety, depression, etc.)| `content/conditions.js`               |
| Blog post titles/tags/order (not the article body) | `content/blog-posts.js`               |
| The actual text of a blog article                  | `blog/<slug>.html` directly (see below) |

Each file starts with a comment block explaining what it's for. Open
it, find the field, edit it, save, refresh the page.

---

## Folder structure

```
├── content/          ← ALL editorial copy. Read this first.
│   ├── site.js              site-wide: contact info, nav, footer, discovery modal
│   ├── home.js               homepage-only sections
│   ├── therapists.js         every therapist's full profile — ONE place
│   ├── conditions.js         all 5 condition pages + the hub intro
│   ├── blog-posts.js         blog post metadata (title/tag/date/excerpt)
│   └── assessment-questions.js   BDI-II / BAI question banks (clinical data)
│
├── js/
│   ├── core/          Runs on every page, in this order:
│   │   ├── paths.js          figures out relative paths at any folder depth
│   │   ├── icons.js           shared inline SVGs (WhatsApp, arrow)
│   │   └── chrome.js          renders nav / sticky bar / footer from content/site.js
│   ├── features/      Self-contained interactive widgets, used where needed:
│   │   ├── discovery-modal.js
│   │   ├── assessment-modal.js
│   │   └── hero-carousel.js
│   └── pages/          One file per page TYPE, not per page. Reads content/,
│       │                builds the DOM. This is what makes therapists.js's 5
│       │                profiles come from ONE renderer instead of 5 copies.
│       ├── home.js
│       ├── therapists-index.js
│       ├── therapist-profile.js
│       ├── condition-page.js       (handles the hub AND every detail page)
│       ├── blog-index.js
│       └── blog-post.js
│
├── css/
│   ├── tokens.css            colour/type/spacing variables + base reset. Loads first, everywhere.
│   ├── components.css        nav, sticky bar, buttons, mobile menu — shared chrome
│   ├── components-discovery-modal.css
│   ├── responsive.css        breakpoints for the shared components + home page
│   └── pages/
│       ├── home.css
│       ├── therapist-profile.css
│       ├── conditions.css
│       └── blog.css
│
├── images/team/        therapist photos
├── therapists/          index.html (list) + one thin HTML shell per therapist
├── conditions/           index.html (hub) + one folder per condition
├── blog/                  index.html (Journal listing, at /blog/) + one HTML file per
│                          article. Files live here but are SERVED at /<slug> (.htaccess)
├── .htaccess              Apache/LiteSpeed: serves blog/<slug>.html at /<slug>, https + www, 301s
├── about/                 About Us (legal/company page)
├── privacy/                Privacy Policy (legal/company page)
├── tnc/                     Terms & Conditions (legal/company page)
├── consent-form/            client intake consent form
├── index.html
├── 404.html
├── robots.txt
└── sitemap.xml
```

### A note on `about/`, `privacy/`, `tnc/`, `consent-form/`

These reproduce the text that's live on mindworkscounselling.com today,
carried over into the new design system — not rewritten. A few things
worth knowing:

- **The T&C page's crisis-contact clause was updated**, not reproduced
  verbatim: the live version pointed to the old police short code
  (100) and a specific NGO helpline number. This version points to
  112 and Tele-MANAS (14416) — the current national emergency and
  mental-health helpline numbers — matching what's used elsewhere on
  this site. Everything else in the T&C is unchanged.
- **The Privacy Policy's Grievance Officer block had a real error on
  the live site**: it names "Nikhil" but then gives contact details
  for a different person at a completely different email domain
  (`navneet@weekendfeels.com` — looks like a leftover from whoever
  built the original site). This version keeps only the Nikhil /
  `nikhil@mindworkscounselling.com` details. Worth confirming that's
  actually the right contact before this goes live.
- **The About page's address was updated** to match the Viman Nagar
  clinic address used in the Locations section elsewhere on this
  site. The live About page listed a different, older address — worth
  confirming which one is current.
- **The Consent Form has no backend** — the original WordPress version
  likely posted to a plugin that doesn't exist here. This version
  submits to [Web3Forms](https://web3forms.com/) (free tier: 250
  submissions/month, no account or credit card, works on any host)
  and is already wired up with a live access key. That key is meant
  to be public — Web3Forms runs entirely client-side by design, so
  having it visible in the page source isn't a security issue. The
  worst a leaked key allows is someone triggering fake submissions
  (spam to the inbox it's tied to), not access to real submissions or
  account data. A honeypot field (`botcheck`) is already in place to
  catch most automated spam for free; true domain-locking is a
  Pro-only feature on Web3Forms' side if that's ever needed.

## How a page is built

Every page (other than blog articles — see below) is a mostly-empty
HTML shell: the `<head>`, the mount points (`#mw-nav`, `#mw-footer`,
etc.), and a chain of `<script>` tags. All the actual content gets
written into the DOM at load time by a matching file in `js/pages/`,
which reads from `content/`.

**Script load order matters and is the same pattern everywhere:**

```html
<script src="js/core/paths.js"></script>        <!-- 1. path helper, must be first -->
<script src="js/core/icons.js"></script>        <!-- 2. shared icons -->
<script src="content/site.js"></script>         <!-- 3. site-wide content -->
<script src="content/home.js"></script>         <!-- 4. page-specific content (extends the same object) -->
<script src="js/core/chrome.js"></script>       <!-- 5. renders nav/footer -->
<script src="js/pages/home.js"></script>        <!-- 6. renders this page's content -->
```

`content/*.js` files all extend one global `CONTENT` object via
`Object.assign(CONTENT, {...})`. `content/site.js` must load first
since it creates `CONTENT`; everything else just adds to it.

### Why not React / Vue / a bundler?

This site doesn't need one. It's mostly static marketing pages plus a
couple of interactive widgets (the assessment quiz, the discovery
modal). Five browser-native scripts and a folder of data files cover
that with zero build tooling, zero `node_modules`, and no risk of a
dependency going stale. If the site grows real app-like functionality
later, that's the point to reconsider — not before.

### Why do therapist/condition pages exist as real folders instead of one dynamic route?

Because this is a static host with no server-side routing. Real
folders (`therapists/dimple-kishnani.html`,
`conditions/anxiety/index.html`) are what give each page its own crawlable
URL, its own `<title>` and meta description for SEO, and something
that works if JavaScript fails to load. The *content* on each page
still comes from one shared data file — only the URL is per-page, not
the copy.

### Why are blog posts still individual HTML files with the article written directly inside them?

Because an article is a one-off piece of writing, not repeatable data
— there's nothing to deduplicate. `content/blog-posts.js` holds the
metadata every *other* page needs (the blog index card, the "next
read" link), and each post's own HTML file holds the metadata needed
for that page's own SEO tags plus the prose itself. That split is
intentional, not an inconsistency.

---

## What changed in this rebuild, and why

A few structural problems in the previous version drove this
reorganization. Listed here so nobody "fixes" them back:

- **Nav, footer, and site copy were hardcoded in two places**
  (`content.js` *and* `shared.js`) that could drift apart. Now there's
  one: `content/site.js`, rendered by `js/core/chrome.js`.
- **Every therapist's full bio, FAQ, and credentials were pasted
  directly into their own HTML page** — five copies of the same
  ~300-line structure. Now it's one entry per person in
  `content/therapists.js`, rendered by `js/pages/therapist-profile.js`.
  The home page cards, the profile pages, and the discovery modal's
  "go straight to someone" list all read the *same* entries.
- **Conditions had two separate, differently-named rendering systems**
  (`conditions-hub.js` with `ch*` element IDs, `condition-page.js` with
  `cp*` IDs) for what's functionally the same page type. Merged into
  one `js/pages/condition-page.js`.
- **Blog URLs.** The old live site serves every post at `/<slug>`
  (e.g. `/asexuality-in-lgbtqia`), and that's what Google has indexed.
  The rebuild had moved them to `/blog/<slug>.html`, which would have
  thrown away their SEO. The files still live in `blog/`, but
  `.htaccess` serves each one at `/<slug>` — identical to the old URLs
  — and 301s any `/blog/<slug>` hit to it. Canonicals, the sitemap, the
  index cards and the "next read" links all use `/<slug>`. Because the
  browser sees `/<slug>`, posts load CSS/JS with root-absolute paths
  (`/css/...`), not `../`.
- **Blog post metadata (title, date, tag, byline) was duplicated
  between each post's own `<head>`/header markup and
  `js/blog-content.js`,** with no way to catch drift between them.
  That per-post duplication is unavoidable for SEO tags (a real
  article needs its own `<title>`), but the "next read" link — which
  *was* hand-typed per post, and had gone stale/broken on at least one
  post — is now computed automatically from `content/blog-posts.js`'s
  order.
- **The site-wide inline `<style>` block used for blog posts was
  pasted into all 40 post files identically.** Now it's one file:
  `css/pages/blog.css`.
- **One published blog post (`how-to-find-a-therapist.html`) was never
  added to the post list**, so it never appeared in the index or its
  tag filter — a genuinely orphaned page. Added.
- **The `therapists/` index page that the main nav links to didn't
  exist.** Built it.
- **A booking button on the self-assessment results screen pointed at
  `CONTENT.site.bookingUrl`, a field that was never defined**, so it
  silently linked nowhere. Fixed.
- **The homepage copy leaned on AI-typical patterns** — "small
  practice," repeated "no X, no Y" constructions, "actually" used as a
  section-header hook six separate times. Rewritten using only facts
  already present in the original site (founding year, team size,
  modalities, locations), without inventing biography or history that
  wasn't there.
- **Added a safety check that didn't exist before:** if someone
  answers the BDI-II's suicide-ideation question (Q9) above zero, the
  results screen now surfaces the Tele-MANAS crisis line (14416)
  immediately, regardless of their total score band.

## Items flagged, not resolved

A few pieces of therapist data in the original site were marked with
inline `<!-- NEED INPUT -->` comments — unresolved questions the
practice needed to answer before real content could go live (exact
credential wording, whether a couple of bio details are OK to publish,
one missing real photo, a fee that may be stale). These are called out
at the top of `content/therapists.js` rather than guessed at, since
they need a real answer from each person, not an assumption from a
rebuild.

---

## Run it locally

Any static file server works. From the project root:

```bash
python3 -m http.server 8000
# or:
npx serve .
```

Then open `http://localhost:8000`. Don't open `index.html` directly
via `file://` — some browsers block the relative script loading.

## Deploy

**Netlify:** drag-and-drop the folder, or connect the repo. No build
command, no publish directory setting needed (publish directory = `/`).

**GitHub Pages:** Settings → Pages → deploy from the `main` branch,
root folder.

Either way, update `sitemap.xml` and `robots.txt` if the domain
changes from `mindworkscounselling.com`.

## Adding things

**A new therapist:** add an object to `content/therapists.js`'s list,
drop a photo in `images/team/`, copy any existing file in
`therapists/*.html` and change `data-therapist-id` to match. Nothing
else needs to change — they'll appear on the home page, the team
index, and the discovery modal automatically.

**A new blog post:** copy `blog/how-to-find-a-therapist.html` as a
starting structure, rename it to the slug
you want, set its `<link rel="canonical">` to
`https://www.mindworkscounselling.com/<slug>` and its `data-post-slug`,
write the article, add one entry to `content/blog-posts.js`, and add
the URL to `sitemap.xml`. It'll appear in the index and get a correct
"next read" link automatically. **Never rename a published slug** —
the slug is the URL, and changing it loses its search ranking.

**Hosting (Hostinger / any Apache or LiteSpeed host):** upload the
*contents* of this folder to `public_html/`, including the hidden
`.htaccess` (turn on "show hidden files" in File Manager). It serves
`blog/<slug>.html` at `/<slug>`, forces https + www, and 301s old URL
variants. Without it, post URLs 404. On Netlify, `.htaccess` is
ignored, so you'd need an equivalent `_redirects` file.

**Previewing locally:** posts are linked without `.html`, so
`python3 -m http.server` will 404 on them. Use `npx serve`, which does
clean URLs.

**A new condition page:** add an entry to `content/conditions.js`,
add its slug to `conditionsOrder`, copy the folder structure of
`conditions/anxiety/` for the new slug.
