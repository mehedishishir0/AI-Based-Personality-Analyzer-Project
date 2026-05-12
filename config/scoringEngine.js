const calculateScores = (answers) => {
  const text = answers.map(a => a.answer).join(" ").toLowerCase();

  const scores = {
    introvert: 0,
    extrovert: 0,
    overthinker: 0,
    anxiety: 0,
    emotionalSensitive: 0,
    trustIssues: 0,
  };

  // ─────────────────────────────
  // 🧠 INTROVERT DETECTION
  // ─────────────────────────────
  if (
    text.includes("alone") ||
    text.includes("lonely") ||
    text.includes("একলা") ||
    text.includes("একাই") ||
    text.includes("silent") ||
    text.includes("quiet")
  ) {
    scores.introvert += 4;
  }

  // ─────────────────────────────
  // 🧠 OVERTHINKING
  // ─────────────────────────────
  if (
    text.includes("overthink") ||
    text.includes("think too much") ||
    text.includes("চিন্তা") ||
    text.includes("always think") ||
    text.includes("সবকিছু ভাবি")
  ) {
    scores.overthinker += 4;
  }

  // ─────────────────────────────
  // 🧠 ANXIETY / WORRY
  // ─────────────────────────────
  if (
    text.includes("worried") ||
    text.includes("anxious") ||
    text.includes("stress") ||
    text.includes("tension") ||
    text.includes("চিন্তা করি") ||
    text.includes("ভয় লাগে")
  ) {
    scores.anxiety += 4;
  }

  // ─────────────────────────────
  // 🧠 EMOTIONAL SENSITIVITY
  // ─────────────────────────────
  if (
    text.includes("hurt") ||
    text.includes("cry") ||
    text.includes("emotional") ||
    text.includes("কষ্ট") ||
    text.includes("hurt me") ||
    text.includes("feel bad")
  ) {
    scores.emotionalSensitive += 4;
  }

  // ─────────────────────────────
  // 🧠 TRUST ISSUES
  // ─────────────────────────────
  if (
    text.includes("trust") ||
    text.includes("betray") ||
    text.includes("lie") ||
    text.includes("বিশ্বাস") ||
    text.includes("dhoka") ||
    text.includes("cheat")
  ) {
    scores.trustIssues += 4;
  }

  // ─────────────────────────────
  // 🧠 EXTROVERT SIGNAL
  // ─────────────────────────────
  if (
    text.includes("friends") ||
    text.includes("talk") ||
    text.includes("people") ||
    text.includes("hang out") ||
    text.includes("আড্ডা") ||
    text.includes("সবাই")
  ) {
    scores.extrovert += 3;
  }

  // ─────────────────────────────
  // ⚖️ BONUS LOGIC (IMPORTANT UPGRADE)
  // ─────────────────────────────

  // If introvert + overthinker both high → stronger emotional depth
  if (scores.introvert > 0 && scores.overthinker > 0) {
    scores.overthinker += 1;
    scores.emotionalSensitive += 1;
  }

  // If trust issues + emotional sensitive → relationship instability signal
  if (scores.trustIssues > 0 && scores.emotionalSensitive > 0) {
    scores.trustIssues += 1;
    scores.anxiety += 1;
  }

  return scores;
};

module.exports = calculateScores;