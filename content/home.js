/**
 * ============================================================
 *  CONTENT / HOME
 *  Everything that's only used on index.html. Extends CONTENT
 *  (see content/site.js, which must load first) plus reads
 *  CONTENT.therapists (content/therapists.js).
 * ============================================================
 */

Object.assign(CONTENT, {

  hero: {
    eyebrow: 'Pune & online · since 2016',
    h1: 'Five therapists.<br>Five different<br><em>ways of working.</em>',
    body: 'Dimple trained as a clinical psychologist and started Mindworks in 2016, seeing a handful of clients herself. Four more therapists have joined since, each with a different focus — CBT, EFT, ERP, trauma work — because someone calling about panic attacks and someone calling about a relationship that\u2019s gone quiet don\u2019t need the same person. Sessions run from our two clinics in Pune or over video anywhere in India.',
    ctaPrimary:   { label: 'Book a free call' },
    ctaSecondary: { label: 'Meet the team', href: '#therapists' },
    statNumber:   '8,000+',
    statLabel:    'people seen since 2016',
    ticker:       'Replies on WhatsApp, usually same day',
  },

  marquee: [
    'Individual sessions',
    'Couples counselling',
    'Queer-affirmative',
    'Trauma-informed',
    'Two clinics in Pune',
    'Free first call',
  ],

  approach: {
    eyebrow: 'Before you book anything',
    h2: 'What the first<br><em>few steps look like</em>',
    body: 'None of it needs a diagnosis or a referral. Most people who call are dealing with something that\u2019s been sitting there a while, not a crisis with a name.',
    cards: [
      { num: '01', title: 'A free call first',        body: 'Fifteen minutes on WhatsApp with whoever you might work with, before any money or paperwork enters the picture.' },
      { num: '02', title: 'Picked by what fits',       body: 'We match you to a therapist based on what you\u2019re working through and when you\u2019re free — not a quiz or an algorithm.' },
      { num: '03', title: 'You choose the format',     body: 'Video, phone, or in person at Viman Nagar or NIBM. Weekly or fortnightly, whatever your week can hold.' },
      { num: '04', title: 'Something to check against', body: 'Free BDI-II and BAI self-assessments between sessions, so change is something you can point to, not guess at.' },
    ],
  },

  topics: {
    eyebrow: 'What people bring in',
    h2: 'Some of what<br><em>we hear most</em>',
    viewAllHref: 'conditions/',
    viewAllLabel: 'See all',
    cells: [
      { size: 'large',  label: 'Comes up most', text: 'Burnout that a weekend off doesn\u2019t fix' },
      { size: 'normal', label: '01', text: 'The same fight with a partner, on repeat' },
      { size: 'normal', label: '02', text: 'Anxiety before your feet hit the floor' },
      { size: 'normal', label: '03', text: 'Intrusive thoughts you haven\u2019t told anyone about' },
      { size: 'normal', label: '04', text: 'Low mood that doesn\u2019t have a clear cause' },
      { size: 'normal', label: '05', text: 'Grief that isn\u2019t following a schedule' },
      { size: 'large',  label: 'Also', text: 'Queer identity · family dynamics · chronic illness · identity and self-worth' },
    ],
  },

  therapistsSection: {
    eyebrow: 'The five of us',
    h2: 'Different training,<br><em>different people</em>',
    viewAllHref: 'therapists/',
    viewAllLabel: 'See all',
  },

  assessmentsSection: {
    eyebrow: 'Two free tools',
    h2: 'Check where<br><em>things stand</em>',
    subtitle: 'The BDI-II and BAI — the same intake questionnaires a therapist would run through in a first session, online and free. Worth doing before you\u2019ve even booked a call.',
    cards: [
      {
        id: 'bdi', label: '21 questions · BDI-II', title: 'Depression check',
        description: 'Twenty-one questions about the last two weeks. About ten minutes. Share the score with a therapist, or keep it to yourself.',
        linkLabel: 'Take the test',
      },
      {
        id: 'bai', label: '21 questions · BAI', title: 'Anxiety gauge',
        description: 'Same format, covering physical symptoms too — a racing heart or trouble sleeping people don\u2019t always connect to anxiety until they see it written down.',
        linkLabel: 'Take the test',
      },
    ],
  },

  pullQuote: {
    eyebrow: 'From a client',
    quote: 'Six months in, I have words for things I couldn\u2019t describe before. I didn\u2019t expect that part.',
    attribution: 'Client, 29 · online sessions since 2023',
  },

  locationsSection: {
    eyebrow: 'Two clinics, or video',
    h2: 'Where sessions<br><em>actually happen</em>',
    subtitle: 'In person in Pune, or over video from anywhere in India.',
    list: [
      {
        tag: 'Main clinic', name: 'Viman Nagar',
        address: '109, 10Biz Park, Next to Symbiosis Law School,<br>Viman Nagar, Pune 411014',
        hours: 'By appointment',
        therapists: 'Dimple · Armeet · Nandini · Alina · Annie',
        mapsHref: 'https://maps.app.goo.gl/ZAa25fMiaimpAWQo9',
        mapsLabel: 'Get directions',
        online: false, image: '',
      },
      {
        tag: 'Second clinic', name: 'NIBM',
        address: 'Raheja Vista Center Point,<br>NIBM, Pune 411060',
        hours: 'By appointment',
        therapists: 'Dimple · Armeet',
        mapsHref: 'https://maps.app.goo.gl/ZAa25fMiaimpAWQo9',
        mapsLabel: 'Get directions',
        online: false, image: '',
      },
      {
        tag: 'Online', name: 'Anywhere in India',
        address: 'Video sessions, wherever you can get<br>twenty minutes of quiet.',
        hours: 'By appointment',
        therapists: 'All five therapists',
        mapsHref: CONTENT.whatsapp.general,
        mapsLabel: 'Book an online session',
        online: true, image: '',
      },
    ],
  },

  footerCta: {
    eyebrow: 'When you\u2019re ready',
    h2: 'Send the<br><em>first message.</em>',
    body: 'One WhatsApp message gets a reply, usually the same day. The first call is free either way.',
    ctaPrimary:   { label: 'Book a free call' },
    ctaSecondary: { label: 'Message on WhatsApp' },
  },

});
