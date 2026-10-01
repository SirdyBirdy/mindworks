/**
 * ============================================================
 *  FEATURE / ASSESSMENT MODAL
 *  Renders the BDI-II / BAI questionnaire modal, scores it, and
 *  offers download / share / booking actions. Reads question
 *  data from content/assessment-questions.js (loaded first).
 *  Triggered by onclick="openAssessmentModal('bdi'|'bai')" on
 *  the home page assessment cards.
 * ============================================================
 */

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
    // Question 9 of the BDI-II asks about thoughts of suicide. Any answer
    // above 0 (not "I don't have any thoughts of killing myself") surfaces
    // the crisis line immediately, regardless of the total score band.
    const flagCrisis = type === "bdi" && answers[8] > 0;
    const crisis = (typeof CONTENT !== 'undefined' && CONTENT.crisisLine) || null;
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
        ${flagCrisis && crisis ? `
        <div class="am-crisis-notice">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
          <span>${crisis.text} <a href="${crisis.numberHref}">${crisis.number}</a>.</span>
        </div>` : ''}
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
          <a href="${typeof CONTENT !== 'undefined' ? CONTENT.whatsapp.general : '#'}" class="am-action-btn am-action-primary" target="_blank" rel="noopener">
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
