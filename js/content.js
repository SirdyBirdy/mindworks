/**
 * ============================================================
 *  MINDWORKS COUNSELLING — CONTENT FILE
 *  Edit this file to update text, therapist info, and CTAs
 *  across all pages without touching any HTML or CSS.
 * ============================================================
 */

const CONTENT = {

  // ── SITE-WIDE ────────────────────────────────────────────
  site: {
    name: "mindworks counselling",
    nameDisplay: "<em>mind</em>works counselling", // HTML, <em> gets accent color
    wordmark: "<em>mind</em>works",
    tagline: "No couches. No clichés. Just the work.",
    location: "Pune, India",
    established: "Est. 2016",
    phone: "+91 90674 85858",
    whatsappLink: "https://wa.me/919067485858",
    whatsappLabel: "WhatsApp us instead",
    email: "hello@mindworkscounselling.com",
    instagram: "https://instagram.com/mindworkscounselling",
    bookingLink: "https://calendly.com/mindworks", // ← replace with real Calendly/booking URL
    copyright: "© 2025 Mindworks Counselling",
  },

  // ── NAV ──────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Our therapists", href: "#therapists" },
      { label: "Self-assessments", href: "#assessments" },
      { label: "Journal", href: "blog.html" },
    ],
    cta: {
      label: "Book free 15-min call",
      href: "https://calendly.com/mindworks", // ← replace
      tooltip: "This 15-minute discovery call is only for therapy enquiries — not coaching, courses, or general questions.",
    },
  },

  // ── HERO ─────────────────────────────────────────────────
  hero: {
    eyebrow: "01 — Pune & Online · Est. 2016",
    h1: "No couches.<br>No clichés.<br><em>Just the work.</em>",
    body: "A small Pune-based practice. Certified, supervised psychologists who help you figure out what's loud, what's stuck, and what's quietly waiting to be said.",
    ctaPrimary: {
      label: "Book free 15-min call",
      href: "https://calendly.com/mindworks", // ← replace
      tooltip: "This is a 15-minute discovery call — only for people exploring therapy with us.",
    },
    ctaSecondary: {
      label: "Meet the team",
      href: "#therapists",
    },
    portraitCaption: "Dimple Kishnani · Founder, Clinical Psychologist",
    statNumber: "8,000+",
    statLabel: "people helped since 2016",
    availabilityText: "Next available: Today, 4 PM", // update or hook to live data
  },

  // ── MARQUEE ───────────────────────────────────────────────
  marquee: [
    "Burnout that won't quit",
    "The relationship you keep replaying",
    "Anger you can't place",
    "Queer-affirmative",
    "Trauma-informed",
    "Free 15-min intro call",
    "The version of yourself you keep putting off",
    "Neurodivergent-affirming",
    "CBT · ACT · REBT",
    "Grief that doesn't follow a timeline",
  ],

  // ── APPROACH ─────────────────────────────────────────────
  approach: {
    eyebrow: "02 — Approach",
    h2: "How we<br><em>actually work</em>",
    body: "We don't fix — we sit with you while you sort through what's loud, what's stuck, and what's quietly waiting to be said.",
    cards: [
      {
        num: "/01",
        title: "Talk before you commit",
        body: "Free 15-minute intro call. Get a feel for the approach before spending a rupee or signing anything.",
      },
      {
        num: "/02",
        title: "Matched by fit, not algorithm",
        body: "Paired based on what you're working through, your schedule, and what you're looking for.",
      },
      {
        num: "/03",
        title: "Sessions on your terms",
        body: "Video, audio, or text. Weekly or fortnightly. From wherever you are in India.",
      },
      {
        num: "/04",
        title: "Track how things shift",
        body: "Free self-assessments between sessions. See how you're actually moving, not just feel it.",
      },
    ],
  },

  // ── TOPICS / BENTO ───────────────────────────────────────
  topics: {
    eyebrow: "03 — What we work on",
    h2: "Whatever's<br><em>weighing on you</em>",
    cells: [
      { size: "large", label: "Most talked about", text: "Burnout that won't quit" },
      { size: "normal", label: "01", text: "The relationship you keep replaying" },
      { size: "normal", label: "02", text: "Anger you can't place" },
      { size: "normal", label: "03", text: "Anxiety before you even get out of bed" },
      { size: "normal", label: "04", text: "The version of yourself you keep putting off" },
      { size: "normal", label: "05", text: "Grief that doesn't follow a timeline" },
      {
        size: "large",
        label: "Also",
        text: "Queer identity, neurodivergence, family dynamics, chronic illness, performance pressure",
      },
    ],
  },

  // ── THERAPISTS ───────────────────────────────────────────
  // Add or remove therapist objects here.
  // profilePage: the filename for their individual page e.g. "therapist-dimple.html"
  // photo: path to their photo e.g. "images/dimple.jpg" — leave "" to show initials
  therapists: {
    eyebrow: "04 — The team",
    h2: "People you'll<br><em>actually talk to</em>",
    viewAllLabel: "View all",
    viewAllHref: "#therapists",
    bookCTALabel: "Book with me",  // used on each card
    list: [
      {
        id: "dimple-kishnani",
        name: "Dimple Kishnani",
        initials: "DK",
        photo: "", // e.g. "images/dimple.jpg"
        role: "Founder · Clinical Psychologist",
        specialisms: ["Clinical disorders", "Relationships", "Performance coaching"],
        experience: "12 yrs experience",
        price: "₹2,500",
        priceNote: "per session",
        bio: "Dimple founded Mindworks in 2016 with one question: what would therapy look like if it actually respected the person in the room? She works with adults navigating clinical presentations, career transitions, and the quieter struggles that don't have a name yet.",
        approaches: ["CBT", "Psychodynamic", "ACT"],
        languages: ["English", "Hindi", "Sindhi"],
        availability: "Mon–Fri, mornings",
        profilePage: "therapist-dimple.html",
        bookingLink: "https://calendly.com/mindworks-dimple", // ← replace
      },
      {
        id: "alina-tambuwala",
        name: "Alina Tambuwala",
        initials: "AT",
        photo: "",
        role: "Psychologist",
        specialisms: ["CBT", "Queer-affirmative", "Trauma-informed"],
        experience: "3 yrs experience",
        price: "₹1,400",
        priceNote: "per session",
        bio: "Alina works with young adults who are figuring out identity, relationships, and how to exist in a world that didn't quite account for them. She brings a careful, curious approach — and no judgment.",
        approaches: ["CBT", "Trauma-informed care", "Person-centred"],
        languages: ["English", "Hindi"],
        availability: "Tue–Sat, evenings",
        profilePage: "therapist-alina.html",
        bookingLink: "https://calendly.com/mindworks-alina", // ← replace
      },
      {
        id: "armeet-narang",
        name: "Armeet Narang",
        initials: "AN",
        photo: "",
        role: "Psychologist",
        specialisms: ["CBT", "ACT", "REBT", "Queer-affirmative"],
        experience: "4 yrs experience",
        price: "₹1,500",
        priceNote: "per session",
        bio: "Armeet works across anxiety, identity, and life transitions — with particular focus on helping people who feel caught between who they are and who they're supposed to be.",
        approaches: ["CBT", "ACT", "REBT"],
        languages: ["English", "Hindi", "Punjabi"],
        availability: "Mon–Sat, flexible",
        profilePage: "therapist-armeet.html",
        bookingLink: "https://calendly.com/mindworks-armeet", // ← replace
      },
      {
        id: "nandini-keshwani",
        name: "Nandini Keshwani",
        initials: "NK",
        photo: "",
        role: "Psychologist",
        specialisms: ["Queer-affirmative", "Body positivity", "Growth"],
        experience: "3 yrs experience",
        price: "₹1,200",
        priceNote: "per session",
        bio: "Nandini works with clients exploring identity, body image, and self-worth. Her sessions are unhurried and grounded — she believes the right pace is the one that actually works for you.",
        approaches: ["Person-centred", "CBT", "Mindfulness-based"],
        languages: ["English", "Hindi", "Marathi"],
        availability: "Wed–Sun, afternoons",
        profilePage: "therapist-nandini.html",
        bookingLink: "https://calendly.com/mindworks-nandini", // ← replace
      },
    ],
  },

  // ── ASSESSMENTS ──────────────────────────────────────────
  assessments: {
    eyebrow: "05 — Free tools",
    h2: "Know where<br><em>you stand</em>",
    subtitle: "Clinically validated. Free. Share your score directly with your therapist.",
    disclaimer: "These tools are for self-awareness only — not a clinical diagnosis. Share your score with your counsellor to help them understand where you're at.",
    shareNote: "Your score is private until you choose to share it. Download as PDF or copy the summary to send to your counsellor.",
    cards: [
      {
        id: "bdi",
        label: "21 questions · Beck Depression Inventory",
        title: "Depression check",
        description: "The BDI-II is one of the most widely used tools for measuring depression severity. Takes about 5 minutes.",
        linkLabel: "Take the test",
      },
      {
        id: "bai",
        label: "21 questions · Beck Anxiety Inventory",
        title: "Anxiety gauge",
        description: "The BAI measures the severity of anxiety symptoms across physical and cognitive dimensions. Takes about 5 minutes.",
        linkLabel: "Take the test",
      },
    ],
  },

  // ── PULL QUOTE ───────────────────────────────────────────
  pullQuote: {
    eyebrow: "06 — What people say",
    quote: "Six months in, I have words for things I couldn't describe before. That's changed more than I expected.",
    attribution: "— Client, 29 · Online sessions since 2023",
  },

  // ── FOOTER CTA ───────────────────────────────────────────
  footerCta: {
    eyebrow: "Ready when you are",
    h2: "Let's start<br><em>talking.</em>",
    body: "First 15 minutes are free.<br>No pressure, no paperwork — just a real conversation.",
    ctaPrimary: {
      label: "Book free discovery call",
      href: "https://calendly.com/mindworks", // ← replace
    },
    ctaSecondary: {
      label: "WhatsApp us instead",
      href: "https://wa.me/919067485858",
    },
  },

  // ── FOOTER ───────────────────────────────────────────────
  footer: {
    description: "A small Pune-based therapy practice. Certified, supervised, queer-affirmative. Online sessions across India.",
    columns: [
      {
        heading: "Services",
        links: [
          { label: "Individual therapy", href: "#" },
          { label: "Couples counselling", href: "#" },
          { label: "Self-assessments", href: "#assessments" },
        ],
      },
      {
        heading: "Navigate",
        links: [
          { label: "About us", href: "#" },
          { label: "Our therapists", href: "#therapists" },
          { label: "Journal", href: "blog.html" },
        ],
      },
      {
        heading: "Connect",
        links: [
          { label: "+91 90674 85858", href: "tel:+919067485858" },
          { label: "WhatsApp", href: "https://wa.me/919067485858" },
          { label: "Instagram", href: "https://instagram.com/mindworkscounselling" },
        ],
      },
    ],
  },

  // ── BLOG (index page) ────────────────────────────────────
  blog: {
    eyebrow: "Journal",
    h1: "Words worth<br><em>sitting with</em>",
    subtitle: "Writing from the Mindworks team — on therapy, mental health, and the quieter things.",
    // Add blog posts here. 'slug' must match the HTML filename e.g. "how-to-find-a-therapist"
    posts: [
      {
        slug: "how-to-find-a-therapist",
        title: "How to find the right therapist (when everyone sounds the same)",
        excerpt: "The websites all say 'safe space' and 'non-judgmental'. Here's what to actually look for.",
        author: "Dimple Kishnani",
        date: "2 June 2025",
        readTime: "5 min read",
        tag: "Getting started",
        featured: true,
      },
      {
        slug: "what-is-cbt",
        title: "CBT isn't just 'think positive'. Here's what it actually does.",
        excerpt: "Cognitive Behavioural Therapy gets simplified a lot. This is a plain-language guide to how it really works.",
        author: "Alina Tambuwala",
        date: "18 May 2025",
        readTime: "7 min read",
        tag: "Therapy explained",
        featured: false,
      },
      {
        slug: "burnout-vs-depression",
        title: "Burnout vs depression: they overlap more than you think",
        excerpt: "Both leave you exhausted. Both are real. But they need different things from you.",
        author: "Armeet Narang",
        date: "4 May 2025",
        readTime: "6 min read",
        tag: "Mental health",
        featured: false,
      },
    ],
  },

}; // end CONTENT

// Make available globally
if (typeof module !== "undefined") module.exports = CONTENT;
