const client = require("../config/openai");

const generateAnalysis = async (answers, scores) => {
 const prompt = `
You are a psychological personality analysis AI.

User may answer in Bangla, English, or mixed language.

IMPORTANT RULES:
- Detect the language automatically
- Respond in the SAME language
- Do not translate everything
- Keep emotional tone natural and human-like

User Answers:
${JSON.stringify(answers)}

Trait Scores:
${JSON.stringify(scores)}

Return ONLY valid JSON:

{
  "emotionalState": "",
  "personalityType": "",
  "relationshipStyle": "",
  "communicationStyle": "",
  "lifestyle": "",
  "summary": ""
}
`;

  const result = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" },
  });

  return JSON.parse(result.choices[0].message.content);
};

module.exports = generateAnalysis;


// const model = require("../config/gemini");

// const generateAnalysis = async (answers, scores) => {
//   try {
//     const prompt = `
// You are a psychological personality analyzer.

// User answers:
// ${JSON.stringify(answers)}

// Scores:
// ${JSON.stringify(scores)}

// Return ONLY valid JSON:
// {
//   "emotionalState": "",
//   "personalityType": "",
//   "relationshipStyle": "",
//   "communicationStyle": "",
//   "lifestyle": "",
//   "summary": ""
// }
// `;

//     const result = await model.generateContent(prompt);

//     const response = await result.response;
//     const text = response.text();

//     // safe JSON parse
//     const jsonMatch = text.match(/\{[\s\S]*\}/);

//     if (!jsonMatch) {
//       throw new Error("Invalid AI response");
//     }

//     return JSON.parse(jsonMatch[0]);

//   } catch (err) {
//     console.error("Gemini Error:", err.message);
//     throw new Error("AI analysis failed");
//   }
// };

// module.exports = generateAnalysis;