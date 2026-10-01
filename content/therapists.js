/**
 * ============================================================
 *  CONTENT / THERAPISTS
 *  The single source for every therapist's data. Used by:
 *    - the home page team deck and grid
 *    - therapists/index.html (the full list)
 *    - each therapists/<slug>.html profile page, rendered by
 *      js/pages/therapist-profile.js
 *    - the discovery modal's "go straight to someone" chips
 *
 *  To add someone: add an object to the list below and a photo
 *  at images/team/<slug>.jpeg. Nothing else needs to change.
 *
 *  FLAGGED FOR REVIEW (carried over from the previous version —
 *  these were left as open questions on individual profile pages
 *  and still need a real answer from each therapist before launch):
 *  - Armeet: confirm "MA Clinical Psychology" vs "MA Counselling
 *    Psychology"; confirm Punjabi is still offered; confirm
 *    in-person location; confirm he's OK with QueerKey being named.
 *  - Nandini: confirm "MSc Clinical Psychology" vs "MA Counselling
 *    Psychology"; confirm Gujarati vs Marathi; confirm in-person
 *    location; confirm she's OK with the mother/depression detail
 *    in her story being public.
 *  - Alina: confirm "MSc Clinical Psychology, BPS Accredited" vs
 *    "MA Counselling Psychology"; get her real photo (still on
 *    initials); get her sign-off on the drafted bio and tagline.
 *  - Annie: confirm the ₹1,000 session fee is still current;
 *    confirm her availability.
 * ============================================================
 */

Object.assign(CONTENT, {

  therapists: {

    list: [
      {
        id: 'dimple-kishnani',
        name: 'Dimple Kishnani',
        initials: 'DK',
        photo: 'images/team/dimple-kishnani.jpeg',
        role: 'Founder · Psychologist & Psychotherapist',
        credentials: 'MA Clinical Psychology',
        tagline: 'Every part of you is welcome here.',
        gradient: 'linear-gradient(160deg,hsl(176,28%,68%),hsl(176,35%,55%))',
        tags: ['Trauma', 'Relationships', 'Identity & self-worth', 'Emotional regulation'],
        specialisms: ['Clinical disorders', 'Relationships', 'Performance coaching'],
        experienceYears: 12,
        experienceLabel: '12 yrs experience',
        price: '₹3,500',
        priceDetail: '₹4,500 for couples or international sessions',
        duration: null,
        availability: 'Mon–Fri, mornings',
        formats: 'Online · in person (Pune)',
        languages: 'English · Hindi · Marathi',

        peopleBring: [
          'Feeling stuck in the same relationship patterns',
          'Struggling to manage overwhelming emotions',
          'Healing from difficult or painful past experiences',
          'Feeling disconnected from themselves, or unsure who they are',
          'Living with constant self-criticism or shame',
          'Navigating complicated family dynamics',
          'Learning to build healthier boundaries',
        ],
        approach: 'Dimple works with Emotionally Focused Therapy (EFT), Internal Family Systems (IFS), trauma-informed therapy, DBT, and CBT — choosing between them depending on what\u2019s in front of her rather than sticking to one model.',
        modalities: ['EFT', 'IFS', 'Trauma-informed therapy', 'DBT', 'CBT'],
        inTheRoom: 'Warm and unhurried, without pressure to arrive at insight on cue. Difficult emotions and patterns get room to become clearer instead of being rushed toward a conclusion.',
        introPull: 'My hope is that clients don\u2019t have to hide parts of themselves, or perform in therapy. We make sense of things together, with curiosity rather than judgment.',
        fitFor: [
          'People living with intense emotions or personality-related difficulties',
          'Individuals healing from trauma or complex childhood experiences',
          'Those who\u2019ve experienced emotional neglect or invalidation',
          'People struggling with their sense of identity or self-worth',
          'Anyone building a healthier relationship with themselves and others',
        ],
        notFitFor: 'Dimple works best with people open to self-reflection and willing to engage in the process. If you want quick advice or someone to tell you exactly what to do, this probably isn\u2019t the right match.',
        story: [
          'Dimple has always been curious about why people think, feel, and behave the way they do. That curiosity grew into a deeper interest in emotional experience, and eventually into the work itself.',
          'She founded Mindworks in 2016 because she kept seeing what therapy could look like when done with care, and how rarely that was the default. She wanted a practice where the relationship mattered as much as the clinical framework.',
        ],
        outsideSessions: 'Outside of sessions, she\u2019s still thinking about human behaviour and emotional patterns — reading psychology books alongside crime fiction and psychological thrillers. Fitness is a steady part of her life, a reminder of how physical and emotional wellbeing connect.',
        wishTheyKnew: 'You don\u2019t have to be a different version of yourself to begin therapy. Every part of you is welcome here, even the parts you struggle to accept yourself.',
        education: ['MA Clinical Psychology'],
        faq: [
          { q: 'Do you only work with people who have a diagnosis?', a: 'No. Plenty of people I work with don\u2019t have a diagnosis and don\u2019t need one. They\u2019re dealing with something hard and want support thinking it through. That\u2019s enough.' },
          { q: 'What\u2019s the first session actually like?', a: 'We spend most of it understanding what\u2019s brought you in. I\u2019ll ask a lot of questions, not to assess you clinically, but to get a real picture of you and your life. By the end we\u2019ll have a rough sense of how we might work together.' },
          { q: 'How long does therapy usually take?', a: 'It depends what you\u2019re working through. Some people find real relief in a handful of months; others find more value in longer-term work. I\u2019ll be honest about what I think is needed, and you\u2019re always free to stop or pause.' },
          { q: 'What\u2019s the discovery call for?', a: 'A free 15-minute conversation, only for therapy enquiries — a chance to see if we\u2019re a fit before you commit to a full session. No paperwork.' },
          { q: 'Do you offer in-person sessions?', a: 'Yes, at our Pune clinic, as well as online. Mention it when you book and we\u2019ll arrange it.' },
        ],
      },

      {
        id: 'armeet-narang',
        name: 'Armeet Narang',
        initials: 'AN',
        photo: 'images/team/armeet-narang.jpeg',
        role: 'Psychologist & Psychotherapist',
        credentials: 'MA Clinical Psychology',
        tagline: 'Therapy is almost never going to solve all your issues — but it can change how you carry them.',
        gradient: 'linear-gradient(160deg,hsl(200,28%,60%),hsl(200,35%,48%))',
        tags: ['CBT', 'ACT', 'REBT', 'Queer-affirmative'],
        specialisms: ['CBT', 'ACT', 'REBT', 'Queer-affirmative'],
        experienceYears: 4,
        experienceLabel: '4 yrs experience',
        price: '₹1,800',
        priceDetail: null,
        duration: '50 minutes',
        availability: 'Mon–Sat, flexible',
        formats: 'Video · in person',
        languages: 'English · Hindi',

        peopleBring: [
          'Anxiety that doesn\u2019t let up',
          'Couples wanting to work through conflict together',
          'Relationship patterns that keep repeating',
          'Low mood and mood swings',
          'Struggling with self-esteem and self-worth',
          'Being queer and needing a space that doesn\u2019t require explaining that first',
        ],
        approach: 'Armeet trained in CBT for anxiety and personality disorders at the Beck Institute, and in REBT through In Vivo. DBT and ACT inform his work too, applied depending on what\u2019s in front of him rather than rigidly.',
        modalities: ['CBT', 'REBT', 'DBT-informed', 'ACT-informed'],
        inTheRoom: 'Goal-directed and focused on the here and now — identifying thoughts, emotions, and behaviours, and working on wherever you\u2019re stuck. He uses metaphor and humour a fair amount; not every session needs to feel heavy to be doing something.',
        introPull: null,
        fitFor: [
          'People dealing with anxiety and related disorders',
          'Those working through depression',
          'Clients who\u2019ve felt stuck in the same pattern for a long time',
          'People navigating interpersonal or relationship difficulties',
          'Queer clients',
          'Couples',
        ],
        notFitFor: 'If you\u2019re looking for a therapist who\u2019s mostly non-directive and won\u2019t crack a joke or reach for a metaphor mid-session, this probably isn\u2019t the match. Armeet is goal-oriented, and says so upfront.',
        story: [
          'Armeet did his bachelor\u2019s in business. He was fairly lost after finishing it, and it was a friend who suggested he look into psychology — not a calling he\u2019d had since childhood, just a suggestion that stuck.',
          'He\u2019s also the facilitator of QueerKey, an offline mental health support group based in Pune.',
        ],
        outsideSessions: 'Outside sessions, he\u2019s usually reading about geopolitics or talking about music. Health is something he pays close attention to for himself, and he spends a fair amount of time just watching people go about their day.',
        wishTheyKnew: 'It is almost never going to solve all your issues.',
        education: ['MA Clinical Psychology', 'CBT training (anxiety and personality disorders) — Beck Institute', 'REBT training — In Vivo', 'DBT and ACT-informed practice'],
        faq: [
          { q: 'I have OCD but I\u2019ve heard therapy can make it worse. Is that true?', a: 'ERP (Exposure Response Prevention) is very effective for OCD when done carefully. I use a structured, evidence-based approach that\u2019s gradual and collaborative. Nothing happens without your consent and readiness.' },
          { q: 'Do you offer sessions in Punjabi?', a: 'Yes. If it\u2019s easier to express certain things in Punjabi, that\u2019s fine — we can mix languages within a session.' },
          { q: 'What\u2019s the difference between CBT, ACT, and REBT?', a: 'All three work with thoughts and behaviour, differently. CBT challenges unhelpful thinking patterns. ACT focuses on accepting difficult feelings and acting on your values anyway. REBT looks at the core beliefs driving distress. I use all three, whichever fits what you\u2019re dealing with.' },
        ],
      },

      {
        id: 'nandini-keshwani',
        name: 'Nandini Keshwani',
        initials: 'NK',
        photo: 'images/team/nandini-keshwani.jpeg',
        role: 'Psychotherapist & Clinical Psychologist',
        credentials: 'MSc Clinical Psychology',
        tagline: 'You don\u2019t need to be in crisis to deserve support.',
        gradient: 'linear-gradient(160deg,hsl(155,28%,58%),hsl(155,35%,46%))',
        tags: ['Trauma-informed', 'Grief & loss', 'Body image', 'Self-worth'],
        specialisms: ['Queer-affirmative', 'Body positivity', 'Growth'],
        experienceYears: 3,
        experienceLabel: '3 yrs experience',
        price: '₹1,500',
        priceDetail: null,
        duration: '50 minutes',
        availability: 'Wed–Sun, afternoons',
        formats: 'Video · in person',
        languages: 'English · Hindi · Gujarati',

        peopleBring: [
          'Navigating grief and loss',
          'Feeling lonely or disconnected from others',
          'Relationship and interpersonal challenges',
          'Healing from difficult or traumatic experiences',
          'Anxiety and constant overthinking',
          'Low mood and loss of motivation',
          'Building a healthier relationship with body image',
          'Strengthening self-worth and sense of identity',
        ],
        approach: 'Nandini works trauma-informed, drawing on humanistic therapy, CBT, and DBT depending on what\u2019s needed. Together you make sense of your experiences at a pace that stays comfortable, not rushed toward a conclusion because a session is running.',
        modalities: ['Trauma-informed therapy', 'Humanistic approach', 'CBT', 'DBT'],
        inTheRoom: null,
        introPull: 'A session with me is usually warm, collaborative, and non-judgmental. I aim to create a space where you can bring in whatever feels important, without feeling rushed or pressured.',
        fitFor: [
          'Individuals navigating the impact of complex trauma',
          'People balancing healing with everyday responsibilities',
          'Those struggling with body image and self-esteem',
          'People experiencing anxiety or persistent self-doubt',
          'Those working through grief, loss, or a major life transition',
          'Anyone building a stronger sense of self',
        ],
        notFitFor: 'At this stage of her practice, Nandini isn\u2019t the right fit for anyone experiencing active psychosis or needing a higher level of psychiatric care.',
        story: [
          'Growing up, Nandini watched her mother struggle with depression, and often felt helpless seeing someone she loved go through that much pain. That experience first sparked her curiosity about emotional wellbeing, and eventually about how people actually heal.',
        ],
        outsideSessions: 'Outside of work, Nandini describes herself as pretty goofy — someone who romanticises the everyday and finds joy in small things. Usually reading a psychological thriller, or occasionally a cheesy romance novel she won\u2019t quite defend.',
        wishTheyKnew: 'Therapy doesn\u2019t always have to look formal or clinical. Sometimes it simply looks like two people being as human as possible together.',
        education: ['MSc Clinical Psychology', 'Trauma-informed therapy training', 'Humanistic approach training'],
        faq: [
          { q: 'I\u2019m not sure I have anything \u201cserious enough\u201d to see a therapist for.', a: 'You don\u2019t need to be in crisis to benefit from therapy. If something\u2019s been on your mind, or you\u2019ve been going in circles, that\u2019s enough. A lot of the most useful work happens before things reach a breaking point.' },
          { q: 'What age group do you work with?', a: 'Mostly young adults and adults, roughly 18 to 40. I assess each enquiry individually, so if you\u2019re outside that range, reach out and we can discuss whether it\u2019s a fit.' },
          { q: 'Do you offer sessions in Gujarati?', a: 'Yes. If Gujarati feels more natural for certain things, that\u2019s fine — sessions can mix languages if that works better for you.' },
        ],
      },

      {
        id: 'alina-tambuwala',
        name: 'Alina Tambuwala',
        initials: 'AT',
        photo: 'images/team/alina-tambuwala.jpeg',
        role: 'Psychologist',
        credentials: 'MSc Clinical Psychology, BPS Accredited',
        tagline: 'A session with me might feel like listening to your own voice — but hearing it differently.',
        gradient: 'linear-gradient(160deg,hsl(20,32%,62%),hsl(20,38%,50%))',
        tags: ['CBT', 'Queer-affirmative', 'Trauma-informed', 'Identity'],
        specialisms: ['CBT', 'Queer-affirmative', 'Trauma-informed'],
        experienceYears: 3,
        experienceLabel: '3 yrs experience',
        price: '₹1,400',
        priceDetail: null,
        duration: '50 minutes',
        availability: 'Tue–Sat, evenings',
        formats: 'Video · in person (Pune)',
        languages: 'English · Hindi',

        peopleBring: [
          'Feeling stuck, confused, or lost',
          'Anxiety that won\u2019t quiet down',
          'Starting things and not being able to finish them',
          'Losing motivation and drive',
          'Trying to figure out who they actually are',
          'Feeling caught in the same spiral',
          'Navigating complicated relationships',
        ],
        approach: 'Alina works CBT, trauma-informed, queer-affirmative, and intersectional, with some somatic technique mixed in depending on the person. Most of what she uses she\u2019s picked up through self-study and supervision over time, applied where it fits rather than by the book.',
        modalities: ['CBT', 'Trauma-informed', 'Queer-affirmative', 'Intersectional', 'Somatic (as needed)'],
        inTheRoom: 'Sessions can be fun, giggly, and energetic just as easily as calm and grounding, depending on the day and what you\u2019re carrying in. One client described leaving a session feeling like they\u2019d \u201cjust come from servicing.\u201d Alina takes that as a compliment.',
        introPull: 'A session with me might feel like listening to your own voice, but hearing it differently.',
        fitFor: [
          'People struggling to find themselves',
          'Anyone whose inner voice has started sounding like everyone else\u2019s',
          'Those working on confidence and self-esteem',
          'People who feel helpless or unsure of who they are',
        ],
        notFitFor: 'Alina is upfront that she may not be the best fit for people struggling with addiction.',
        story: [
          'At 15, Alina attended a suicide prevention workshop run by Connecting. It taught her how much difference listening can make, and what it actually means not to judge someone. She\u2019s tried other things since, but keeps coming back to this.',
        ],
        outsideSessions: 'Outside sessions, she\u2019s drawn to why the same circumstances play out so differently for different people. Small moments from the therapy room stay with her too: a stifled laugh, someone tearing up mid-sentence, a joke that lands.',
        wishTheyKnew: 'Therapy isn\u2019t a quick process. Change won\u2019t necessarily be a \u2018Eureka!\u2019 moment — it\u2019s often subtle shifts in how you think.',
        education: ['MSc Clinical Psychology', 'BPS Accredited', 'Trauma-informed and somatic practice, via self-study and supervision'],
        faq: [
          { q: 'I\u2019m not sure I\u2019m \u201cqueer enough\u201d to see a queer-affirmative therapist.', a: 'Queer-affirmative just means I don\u2019t assume heterosexuality or cisgender identity as a default, and won\u2019t treat your identity as something to fix. Anyone questioning, exploring, or existing outside the default is welcome here.' },
          { q: 'Do I have to talk about my trauma?', a: 'No. We go at your pace, always. Trauma therapy doesn\u2019t mean reliving everything — it means understanding how the past shows up in the present, carefully and only when you\u2019re ready.' },
          { q: 'What\u2019s the discovery call for?', a: 'A free 15-minute conversation, only for therapy enquiries — a chance to see if we\u2019re a fit before you commit to a full session.' },
        ],
      },

      {
        id: 'annie-john',
        name: 'Annie John',
        initials: 'AJ',
        photo: 'images/team/annie-john.jpeg',
        role: 'Psychologist',
        credentials: 'MA Applied Psychology (Clinical and Counseling Practice), TISS, Mumbai',
        tagline: 'A space to be honest about what you\u2019re carrying.',
        gradient: 'linear-gradient(160deg,hsl(265,28%,64%),hsl(265,35%,52%))',
        tags: ['Burnout', 'Anxiety', 'Self-esteem', 'Low mood'],
        specialisms: ['Trauma-informed', 'Queer-affirmative CBT', 'Narrative therapy'],
        experienceYears: 1,
        experienceLabel: '1 yr experience',
        price: '₹1,000',
        priceDetail: null,
        duration: null,
        availability: 'To be confirmed',
        formats: 'Online · in person (Pune)',
        languages: 'English · Hindi',

        peopleBring: [
          'Feeling completely drained or burned out by work or studies',
          'Constant worrying, overthinking, and feeling anxious',
          'Struggling with self-image and self-esteem',
          'Low mood, or losing interest in things they once enjoyed',
          'Procrastination, low motivation, and feeling overwhelmed',
        ],
        approach: 'Annie works with a trauma-informed and queer-affirmative lens, drawing on CBT and narrative therapy depending on what\u2019s needed. The aim isn\u2019t to arrive with things figured out — it\u2019s to meet you where you are.',
        modalities: ['Trauma-informed therapy', 'Queer-affirmative CBT', 'Narrative therapy'],
        inTheRoom: 'Safe and non-judgemental, without the pressure of having things figured out before you walk in. Sessions tend to feel less like an assessment and more like a conversation — honest, unhurried, and collaborative.',
        introPull: 'I aim for sessions to be warm, comfortable, and collaborative, where you can be honest about what you\u2019re experiencing, and leave a little lighter.',
        fitFor: [
          'People feeling overwhelmed, uncertain, or navigating transitions',
          'Those willing to reflect on their emotions, relationships, and patterns',
          'People struggling with self-doubt, confidence, body image, or self-criticism',
          'Anyone looking for a supportive space to process what they\u2019re going through',
          'Individuals navigating the impact of abuse or difficult experiences',
        ],
        notFitFor: null,
        story: [
          'During her bachelor\u2019s degree, Annie volunteered with an NGO running life-skills sessions in schools. Paired with a psychologist who worked closely with students, watching how she showed up for them through difficult periods is what drew Annie toward this work.',
        ],
        outsideSessions: 'Outside of sessions, Annie is still curious about what shapes people and why we do what we do. She reads about history and watches crime documentaries, often quietly people-watching, wondering what story someone might be carrying.',
        wishTheyKnew: 'Therapy is an ongoing process. It takes patience, and it takes self-work.',
        education: ['MA Applied Psychology (Clinical and Counseling Practice), TISS, Mumbai'],
        faq: [
          { q: 'Do you only work with people who have a diagnosis?', a: 'No. A lot of the people I work with don\u2019t have a diagnosis and don\u2019t need one. They\u2019re going through something hard and want support making sense of it.' },
          { q: 'What\u2019s the first session actually like?', a: 'We spend most of it understanding what\u2019s brought you in. I\u2019ll ask questions to get a real sense of you and your life, not to assess you clinically.' },
          { q: 'How long does therapy usually take?', a: 'It depends what you\u2019re working through. Some people find things shift in a handful of months, others find more value in longer-term work. I\u2019ll be honest about what I think is needed.' },
          { q: 'What\u2019s the discovery call for?', a: 'A free 15-minute conversation, only for therapy enquiries. No paperwork, no pressure.' },
          { q: 'Do you offer in-person sessions?', a: 'Yes, at our Pune clinic, as well as online.' },
        ],
      },
    ],
  },

});
