(function () {
  const raw = new URLSearchParams(location.search).get("center");
  if (!raw) return;
  let config;
  try { config = JSON.parse(raw); } catch (_) { return; }
  if (!config.token || !Array.isArray(config.cards) || config.cards.length < 2) return;
  const cards = config.cards;
  const practiceCounts = new Map(cards.map(card => [card.id,
    Number.isSafeInteger(config.practiceCounts?.[card.id]) && config.practiceCounts[card.id] > 0 ? config.practiceCounts[card.id] : 0]));
  window.DEUTSCHSTADT_GAME_DRAW = function (pool, limit) {
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Shuffle ties, then prioritize less-practiced words across completed rounds and restarts.
    const drawn = shuffled.sort((a, b) => (practiceCounts.get(a.id) || 0) - (practiceCounts.get(b.id) || 0)).slice(0, limit);
    drawn.forEach(card => practiceCounts.set(card.id, (practiceCounts.get(card.id) || 0) + 1));
    return drawn;
  };
  window.DEUTSCHSTADT_JA_NEIN_DECKS = [{ id: "everyday-objects-basic", label: config.title, cards }];
  let audio = null;
  window.DEUTSCHSTADT_GAME_SPEAK = function (text) {
    if (audio) audio.pause();
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    const card = cards.find((item) => item.front === text);
    if (!card?.audio) {
      const status = document.getElementById("status") || document.getElementById("feedback");
      if (status) status.textContent = "此词暂缺音频。";
      return;
    }
    audio = new Audio(card.audio);
    audio.play().catch(() => {
      const status = document.getElementById("status") || document.getElementById("feedback");
      if (status) status.textContent = "音频未能播放，请点击文字重试。";
    });
  };
  let round = 1, completed = false;
  let answerSequence = 0;
  window.DEUTSCHSTADT_GAME_ANSWER = (result) => {
    parent.postMessage({ type: "deutschstadt-game-answer", token: config.token, round, sequence: ++answerSequence, result }, "*");
  };
  document.addEventListener("click", (event) => {
    if (event.target.closest("#restart, #again")) { round++; completed = false; }
  }, true);
  window.DEUTSCHSTADT_GAME_DONE = (result) => {
    if (completed) return;
    completed = true;
    parent.postMessage({ type: "deutschstadt-game-complete", token: config.token, round, result }, "*");
  };
  window.addEventListener("pagehide", () => { if (audio) audio.pause(); if ("speechSynthesis" in window) speechSynthesis.cancel(); });
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href="games.html"]').forEach((link) => {
      link.textContent = "返回游戏中心";
      link.addEventListener("click", (event) => { event.preventDefault(); parent.postMessage({ type: "deutschstadt-game-return", token: config.token }, "*"); });
    });
  });
})();
