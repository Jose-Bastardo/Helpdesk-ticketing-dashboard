import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import ticketRouter from "./routes/tickets.js";

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/tickets", ticketRouter);

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/helpdesk";

mongoose.connect(MONGODB_URI).then(() => {
  app.listen(PORT, () => console.log(`API running on :${PORT}`));
}).catch(err => {
  console.error("Mongo connect error:", err.message);
  process.exit(1);
});