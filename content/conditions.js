/**
 * ============================================================
 *  CONTENT / CONDITIONS
 *  Powers conditions/index.html (the hub) and every
 *  conditions/<slug>/index.html landing page, rendered by
 *  js/pages/condition-page.js. One file, one object per
 *  condition — replaces the six separate files this used to
 *  be split across.
 * ============================================================
 */

Object.assign(CONTENT, {

  conditionsHub: {
    eyebrow: 'By what you\u2019re dealing with',
    h1: 'What\u2019s going on<br><em>for you?</em>',
    intro: 'Some people know exactly what they want to work on. Others just know something feels off. Either is a fine place to start.',
  },

  conditions: {

    anxiety: {
      slug: 'anxiety',
      tag: 'Anxiety',
      title: 'Anxiety Therapy',
      teaser: 'Racing thoughts, physical tension, a mind that won\u2019t drop the worst-case scenario.',
      metaTitle: 'Anxiety Therapy in Pune & Online',
      metaDescription: 'Anxiety therapy in Pune and online with certified, supervised psychologists at Mindworks Counselling. CBT, DBT, and exposure-based work. Free 15-minute call.',
      eyebrow: 'Anxiety Therapy — Pune & Online',
      h1: 'When your mind won\u2019t stop running the <em>worst case</em>',
      intro: 'Anxiety isn\u2019t just worrying too much. It\u2019s your body staying on alert long after the danger has passed, and it\u2019s exhausting to live with. Therapy won\u2019t switch it off overnight, but it can help you understand what\u2019s driving it and build ways through the moments it takes over.',
      signs: [
        'Your thoughts race and it\u2019s hard to land on one thing at a time',
        'You feel physically wound up — tight chest, racing heart, upset stomach — with no clear medical cause',
        'Sleep has become difficult because your mind won\u2019t quiet down',
        'You\u2019ve started avoiding things that used to feel ordinary',
        'You\u2019re on edge most of the time without a clear reason why',
        'You overthink small decisions until it feels unbearable',
      ],
      approachIntro: 'How we work with anxiety',
      approachBody: 'We don\u2019t just talk about what you\u2019re anxious about. We look at what\u2019s actually happening in your body and thinking when anxiety shows up, and build tools you can use in the moment. Depending what\u2019s underneath it, that might mean working with thought patterns directly, building tolerance for uncertainty gradually, or slowing the physical stress response itself.',
      modalities: ['CBT', 'DBT skills', 'Exposure-based work', 'Body-based / somatic awareness'],
      whoFor: 'People who feel like anxiety is running the show — constant background worry, panic that shows up out of nowhere, or avoidance that\u2019s started shrinking their life.',
      whoNotFor: 'If you need a same-day medical evaluation for a panic attack or physical symptoms, see a doctor first. Therapy is for the ongoing pattern, not an emergency.',
      faq: [
        { q: 'Is my anxiety \u201cbad enough\u201d to see someone about?', a: 'There\u2019s no minimum. If it\u2019s taking up space in your day or affecting how you live, that\u2019s reason enough.' },
        { q: 'Will I need medication too?', a: 'Not necessarily. Some people manage with therapy alone, others combine it with medication from a psychiatrist. We can talk through what makes sense and refer out if needed.' },
        { q: 'How soon can I expect to feel different?', a: 'Some people notice small shifts within a few sessions, especially in understanding their own patterns. Longer-standing anxiety usually takes more time.' },
        { q: 'Do you work with panic attacks specifically?', a: 'Yes — both what happens in the moment of an attack and what\u2019s feeding the anxiety in the background.' },
      ],
      footerCta: { eyebrow: 'Ready to start?', heading: 'Let\u2019s work on the <em>anxiety</em>, not just talk around it', sub: 'A free 15-minute call, no pressure, to see if it\u2019s a fit.' },
    },

    depression: {
      slug: 'depression',
      tag: 'Depression',
      title: 'Depression Counselling',
      teaser: 'Low mood, numbness, or exhaustion that doesn\u2019t lift, whether or not you can name the reason.',
      metaTitle: 'Depression Counselling in Pune & Online',
      metaDescription: 'Depression counselling in Pune and online with certified, supervised psychologists at Mindworks Counselling. Free 15-minute call.',
      eyebrow: 'Depression Counselling — Pune & Online',
      h1: 'When everything feels <em>heavier</em> than it should',
      intro: 'Depression can look like sadness, but just as often it looks like numbness, exhaustion, or going through the motions. It can be hard to even name what\u2019s wrong, which makes it harder to ask for help. You don\u2019t need it figured out before you start.',
      signs: [
        'Little to no interest in things you used to enjoy',
        'Constant tiredness that sleep doesn\u2019t seem to fix',
        'Trouble concentrating or making even small decisions',
        'Feeling low, empty, or numb most days',
        'Changes in appetite or sleep you can\u2019t explain',
        'A sense that things won\u2019t get better, or there\u2019s no point trying',
      ],
      approachIntro: 'How we work with depression',
      approachBody: 'We start by understanding what your depression actually looks like day to day, since it shows up differently for everyone. From there, the work is usually a mix of making sense of what\u2019s underneath it and rebuilding small, doable routines that help you function while the deeper work happens.',
      modalities: ['CBT', 'IFS', 'Trauma-informed therapy', 'Behavioural activation'],
      whoFor: 'Anyone whose mood has been consistently low for weeks or longer, whether or not you know why, mild or already affecting your ability to function.',
      whoNotFor: 'If you\u2019re having thoughts of harming yourself or are in crisis right now, call Tele-MANAS on 14416 or go to your nearest emergency room first. We\u2019re here for the ongoing work, not emergency care.',
      faq: [
        { q: 'What if I don\u2019t know why I feel this way?', a: 'That\u2019s more common than not. You don\u2019t need a clear reason to start — part of the work is figuring that out together.' },
        { q: 'I\u2019ve tried therapy before and it didn\u2019t help. Why would this be different?', a: 'Fit matters a lot. A different therapist, or a different approach for where you\u2019re at now, can make a real difference. We\u2019ll talk honestly about what didn\u2019t work before.' },
        { q: 'Can I do this alongside medication?', a: 'Yes, many people do. If you\u2019re not on medication and think it might help, we can talk through that and refer you to a psychiatrist.' },
        { q: 'How long does this usually take?', a: 'It depends what\u2019s underneath it. Some people feel real relief within a few months; others do longer-term work.' },
      ],
      footerCta: { eyebrow: 'Ready to start?', heading: 'You don\u2019t have to <em>carry this</em> alone', sub: 'A free 15-minute call, no pressure, to see if it\u2019s a fit.' },
    },

    ocd: {
      slug: 'ocd',
      tag: 'OCD',
      title: 'OCD Therapy',
      teaser: 'Intrusive thoughts and compulsions, visible or entirely mental, taking up more of your day than they should.',
      metaTitle: 'OCD Therapy in Pune & Online',
      metaDescription: 'OCD therapy in Pune and online at Mindworks Counselling, including ERP (Exposure and Response Prevention). Free 15-minute call.',
      eyebrow: 'OCD Therapy — Pune & Online',
      h1: 'When your mind gets stuck on a <em>loop</em>',
      intro: 'OCD isn\u2019t about being tidy or particular. It\u2019s intrusive thoughts that won\u2019t leave you alone, and compulsions — visible or entirely mental — that offer brief relief and then demand to be repeated. It\u2019s exhausting, and often kept hidden because it\u2019s misunderstood.',
      signs: [
        'Intrusive thoughts or images that feel distressing and hard to shake',
        'Repeating actions — checking, washing, counting, arranging — to feel like something bad won\u2019t happen',
        'Mental rituals, like repeating phrases or reviewing events, that no one else can see',
        'Spending significant time each day on these thoughts or behaviours',
        'Knowing, on some level, the fear doesn\u2019t fully make sense, but doing the compulsion anyway',
        'Avoiding people, places, or situations that trigger the intrusive thoughts',
      ],
      approachIntro: 'How we work with OCD',
      approachBody: 'OCD responds to a specific approach: gradually facing the fear without doing the compulsion that usually follows (Exposure and Response Prevention). We build up to that at a pace that\u2019s doable, not by throwing you into the deep end, and work on the anxiety and self-criticism that usually travels alongside it.',
      modalities: ['ERP (Exposure and Response Prevention)', 'CBT', 'DBT skills'],
      whoFor: 'Anyone dealing with intrusive thoughts and compulsions — the more commonly recognised kind (checking, contamination) or the less visible, purely mental kind that often goes undiagnosed for years.',
      whoNotFor: 'If you\u2019re not yet sure whether what you\u2019re experiencing is OCD, that\u2019s fine to bring to a first session. You don\u2019t need a diagnosis before you start.',
      faq: [
        { q: 'What if my intrusive thoughts are disturbing or embarrassing?', a: 'Intrusive thoughts are often the opposite of what someone actually wants or believes, which is part of what makes OCD so distressing. We\u2019ve heard the range — nothing you bring will shock us.' },
        { q: 'Is ERP the same as just exposing myself to my fears with no support?', a: 'No. ERP is done gradually and collaboratively, building a hierarchy of triggers you tackle at a pace you can manage, with support at each step.' },
        { q: 'Can OCD be fully cured?', a: 'Most people don\u2019t aim for the thoughts to disappear completely. The realistic goal is that they stop running your life and take up far less space.' },
        { q: 'Do I need a formal diagnosis first?', a: 'No. You can start with what you\u2019re experiencing, and we\u2019ll help figure out what\u2019s going on from there.' },
      ],
      footerCta: { eyebrow: 'Ready to start?', heading: 'The loop can <em>lose its grip</em>', sub: 'A free 15-minute call, no pressure, to see if it\u2019s a fit.' },
    },

    'relationship-counselling': {
      slug: 'relationship-counselling',
      tag: 'Relationships',
      title: 'Relationship & Couples Counselling',
      teaser: 'The same argument on repeat, drifting apart, or working through a pattern on your own.',
      metaTitle: 'Relationship & Couples Counselling in Pune & Online',
      metaDescription: 'Relationship and couples counselling in Pune and online at Mindworks Counselling. EFT-based work for couples and individuals. Free 15-minute call.',
      eyebrow: 'Relationship & Couples Counselling — Pune & Online',
      h1: 'The same <em>argument</em>, over and over',
      intro: 'Most couples don\u2019t come in because of one big fight. They come in because a small disagreement keeps happening, on repeat, and nothing either of you says seems to land. This isn\u2019t about deciding who\u2019s right — it\u2019s about understanding the pattern you\u2019re both stuck in.',
      signs: [
        'You keep having the same fight, just about different topics',
        'One or both of you shuts down instead of talking things through',
        'Trust has been shaken, by a specific event or a slow drift apart',
        'You\u2019re together but feel more like roommates than partners',
        'Big decisions — money, family, moving in — keep turning into conflict',
        'You\u2019ve started avoiding certain topics altogether',
      ],
      approachIntro: 'How we work with couples',
      approachBody: 'We work with the pattern, not just the content of the fight — usually slowing things down enough to see what each of you is actually reaching for underneath the argument, whether that\u2019s reassurance, respect, or just to feel heard. We work with individuals navigating relationship difficulties as well as couples in the room together.',
      modalities: ['EFT (Emotionally Focused Therapy)', 'IFS', 'Communication-focused work'],
      whoFor: 'Couples willing to show up and be honest, even when it\u2019s uncomfortable. Also individuals working through relationship patterns on their own, current or repeating across past ones.',
      whoNotFor: 'If there\u2019s ongoing abuse or safety is a concern for anyone involved, couples counselling isn\u2019t the right starting point. Reach out to a specialised support service first.',
      faq: [
        { q: 'Do both partners need to come to every session?', a: 'Usually yes for couples work, though occasionally we\u2019ll see partners individually if it\u2019s useful.' },
        { q: 'What if my partner doesn\u2019t want to come?', a: 'You can still start on your own. A lot of relationship work happens through understanding your own patterns, even before your partner is on board.' },
        { q: 'Are you going to take sides?', a: 'No. Our job isn\u2019t to decide who\u2019s right — it\u2019s to help you both understand what\u2019s actually going on between you, and how to change it.' },
        { q: 'Is this only for couples in crisis?', a: 'Not at all. Plenty of couples come in just to get better at communicating, long before things reach a breaking point.' },
      ],
      footerCta: { eyebrow: 'Ready to start?', heading: 'Let\u2019s work on the <em>pattern</em>, not just the fight', sub: 'A free 15-minute call, no pressure, to see if it\u2019s a fit.' },
    },

    'stress-burnout': {
      slug: 'stress-burnout',
      tag: 'Stress & Burnout',
      title: 'Stress & Burnout',
      teaser: 'Running on empty, cynical or checked out, and still not able to stop.',
      metaTitle: 'Stress & Burnout Counselling in Pune & Online',
      metaDescription: 'Stress and burnout counselling in Pune and online at Mindworks Counselling. Free 15-minute call.',
      eyebrow: 'Stress & Burnout Counselling — Pune & Online',
      h1: 'Running on <em>empty</em> and still not stopping',
      intro: 'Burnout doesn\u2019t always look like collapse. Often it looks like still showing up, still getting things done, while feeling disconnected from your own life. If a weekend off doesn\u2019t fix it anymore, that\u2019s usually a sign it\u2019s gone past ordinary tiredness.',
      signs: [
        'You\u2019re exhausted even after rest, and it doesn\u2019t lift',
        'Work, or life generally, feels like something to survive, not engage with',
        'You\u2019ve become more cynical, irritable, or checked out than usual',
        'Small tasks feel disproportionately overwhelming',
        'You\u2019ve stopped doing things that used to help you recharge',
        'You feel like you\u2019re failing even when you\u2019re doing everything you\u2019re supposed to',
      ],
      approachIntro: 'How we work with stress and burnout',
      approachBody: 'Burnout usually isn\u2019t just about workload. It\u2019s often tangled up with perfectionism, difficulty setting boundaries, or an identity that\u2019s become too tied to being productive. We work on the immediate relief and the longer pattern underneath it, so it doesn\u2019t just come back in six months.',
      modalities: ['CBT', 'DBT skills', 'Boundary and identity work'],
      whoFor: 'Anyone running on fumes from work, caregiving, or life carrying more than it used to, ready to look at what\u2019s driving it rather than just pushing through.',
      whoNotFor: 'If your main need is a medical leave certificate or workplace accommodation letter, that\u2019s usually better handled with a psychiatrist first, though we\u2019re glad to work alongside that.',
      faq: [
        { q: 'Is this different from stress management tips I could find online?', a: 'Generic tips assume everyone\u2019s stress works the same way. Yours doesn\u2019t. We start with what\u2019s actually driving it for you.' },
        { q: 'I don\u2019t have time for therapy right now — isn\u2019t that the problem?', a: 'That\u2019s a fair concern, and often part of the pattern itself. We can start with something manageable, even fortnightly, while you\u2019re stretched thin.' },
        { q: 'Can this help even if I can\u2019t change my job or workload right now?', a: 'Yes. A lot of burnout work is about your relationship to the workload and your own limits, which you have more control over than it feels like right now.' },
        { q: 'How do I know if it\u2019s burnout or depression?', a: 'They can look similar and sometimes overlap — exactly the kind of thing worth untangling together rather than guessing at alone.' },
      ],
      footerCta: { eyebrow: 'Ready to start?', heading: 'You don\u2019t have to keep <em>running on empty</em>', sub: 'A free 15-minute call, no pressure, to see if it\u2019s a fit.' },
    },

  },

  /** Order the hub grid should render the five cards in. */
  conditionsOrder: ['anxiety', 'depression', 'relationship-counselling', 'stress-burnout', 'ocd'],

});
