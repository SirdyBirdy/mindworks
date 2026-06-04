/**
 * ============================================================
 *  MINDWORKS COUNSELLING — CONTENT
 *  Single source of truth for ALL text, links, and data.
 *  Edit here; nothing else needs to change.
 * ============================================================
 */

const WA_BASE    = "https://wa.me/919067485858";
const WA_GENERAL = `${WA_BASE}?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20discovery%20call`;
const WA_ICON_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none" width="11" height="11"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const CONTENT = {

  /* ── SITE-WIDE ─────────────────────────────────────────── */
  site: {
    wordmark:      "<em>mind</em>works",
    nameDisplay:   "<em>mind</em>works counselling",
    tagline:       "No couches. No clichés. Just the work.",
    location:      "Pune, India",
    phone:         "+91 90674 85858",
    phoneHref:     "tel:+919067485858",
    whatsappLink:  WA_BASE,
    email:         "hello@mindworkscounselling.com",
    instagram:     "https://instagram.com/mindworkscounselling",
    copyright:     "© 2025 Mindworks Counselling",
  },

  /* ── NAV ───────────────────────────────────────────────── */
  nav: {
    links: [
      { label: "Our therapists",   href: "#therapists"  },
      { label: "Self-assessments", href: "#assessments" },
      { label: "Locations",        href: "#locations"   },
      { label: "Journal",          href: "blog/index.html" },
    ],
    cta: {
      label:   "Schedule a discovery call",
      href:    WA_GENERAL,
      tooltip: "First 15 minutes are free. Just a conversation on WhatsApp, nothing more.",
    },
    mobileLinks: [
      { label: "Our therapists",   href: "#therapists"  },
      { label: "Self-assessments", href: "#assessments" },
      { label: "Locations",        href: "#locations"   },
      { label: "Journal",          href: "blog/index.html" },
    ],
    mobileCta: { label: "Schedule a discovery call →", href: WA_GENERAL },
  },

  /* ── STICKY BAR ────────────────────────────────────────── */
  stickyBar: {
    text: "<em>mindworks</em> — Here when you're ready.",
    cta:  { label: "Schedule a discovery call", href: WA_GENERAL },
  },

  /* ── HERO ──────────────────────────────────────────────── */
  hero: {
    eyebrow:  "01 — Pune & Online · Est. 2016",
    h1:       "No couches.<br>No clichés.<br><em>Just the work.</em>",
    body:     "A small Pune-based practice. Certified, supervised psychologists who will sit with you while you sort through what's loud, what's stuck, and what keeps coming back.",
    ctaPrimary:   { label: "Schedule a discovery call", href: WA_GENERAL },
    ctaSecondary: { label: "Meet the team",             href: "#therapists" },
    portraitAlt:     "Dimple Kishnani",
    portraitSrc:     "",
    portraitCaption: "Dimple Kishnani · Founder, Clinical Psychologist",
    statNumber:      "8,000+",
    statLabel:       "people helped since 2016",
    availability:    "Next available: Today, 4 PM",
  },

  /* ── MARQUEE ───────────────────────────────────────────── */
  marquee: [
    "Burnout that won't quit",
    "The relationship you keep replaying",
    "Anger you can't place",
    "Queer-affirmative",
    "Trauma-informed",
    "Free discovery call",
    "The version of yourself you keep putting off",
    "Neurodivergent-affirming",
    "CBT · ACT · REBT",
    "Grief that doesn't follow a timeline",
  ],

  /* ── APPROACH ──────────────────────────────────────────── */
  approach: {
    eyebrow: "02 — Approach",
    h2:      "How we<br><em>actually work</em>",
    body:    "We are not here to fix you. We are here to sit with you while you figure out what's actually going on.",
    cards: [
      { num: "/01", title: "Talk before you commit",        body: "Free discovery call on WhatsApp. Get a feel for how we work before you spend a rupee or decide anything." },
      { num: "/02", title: "Matched by fit, not a formula", body: "You are paired based on what you are working through, your schedule, and what you are actually looking for in a therapist." },
      { num: "/03", title: "Sessions on your terms",        body: "Video, audio, or text. Weekly or fortnightly. From wherever you are in India." },
      { num: "/04", title: "See how things are shifting",   body: "Free self-assessments between sessions so you can track how things are actually moving, not just feel like they might be." },
    ],
  },

  /* ── TOPICS / BENTO ────────────────────────────────────── */
  topics: {
    eyebrow: "03 — What we work on",
    h2:      "Whatever's<br><em>weighing on you</em>",
    cells: [
      { size: "large",  label: "Most talked about", text: "Burnout that won't quit" },
      { size: "normal", label: "01", text: "The relationship you keep replaying" },
      { size: "normal", label: "02", text: "Anger you can't place" },
      { size: "normal", label: "03", text: "Anxiety before you even get out of bed" },
      { size: "normal", label: "04", text: "The version of yourself you keep putting off" },
      { size: "normal", label: "05", text: "Grief that doesn't follow a timeline" },
      { size: "large",  label: "Also", text: "Queer identity · neurodivergence · family dynamics · chronic illness · performance pressure" },
    ],
  },

  /* ── THERAPISTS ────────────────────────────────────────── */
  therapists: {
    eyebrow:     "04 — The team",
    h2:          "People you'll<br><em>actually talk to</em>",
    viewAllHref: "therapists/",
    list: [
      {
        id:          "dimple-kishnani",
        name:        "Dimple Kishnani",
        initials:    "DK",
        photo:       "",
        specialisms: ["Clinical disorders", "Relationships", "Performance coaching"],
        experience:  "12 yrs experience",
        price:       "₹3,500",
        bookingLink: `${WA_BASE}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dimple`,
      },
      {
        id:          "armeet-narang",
        name:        "Armeet Narang",
        initials:    "AN",
        photo:       "",
        specialisms: ["CBT", "ACT", "REBT", "Queer-affirmative"],
        experience:  "5 yrs experience",
        price:       "₹2,000",
        bookingLink: `${WA_BASE}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Armeet`,
      },
      {
        id:          "nandini-keshwani",
        name:        "Nandini Keshwani",
        initials:    "NK",
        photo:       "",
        specialisms: ["Queer-affirmative", "Body positivity", "Growth"],
        experience:  "4 yrs experience",
        price:       "₹1,500",
        bookingLink: `${WA_BASE}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Nandini`,
      },
      {
        id:          "alina-tambuwala",
        name:        "Alina Tambuwala",
        initials:    "AT",
        photo:       "",
        specialisms: ["CBT", "Queer-affirmative", "Trauma-informed"],
        experience:  "3 yrs experience",
        price:       "₹1,400",
        bookingLink: `${WA_BASE}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Alina`,
      },
    ],
  },

  /* ── ASSESSMENTS ───────────────────────────────────────── */
  assessments: {
    eyebrow:  "05 — Free tools",
    h2:       "Know where<br><em>you stand</em>",
    subtitle: "Clinically validated. Free. Share your score with your counsellor so you have somewhere to start.",
    disclaimer: "These are for self-awareness only, not a clinical diagnosis.",
    cards: [
      { id: "bdi", label: "21 questions · BDI-II",  title: "Depression check", description: "The Beck Depression Inventory. A clinically validated way to understand where you are right now. Shareable with your therapist.", linkLabel: "Take the test" },
      { id: "bai", label: "21 questions · BAI",     title: "Anxiety gauge",    description: "The Beck Anxiety Inventory. See how anxiety is showing up in your day-to-day. Instant results with a breakdown you can share.",    linkLabel: "Take the test" },
    ],
  },

  /* ── PULL QUOTE ────────────────────────────────────────── */
  pullQuote: {
    eyebrow:     "06 — What people say",
    quote:       "Six months in, I have words for things I couldn't describe before. That's changed more than I expected.",
    attribution: "— Client, 29 · Online sessions since 2023",
  },

  /* ── LOCATIONS ─────────────────────────────────────────── */
  locations: {
    eyebrow:  "07 — Find us",
    h2:       "Where we<br><em>meet you</em>",
    subtitle: "In-person in Pune, or online from anywhere in India.",
    list: [
      {
        tag:          "Main clinic",
        name:         "Koregaon Park",
        address:      "Replace with full address,<br>Koregaon Park, Pune 411001",
        hours:        "Mon – Sat, 9 AM – 7 PM",
        therapists:   "Dimple · Armeet · Nandini",
        mapsHref:     "https://maps.google.com/?q=Koregaon+Park+Pune",
        mapsLabel:    "Get directions",
        online:       false,
      },
      {
        tag:          "Second clinic",
        name:         "Baner",
        address:      "Replace with full address,<br>Baner, Pune 411045",
        hours:        "Tue – Sun, 10 AM – 6 PM",
        therapists:   "Alina · Nandini",
        mapsHref:     "https://maps.google.com/?q=Baner+Pune",
        mapsLabel:    "Get directions",
        online:       false,
      },
      {
        tag:          "Online",
        name:         "Across India",
        address:      "Video, audio, or text sessions.<br>All you need is a quiet space.",
        hours:        "7 days a week, flexible slots",
        therapists:   "All four therapists available",
        mapsHref:     WA_GENERAL,
        mapsLabel:    "Book online session",
        online:       true,
      },
    ],
  },

  /* ── FOOTER CTA ────────────────────────────────────────── */
  footerCta: {
    eyebrow:      "Ready when you are",
    h2:           "Let's start<br><em>talking.</em>",
    body:         "First call is free.<br>No forms, no pressure. Just a real conversation on WhatsApp.",
    ctaPrimary:   { label: "Schedule a discovery call", href: WA_GENERAL },
    ctaSecondary: { label: "Message us on WhatsApp",    href: WA_BASE    },
  },

  /* ── FOOTER ────────────────────────────────────────────── */
  footer: {
    description: "A small Pune-based therapy practice. Certified, supervised, queer-affirmative. Online sessions across India.",
    columns: [
      {
        heading: "Services",
        links: [
          { label: "Individual therapy",  href: "#" },
          { label: "Couples counselling", href: "#" },
          { label: "Self-assessments",    href: "#assessments" },
        ],
      },
      {
        heading: "Navigate",
        links: [
          { label: "Our therapists", href: "#therapists" },
          { label: "Locations",     href: "#locations"  },
          { label: "Journal",       href: "blog/index.html" },
        ],
      },
      {
        heading: "Connect",
        links: [
          { label: "+91 90674 85858", href: "tel:+919067485858" },
          { label: "WhatsApp",        href: WA_BASE },
          { label: "Instagram",       href: "https://instagram.com/mindworkscounselling" },
        ],
      },
    ],
  },

  /* ── BLOG ──────────────────────────────────────────────── */
  blog: {
    eyebrow:  "Journal",
    h1:       "Words worth<br><em>sitting with</em>",
    subtitle: "Writing from the Mindworks team. On therapy, mistakes, and the quieter things.",
    posts: [
      { slug: "how-to-find-a-therapist", title: "Five years in, and my mistakes have never been more obvious", excerpt: "The more courses you do, the more naked you feel. This is what year five actually looked like.", author: "Dimple Kishnani", date: "2 June 2025", readTime: "4 min read", tag: "On practice", featured: true },
      { slug: "what-is-cbt",             title: "CBT isn't just 'think positive'. Here's what it actually does.", excerpt: "Cognitive Behavioural Therapy gets simplified a lot. This is a plain-language guide to how it really works.", author: "Alina Tambuwala", date: "18 May 2025", readTime: "7 min read", tag: "Therapy explained", featured: false },
      { slug: "burnout-vs-depression",   title: "Burnout vs depression: they overlap more than you think", excerpt: "Both leave you exhausted. Both are real. But they need different things from you.", author: "Armeet Narang", date: "4 May 2025", readTime: "6 min read", tag: "Mental health", featured: false },
    ],
  },

}; // end CONTENT
