/**
 * ─────────────────────────────────────────────────────────────────
 *  MINDWORKS COUNSELLING — ASSESSMENTS (BDI-II & BAI)
 *  Beck Depression Inventory II (BDI-II) — 21 items
 *  Beck Anxiety Inventory (BAI) — 21 items
 *  Scoring, result interpretation, share/download functionality
 * ─────────────────────────────────────────────────────────────────
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

// ── SCORING ───────────────────────────────────────────────────────
function scoreBDI(answers) {
  const total = answers.reduce((s, a) => s + a, 0);
  let level, color, description;
  if (total <= 13) {
    level = "Minimal depression";
    color = "#5a6b4e"; // moss
    description = "Your score suggests minimal or no depression symptoms at this time.";
  } else if (total <= 19) {
    level = "Mild depression";
    color = "#d4a245";
    description = "Your score suggests mild depression. Many people find therapy helpful at this stage, before things become harder to manage.";
  } else if (total <= 28) {
    level = "Moderate depression";
    color = "#d46a45"; // accent
    description = "Your score suggests moderate depression. This level often responds well to therapy. We'd encourage you to share this with a counsellor.";
  } else {
    level = "Severe depression";
    color = "#8b3a2a";
    description = "Your score suggests severe depression. Please share these results with a mental health professional — you don't need to be managing this alone.";
  }
  return { total, level, color, description, maxScore: 63 };
}

function scoreBAI(answers) {
  const total = answers.reduce((s, a) => s + a, 0);
  let level, color, description;
  if (total <= 7) {
    level = "Minimal anxiety";
    color = "#5a6b4e";
    description = "Your score suggests minimal anxiety at this time.";
  } else if (total <= 15) {
    level = "Mild anxiety";
    color = "#d4a245";
    description = "Your score suggests mild anxiety. Worth keeping an eye on, and something a therapist can help you understand better.";
  } else if (total <= 25) {
    level = "Moderate anxiety";
    color = "#d46a45";
    description = "Your score suggests moderate anxiety. A therapist can help you understand what's driving it and what might help.";
  } else {
    level = "Severe anxiety";
    color = "#8b3a2a";
    description = "Your score suggests severe anxiety. Please share these results with a mental health professional — support is available.";
  }
  return { total, level, color, description, maxScore: 63 };
}

// ── REPORT TEXT ───────────────────────────────────────────────────
function buildReportText(type, score, date) {
  const typeName = type === "bdi" ? "Beck Depression Inventory (BDI-II)" : "Beck Anxiety Inventory (BAI)";
  return `MINDWORKS COUNSELLING — SELF-ASSESSMENT REPORT
================================================

Assessment: ${typeName}
Date: ${date}
Score: ${score.total} / ${score.maxScore}
Interpretation: ${score.level}

${score.description}

IMPORTANT NOTE:
This questionnaire is a self-report tool for informational purposes only. It does not constitute a clinical diagnosis. Please share these results with your counsellor or a qualified mental health professional who can provide an accurate assessment and appropriate support.

Book a free 15-minute discovery call at mindworkscounselling.com
WhatsApp: +91 90674 85858

================================================
mindworkscounselling.com · Pune, India
`;
}

// ── DOWNLOAD PDF / TEXT ───────────────────────────────────────────
function downloadReport(type, score) {
  const date = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const text = buildReportText(type, score, date);
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mindworks-${type}-assessment-${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── SHARE (Web Share API with fallback) ──────────────────────────
function shareReport(type, score) {
  const typeName = type === "bdi" ? "Depression" : "Anxiety";
  const shareText = `My Mindworks ${typeName} Assessment\nScore: ${score.total}/${score.maxScore} — ${score.level}\n\nTake yours at mindworkscounselling.com`;
  if (navigator.share) {
    navigator.share({ title: `Mindworks ${typeName} Assessment`, text: shareText });
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      alert("Result copied to clipboard — paste it into WhatsApp, email, or anywhere you'd like to share it.");
    });
  }
}

// ── MODAL RENDERER ────────────────────────────────────────────────
function openAssessmentModal(type) {
  const questions = type === "bdi" ? BDI_QUESTIONS : BAI_QUESTIONS;
  const options = type === "bdi" ? null : BAI_OPTIONS;
  const title = type === "bdi" ? "Depression check" : "Anxiety gauge";
  const subtitle = type === "bdi" ? "Beck Depression Inventory — BDI-II" : "Beck Anxiety Inventory — BAI";

  const answers = new Array(questions.length).fill(null);
  let currentQ = 0;

  // Build modal HTML
  const modal = document.createElement("div");
  modal.className = "assessment-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", title);

  modal.innerHTML = `
    <div class="am-backdrop"></div>
    <div class="am-panel">
      <button class="am-close" aria-label="Close">&times;</button>
      <div class="am-inner">
        <div class="am-header">
          <div class="am-eyebrow">${subtitle}</div>
          <h2 class="am-title">${title}</h2>
          <div class="am-disclaimer">These questions are for informational purposes only and do not constitute a clinical diagnosis. Share your score with your counsellor.</div>
        </div>
        <div class="am-progress-wrap">
          <div class="am-progress-bar"><div class="am-progress-fill" id="am-fill"></div></div>
          <div class="am-progress-label"><span id="am-qnum">1</span> of ${questions.length}</div>
        </div>
        <div class="am-question-area" id="am-question-area"></div>
        <div class="am-nav">
          <button class="am-back" id="am-back" disabled>← Back</button>
          <button class="am-next" id="am-next" disabled>Next →</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = "hidden";

  function renderQuestion() {
    const q = questions[currentQ];
    const opts = options || q.options;
    const fill = document.getElementById("am-fill");
    const qnum = document.getElementById("am-qnum");
    const area = document.getElementById("am-question-area");
    const backBtn = document.getElementById("am-back");
    const nextBtn = document.getElementById("am-next");

    fill.style.width = `${((currentQ) / questions.length) * 100}%`;
    qnum.textContent = currentQ + 1;
    backBtn.disabled = currentQ === 0;

    const selected = answers[currentQ];
    nextBtn.disabled = selected === null;
    nextBtn.textContent = currentQ === questions.length - 1 ? "See my results" : "Next →";

    area.innerHTML = `
      <div class="am-q-text">${type === "bai" ? `Over the past week, how much have you been bothered by: <strong>${q.text}</strong>` : q.text}</div>
      <div class="am-options">
        ${opts.map((opt, i) => `
          <label class="am-option ${selected === i ? "selected" : ""}">
            <input type="radio" name="aq" value="${i}" ${selected === i ? "checked" : ""}>
            <span class="am-option-val">${i}</span>
            <span class="am-option-txt">${opt}</span>
          </label>
        `).join("")}
      </div>
    `;

    area.querySelectorAll(".am-option").forEach(label => {
      label.addEventListener("click", () => {
        const val = parseInt(label.querySelector("input").value);
        answers[currentQ] = val;
        area.querySelectorAll(".am-option").forEach(l => l.classList.remove("selected"));
        label.classList.add("selected");
        document.getElementById("am-next").disabled = false;
      });
    });
  }

  function showResults() {
    const score = type === "bdi" ? scoreBDI(answers) : scoreBAI(answers);
    const fill = document.getElementById("am-fill");
    const area = document.getElementById("am-question-area");
    const nav = modal.querySelector(".am-nav");
    const progress = modal.querySelector(".am-progress-wrap");

    fill.style.width = "100%";
    progress.style.display = "none";
    nav.style.display = "none";

    const pct = Math.round((score.total / score.maxScore) * 100);
    area.innerHTML = `
      <div class="am-results">
        <div class="am-score-ring">
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="var(--border)" stroke-width="8"/>
            <circle cx="60" cy="60" r="50" fill="none" stroke="${score.color}" stroke-width="8"
              stroke-dasharray="${Math.PI * 100}" stroke-dashoffset="${Math.PI * 100 * (1 - pct / 100)}"
              stroke-linecap="round" transform="rotate(-90 60 60)" style="transition:stroke-dashoffset 1s ease"/>
          </svg>
          <div class="am-score-center">
            <div class="am-score-num">${score.total}</div>
            <div class="am-score-denom">/ ${score.maxScore}</div>
          </div>
        </div>
        <div class="am-result-level" style="color:${score.color}">${score.level}</div>
        <p class="am-result-desc">${score.description}</p>
        <div class="am-result-notice">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Share this result with your counsellor — it helps them understand where you're starting from.
        </div>
        <div class="am-result-actions">
          <button class="am-action-btn" id="am-download">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Download report
          </button>
          <button class="am-action-btn" id="am-share">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            Share score
          </button>
          <a href="${typeof CONTENT !== 'undefined' ? CONTENT.site.bookingUrl : '#'}" class="am-action-btn am-action-primary" target="_blank" rel="noopener">
            Book free 15-min call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
        </div>
      </div>
    `;

    document.getElementById("am-download").addEventListener("click", () => downloadReport(type, score));
    document.getElementById("am-share").addEventListener("click", () => shareReport(type, score));
  }

  renderQuestion();

  document.getElementById("am-next").addEventListener("click", () => {
    if (currentQ < questions.length - 1) {
      currentQ++;
      renderQuestion();
    } else {
      showResults();
    }
  });

  document.getElementById("am-back").addEventListener("click", () => {
    if (currentQ > 0) { currentQ--; renderQuestion(); }
  });

  function closeModal() {
    modal.remove();
    document.body.style.overflow = "";
  }
  modal.querySelector(".am-close").addEventListener("click", closeModal);
  modal.querySelector(".am-backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") { closeModal(); document.removeEventListener("keydown", esc); }
  });
}
