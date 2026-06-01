import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/octofit";

mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const port = Number(process.env.PORT || 8000);
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
