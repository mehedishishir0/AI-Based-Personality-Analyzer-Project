const model = require("../config/openai");

const generateAnalysis = async (answers) => {
  const prompt = `
You are an advanced psychological personality analysis AI.

Analyze the emotional meaning, behavior patterns, thinking style, communication style, and relationship psychology of the user.

IMPORTANT:
- Understand meaning, not just keywords
- User may answer in Bangla, English, or mixed language
- Respond in the SAME language style as the user
- Make the analysis natural and human-like
- Do NOT give medical diagnosis

User Answers:
${JSON.stringify(answers, null, 2)}

Return ONLY valid JSON:

{
  "scores": {
    "introvert": 0,
    "extrovert": 0,
    "overthinker": 0,
    "anxiety": 0,
    "emotionalSensitive": 0,
    "trustIssues": 0
  },
  "analysis": {
    "emotionalState": "",
    "personalityType": "",
    "relationshipStyle": "",
    "communicationStyle": "",
    "lifestyle": "",
    "summary": ""
  }
}

IMPORTANT:
- Scores must be between 0-10
- Base scores on emotional meaning and behavioral patterns
`;

  const response = await model.chat.completions.create({
    model: "gpt-4o-mini",

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],

    response_format: {
      type: "json_object",
    },
  });

  return JSON.parse(response.choices[0].message.content);
};

module.exports = generateAnalysis;