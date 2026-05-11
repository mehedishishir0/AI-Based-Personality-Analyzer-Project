const express = require("express");
const router = express.Router();

const { protected } = require("../middlewares/authMiddilewares");
const { createAnalysis } = require("../controllers/analysisController");

router.post("/create", protected, createAnalysis);

module.exports = router;