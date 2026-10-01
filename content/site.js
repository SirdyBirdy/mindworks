/**
 * ============================================================
 *  CONTENT / SITE
 *  Facts and copy that appear on more than one page: contact
 *  details, nav, footer, sticky bar, discovery modal.
 *
 *  Every JS content file in this folder extends the same
 *  global CONTENT object. Load order (see any page's <script>
 *  tags): site.js first, then the page-specific content file.
 * ============================================================
 */

const CONTENT = {

  site: {
    /** LOGO — drop files in images/brand/ and set the paths here.
        Leave a path empty ('') to keep using the text wordmark below.
          logo       → shown in the top nav (light background). SVG or PNG.
          logoOnDark → shown in the footer (dark green background). Optional;
                       falls back to `logo` if empty.
          favicon    → browser tab icon (square PNG/SVG, 64×64 or larger). */
    logo:         '',   // e.g. 'images/brand/logo.svg'
    logoOnDark:   '',   // e.g. 'images/brand/logo-light.svg'
    logoAlt:      'Mindworks Counselling',
    logoHeight:   30,   // px, height in the nav (width follows the image)
    favicon:      '',   // e.g. 'images/brand/favicon.png'

    wordmark:     '<em>mind</em>works',
    nameFull:     '<em>mind</em>works counselling',
    city:         'Pune',
    founded:      2016,
    phone:        '+91 90674 85858',
    phoneHref:    'tel:+919067485858',
    whatsapp:     'https://wa.me/919067485858',
    email:        'hello@mindworkscounselling.com',
    instagram:    'https://instagram.com/mindworkscounselling',
    copyright:    '© 2026 Mindworks Counselling',
  },

  /** Pre-filled WhatsApp links. Built once here so every page,
      the discovery modal, and each therapist card use the same
      phone number and message format. */
  whatsapp: {
    general: 'https://wa.me/919067485858?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20discovery%20call',
    bookWith(firstName) {
      return `https://wa.me/919067485858?text=${encodeURIComponent(`Hi, I would like to book an appointment with ${firstName}`)}`;
    },
  },

  nav: {
    links: [
      { label: 'Our therapists',    href: 'therapists/'  },
      { label: 'What we help with', href: 'conditions/'  },
      { label: 'Self-assessments',  href: '#assessments' },
      { label: 'Locations',         href: '#locations'   },
      { label: 'Journal',           href: 'blog/'        },
    ],
    cta: { label: 'Book a free call' },
    ctaTooltip: 'Fifteen minutes on WhatsApp, no charge, before you decide anything.',
  },

  stickyBar: {
    text: '<em>mindworks</em> — first call costs nothing',
    ctaLabel: 'Book a free call',
  },

  /** The pop-up on the home page, once per browser session. */
  discoveryModal: {
    /** Fraction of the page scrolled before it auto-opens (once per browser session). null = never auto-open. */
    autoOpenAtScroll: 0.5,
    eyebrow: 'Free · 15 minutes',
    title: 'Not sure who<br>to <em>start with?</em>',
    body: 'Message us and tell us roughly what\u2019s going on. We\u2019ll point you to whichever of the five of us fits, or you can pick straight from the list below.',
    primaryLabel: 'Message us on WhatsApp',
    reassurance: 'Usually a reply within a few hours',
    divider: 'Or go straight to someone',
  },

  footer: {
    blurb: 'Five therapists working out of two clinics in Pune, and over video anywhere else. Founded 2016. Most of us work in a queer-affirmative, trauma-informed way — it isn\u2019t a separate service, it\u2019s just how the sessions run.',
    columns: [
      {
        heading: 'Get started',
        links: [
          { label: 'Our therapists',    href: 'therapists/'  },
          { label: 'What we help with', href: 'conditions/'  },
          { label: 'Self-assessments',  href: '#assessments' },
        ],
      },
      {
        heading: 'Find us',
        links: [
          { label: 'Locations', href: '#locations' },
          { label: 'Journal',   href: 'blog/'       },
        ],
      },
      {
        heading: 'Talk to us',
        links: [
          { label: '+91 90674 85858', href: 'tel:+919067485858' },
          { label: 'WhatsApp',        href: 'https://wa.me/919067485858' },
          { label: 'Instagram',       href: 'https://instagram.com/mindworkscounselling' },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'About us',            href: 'about/'         },
          { label: 'Privacy policy',      href: 'privacy/'       },
          { label: 'Terms & conditions',  href: 'tnc/'           },
          { label: 'Consent form',        href: 'consent-form/'  },
        ],
      },
    ],
  },

  /**
   * Shown as a small line in the footer on every page, and
   * surfaced more prominently on the depression/anxiety pages
   * and after a concerning assessment answer.
   * Tele-MANAS is the Government of India's free 24/7 mental
   * health helpline — verified current as of September 2026.
   * If this ever changes, this is the only place to update it.
   */
  crisisLine: {
    text: 'In a crisis, Tele-MANAS is free and runs 24/7:',
    number: '14416',
    numberHref: 'tel:14416',
  },
};
