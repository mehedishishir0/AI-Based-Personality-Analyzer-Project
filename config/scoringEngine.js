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

  // introvert signals
  if (text.includes("alone") || text.includes("silent")) {
    scores.introvert += 3;
  }

  // overthinking
  if (text.includes("think") || text.includes("overthink")) {
    scores.overthinker += 3;
  }

  // anxiety
  if (text.includes("worried") || text.includes("anxious")) {
    scores.anxiety += 3;
  }

  // emotional pain
  if (text.includes("hurt") || text.includes("cry")) {
    scores.emotionalSensitive += 3;
  }

  // trust issues
  if (text.includes("trust") || text.includes("betray")) {
    scores.trustIssues += 3;
  }

  // extrovert
  if (text.includes("friends") || text.includes("talk")) {
    scores.extrovert += 2;
  }

  return scores;
};

module.exports = calculateScores;