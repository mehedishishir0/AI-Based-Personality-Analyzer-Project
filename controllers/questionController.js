const questions = require("../config/questions");

const getQuestions = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to get questions",
    });
  }
};

module.exports = {
  getQuestions,
};