/**
 * ============================================================
 *  CONTENT / ASSESSMENT QUESTIONS
 *  The BDI-II and BAI question banks and scoring bands. This is
 *  clinical reference data, not marketing copy, which is why it
 *  stays separate from content/site.js and content/home.js.
 *  Rendering and interaction logic lives in
 *  js/features/assessment-modal.js.
 * ============================================================
 */

// ── BDI-II QUESTIONS ──────────────────────────────────────────────
const BDI_QUESTIONS = [
  {
    id: 1,
    text: "Sadness",
    options: [
      "I do not feel sad.",
      "I feel sad much of the time.",
      "I am sad all the time.",
      "I am so sad or unhappy that I can't stand it.",
    ],
  },
  {
    id: 2,
    text: "Pessimism",
    options: [
      "I am not discouraged about my future.",
      "I feel more discouraged about my future than I used to be.",
      "I do not expect things to work out for me.",
      "I feel my future is hopeless and will only get worse.",
    ],
  },
  {
    id: 3,
    text: "Past failure",
    options: [
      "I do not feel like a failure.",
      "I have failed more than I should have.",
      "As I look back, I see a lot of failures.",
      "I feel I am a total failure as a person.",
    ],
  },
  {
    id: 4,
    text: "Loss of pleasure",
    options: [
      "I get as much pleasure as I ever did from the things I enjoy.",
      "I don't enjoy things as much as I used to.",
      "I get very little pleasure from the things I used to enjoy.",
      "I can't get any pleasure from the things I used to enjoy.",
    ],
  },
  {
    id: 5,
    text: "Guilty feelings",
    options: [
      "I don't feel particularly guilty.",
      "I feel guilty over many things I have done or should have done.",
      "I feel quite guilty most of the time.",
      "I feel guilty all of the time.",
    ],
  },
  {
    id: 6,
    text: "Punishment feelings",
    options: [
      "I don't feel I am being punished.",
      "I feel I may be punished.",
      "I expect to be punished.",
      "I feel I am being punished.",
    ],
  },
  {
    id: 7,
    text: "Self-dislike",
    options: [
      "I feel the same about myself as ever.",
      "I have lost confidence in myself.",
      "I am disappointed in myself.",
      "I dislike myself.",
    ],
  },
  {
    id: 8,
    text: "Self-criticalness",
    options: [
      "I don't criticise or blame myself more than usual.",
      "I am more critical of myself than I used to be.",
      "I criticise myself for all of my faults.",
      "I blame myself for everything bad that happens.",
    ],
  },
  {
    id: 9,
    text: "Suicidal thoughts or wishes",
    options: [
      "I don't have any thoughts of killing myself.",
      "I have thoughts of killing myself, but I would not carry them out.",
      "I would like to kill myself.",
      "I would kill myself if I had the chance.",
    ],
  },
  {
    id: 10,
    text: "Crying",
    options: [
      "I don't cry any more than I used to.",
      "I cry more than I used to.",
      "I cry over every little thing.",
      "I feel like crying, but I can't.",
    ],
  },
  {
    id: 11,
    text: "Agitation",
    options: [
      "I am no more restless or wound up than usual.",
      "I feel more restless or wound up than usual.",
      "I am so restless or agitated that it's hard to stay still.",
      "I am so restless or agitated that I have to keep moving or doing something.",
    ],
  },
  {
    id: 12,
    text: "Loss of interest",
    options: [
      "I have not lost interest in other people or activities.",
      "I am less interested in other people or things than before.",
      "I have lost most of my interest in other people or things.",
      "It's hard to get interested in anything.",
    ],
  },
  {
    id: 13,
    text: "Indecisiveness",
    options: [
      "I make decisions about as well as ever.",
      "I find it more difficult to make decisions than usual.",
      "I have much greater difficulty in making decisions than I used to.",
      "I have trouble making any decisions.",
    ],
  },
  {
    id: 14,
    text: "Worthlessness",
    options: [
      "I do not feel I am worthless.",
      "I don't consider myself as worthwhile and useful as I used to.",
      "I feel more worthless as compared to other people.",
      "I feel utterly worthless.",
    ],
  },
  {
    id: 15,
    text: "Loss of energy",
    options: [
      "I have as much energy as ever.",
      "I have less energy than I used to have.",
      "I don't have enough energy to do very much.",
      "I don't have enough energy to do anything.",
    ],
  },
  {
    id: 16,
    text: "Changes in sleeping pattern",
    options: [
      "I have not experienced any change in my sleeping.",
      "I sleep somewhat more than usual. / I sleep somewhat less than usual.",
      "I sleep a lot more than usual. / I sleep a lot less than usual.",
      "I sleep most of the day. / I wake up 1–2 hours early and can't get back to sleep.",
    ],
  },
  {
    id: 17,
    text: "Irritability",
    options: [
      "I am no more irritable than usual.",
      "I am more irritable than usual.",
      "I am much more irritable than usual.",
      "I am irritable all the time.",
    ],
  },
  {
    id: 18,
    text: "Changes in appetite",
    options: [
      "I have not experienced any change in my appetite.",
      "My appetite is somewhat less than usual. / My appetite is somewhat greater than usual.",
      "My appetite is much less than before. / My appetite is much greater than usual.",
      "I have no appetite at all. / I crave food all the time.",
    ],
  },
  {
    id: 19,
    text: "Concentration difficulty",
    options: [
      "I can concentrate as well as ever.",
      "I can't concentrate as well as usual.",
      "It's hard to keep my mind on anything for very long.",
      "I find I can't concentrate on anything.",
    ],
  },
  {
    id: 20,
    text: "Tiredness or fatigue",
    options: [
      "I am no more tired or fatigued than usual.",
      "I get more tired or fatigued more easily than usual.",
      "I am too tired or fatigued to do a lot of the things I used to do.",
      "I am too tired or fatigued to do most of the things I used to do.",
    ],
  },
  {
    id: 21,
    text: "Loss of interest in sex",
    options: [
      "I have not noticed any recent change in my interest in sex.",
      "I am less interested in sex than I used to be.",
      "I am much less interested in sex now.",
      "I have lost interest in sex completely.",
    ],
  },
];

// ── BAI QUESTIONS ─────────────────────────────────────────────────
const BAI_QUESTIONS = [
  { id: 1, text: "Numbness or tingling" },
  { id: 2, text: "Feeling hot" },
  { id: 3, text: "Wobbliness in legs" },
  { id: 4, text: "Unable to relax" },
  { id: 5, text: "Fear of the worst happening" },
  { id: 6, text: "Dizzy or lightheaded" },
  { id: 7, text: "Heart pounding or racing" },
  { id: 8, text: "Unsteady" },
  { id: 9, text: "Terrified or afraid" },
  { id: 10, text: "Nervous" },
  { id: 11, text: "Feeling of choking" },
  { id: 12, text: "Hands trembling" },
  { id: 13, text: "Shaky, unsteady" },
  { id: 14, text: "Fear of losing control" },
  { id: 15, text: "Difficulty breathing" },
  { id: 16, text: "Fear of dying" },
  { id: 17, text: "Scared" },
  { id: 18, text: "Indigestion or discomfort in abdomen" },
  { id: 19, text: "Faint" },
  { id: 20, text: "Face flushed" },
  { id: 21, text: "Sweating (not due to heat)" },
];

const BAI_OPTIONS = [
  "Not at all",
  "Mildly — it did not bother me much",
  "Moderately — it was very unpleasant, but I could stand it",
  "Severely — I could barely stand it",
];

