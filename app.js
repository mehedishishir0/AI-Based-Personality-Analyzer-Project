const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
const { errorResponse } = require("./response/response");
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["*"],
  credentials: true,
}));

// routes
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/analysis", require("./routes/analysisRoute"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  next(createError(404, "route not exist"));
});

app.use((error, req, res, next) => {
  errorResponse(res, {
    statusCode: error.statusCode,
    message: error.message,
  });
});

module.exports = app;