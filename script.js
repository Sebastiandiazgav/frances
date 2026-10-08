// ====== Estado ======
let current = 0;
let lang = "fr";
let slides = [];

const deck = document.getElementById("deck");
const dotsEl = document.getElementById("dots");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// ====== Construcción de slides ======
function buildCover() {
  const s = document.createElement("section");
  s.className = "slide";
  s.innerHTML = `
    <div class="cover">
      <div class="big-emoji">👨‍👩‍👧‍👦</div>
      <div class="kicker" data-i18n-kicker>Présentation</div>
      <h1>Ma famille</h1>
      <p class="sub" data-i18n-sub>4 personnes, 4 histoires</p>
      <p class="author">Sebastián Díaz</p>
    </div>`;
  return s;
}

function buildPerson(p) {
  const s = document.createElement("section");
  s.className = "slide";
  const cards = p.cards.map((c, i) => `
    <div class="card" tabindex="0" data-card>
      <div class="card-inner">
        <div class="card-face card-front">
          <div class="c-icon">${c.icon}</div>
          <div class="c-label" data-label='${JSON.stringify(c.label)}'>${c.label[lang]}</div>
          <div class="c-hint">?</div>
        </div>
        <div class="card-face card-back" style="background:linear-gradient(160deg, ${p.accent}, ${shade(p.accent, -18)})">
          <div class="c-icon-sm">${c.icon}</div>
          <div class="c-value" data-value='${JSON.stringify(c.value)}'>${c.value[lang]}</div>
        </div>
      </div>
    </div>`).join("");

  s.innerHTML = `
    <div class="person">
      <div class="person-head">
        <div class="avatar" style="background:linear-gradient(145deg, ${p.accent}, ${shade(p.accent, -25)})">${p.emoji}</div>
        <div class="person-meta">
          <div class="role" data-role='${JSON.stringify(p.role)}'>${p.role[lang]}</div>
          <div class="name">${p.name} <span class="flag">${p.flag}</span></div>
        </div>
      </div>
      <div class="cards">${cards}</div>
    </div>`;

  // flip al click / Enter
  s.querySelectorAll("[data-card]").forEach(card => {
    const toggle = () => card.classList.toggle("flipped");
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });
  return s;
}

function buildQuiz() {
  const s = document.createElement("section");
  s.className = "slide";
  s.innerHTML = `
    <div class="quiz">
      <h2>Petit quiz</h2>
      <p class="q-sub" data-i18n-quizsub>Teste-toi sur ma famille</p>
      <div class="quiz-question" id="qText"></div>
      <div class="quiz-options" id="qOptions"></div>
      <div class="quiz-score" id="qScore"></div>
      <div class="quiz-progress" id="qProgress"></div>
    </div>`;
  s._initQuiz = () => initQuiz(s);
  return s;
}

function buildFinal() {
  const s = document.createElement("section");
  s.className = "slide";
  s.innerHTML = `
    <div class="cover">
      <div class="big-emoji">💙</div>
      <h1>Merci !</h1>
      <p class="sub" data-i18n-merci>Des questions ?</p>
    </div>`;
  return s;
}

// ====== Quiz logic ======
function initQuiz(slideEl) {
  let qi = 0, score = 0;
  const qText = slideEl.querySelector("#qText");
  const qOptions = slideEl.querySelector("#qOptions");
  const qScore = slideEl.querySelector("#qScore");
  const qProgress = slideEl.querySelector("#qProgress");

  function render() {
    if (qi >= QUIZ.length) {
      qText.textContent = lang === "fr" ? "Bravo ! 🎉" : "¡Bravo! 🎉";
      qOptions.innerHTML = "";
      qScore.textContent = `${lang === "fr" ? "Score" : "Puntaje"}: ${score}/${QUIZ.length}`;
      qProgress.textContent = "";
      return;
    }
    const item = QUIZ[qi];
    qText.textContent = item.q[lang];
    qProgress.textContent = `${qi + 1} / ${QUIZ.length}`;
    qScore.textContent = "";
    qOptions.innerHTML = "";
    item.options.forEach((opt, idx) => {
      const b = document.createElement("button");
      b.className = "quiz-opt";
      b.textContent = opt;
      b.addEventListener("click", () => {
        const all = qOptions.querySelectorAll(".quiz-opt");
        all.forEach(x => x.disabled = true);
        if (idx === item.answer) { b.classList.add("correct"); score++; }
        else {
          b.classList.add("wrong");
          all[item.answer].classList.add("correct");
        }
        setTimeout(() => { qi++; render(); }, 1100);
      });
      qOptions.appendChild(b);
    });
  }
  render();
}

// ====== Util: oscurecer/aclarar color hex ======
function shade(hex, percent) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  r = Math.max(0, Math.min(255, r + Math.round(255 * (percent / 100))));
  g = Math.max(0, Math.min(255, g + Math.round(255 * (percent / 100))));
  b = Math.max(0, Math.min(255, b + Math.round(255 * (percent / 100))));
  return `rgb(${r},${g},${b})`;
}

// ====== Montaje ======
function build() {
  deck.appendChild(buildCover());
  FAMILY.forEach(p => deck.appendChild(buildPerson(p)));
  deck.appendChild(buildQuiz());
  deck.appendChild(buildFinal());
  slides = Array.from(deck.querySelectorAll(".slide"));

  // dots
  slides.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "dot";
    d.addEventListener("click", () => goTo(i));
    dotsEl.appendChild(d);
  });
  goTo(0);
}

// ====== Navegación ======
function goTo(i) {
  current = Math.max(0, Math.min(slides.length - 1, i));
  slides.forEach((s, idx) => {
    s.classList.toggle("active", idx === current);
    if (idx === current && s._initQuiz) s._initQuiz(); // reinicia quiz al entrar
  });
  Array.from(dotsEl.children).forEach((d, idx) => d.classList.toggle("active", idx === current));
  progressFill.style.width = `${(current / (slides.length - 1)) * 100}%`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" || e.key === "PageDown") next();
  else if (e.key === "ArrowLeft" || e.key === "PageUp") prev();
  else if (e.key === "f" || e.key === "F") toggleFullscreen();
});

// ====== Idioma ======
document.getElementById("langSwitch").addEventListener("click", e => {
  const btn = e.target.closest(".lang-btn");
  if (!btn) return;
  lang = btn.dataset.lang;
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b === btn));
  applyLang();
});

function applyLang() {
  // cartes
  document.querySelectorAll("[data-label]").forEach(el => {
    el.textContent = JSON.parse(el.dataset.label)[lang];
  });
  document.querySelectorAll("[data-value]").forEach(el => {
    el.textContent = JSON.parse(el.dataset.value)[lang];
  });
  document.querySelectorAll("[data-role]").forEach(el => {
    el.textContent = JSON.parse(el.dataset.role)[lang];
  });
  // textos fijos
  const t = {
    kicker: { fr: "Présentation", es: "Presentación" },
    sub: { fr: "4 personnes, 4 histoires", es: "4 personas, 4 historias" },
    quizsub: { fr: "Teste-toi sur ma famille", es: "Ponte a prueba sobre mi familia" },
    merci: { fr: "Des questions ?", es: "¿Preguntas?" }
  };
  setText("[data-i18n-kicker]", t.kicker[lang]);
  setText("[data-i18n-sub]", t.sub[lang]);
  setText("[data-i18n-quizsub]", t.quizsub[lang]);
  setText("[data-i18n-merci]", t.merci[lang]);
  // reinicia quiz visible si aplica
  const active = slides[current];
  if (active && active._initQuiz) active._initQuiz();
}

function setText(sel, text) {
  const el = document.querySelector(sel);
  if (el) el.textContent = text;
}

// ====== Pantalla completa ======
function toggleFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
}
document.getElementById("fullscreenBtn").addEventListener("click", toggleFullscreen);

// Oculta el hint después de unos segundos
setTimeout(() => {
  const h = document.getElementById("hint");
  if (h) h.style.transition = "opacity 1s", h.style.opacity = "0";
}, 6000);

// Go!
build();
