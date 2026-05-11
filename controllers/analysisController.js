const Analysis = require("../model/analysisModel");
const calculateScores = require("../config/scoringEngine");
const generateAnalysis = require("../service/ai.service");

const createAnalysis = async (req, res) => {
  try {
    const { answers } = req.body;

    if (!answers || answers.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Answers required",
      });
    }

    // STEP 1: scoring
    const scores = calculateScores(answers);

    // STEP 2: AI analysis
    const result = await generateAnalysis(answers, scores);

    // STEP 3: save DB
    const analysis = await Analysis.create({
      user: req.user._id,
      answers,
      scores,
      result,
    });

    return res.status(201).json({
      success: true,
      data: analysis,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createAnalysis,
};