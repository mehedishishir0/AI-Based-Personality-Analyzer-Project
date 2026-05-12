const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    answers: [
      {
        questionId: Number,
        answer: String,
      },
    ],

    scores: {
      type: Object,
      default: {},
    },

    result: {
      emotionalState: String,
      personalityType: String,
      relationshipStyle: String,
      communicationStyle: String,
      lifestyle: String,
      summary: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analysis", analysisSchema);