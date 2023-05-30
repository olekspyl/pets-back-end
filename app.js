require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");

const petsRouter = require("./routes/api/pets");
const authRouter = require("./routes/api/users");
const noticesRouter = require("./routes/api/notices");
const newsRouter = require("./routes/api/news");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/pets", petsRouter);
app.use("/api/users", authRouter);
app.use("/api/notices", noticesRouter);
app.use("/api/news", newsRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use((req, res) => {
  return res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json(message);
});

module.exports = app;
