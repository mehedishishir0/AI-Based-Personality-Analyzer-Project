const Analysis = require("../model/analysisModel");
const generateAnalysis = require("../service/ai.service");

const createAnalysis = async (req, res) => {
  try {
    const { answers } = req.body;

    // ✅ validation
    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Answers are required",
      });
    }

    // ✅ AI handles everything now
    const aiResult = await generateAnalysis(answers);

    // ✅ save in DB
    const analysis = await Analysis.create({
      answers,
      scores: aiResult.scores,
      result: aiResult.analysis,
    });

    return res.status(201).json({
      success: true,
      data: analysis,
    });

  } catch (error) {
    console.error("Analysis Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate analysis",
    });
  }
};

module.exports = {
  createAnalysis,
};