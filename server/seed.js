import mongoose from "mongoose";
import dotenv from "dotenv";
import Ticket from "./models/Ticket.js";

dotenv.config();
const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/helpdesk";

const sample = [
  { title: "Printer not responding", priority: "medium", status: "open", assignee: "Jose" },
  { title: "New user onboarding", priority: "high", status: "in-progress", assignee: "Alex" },
  { title: "Wi-Fi dropouts in lobby", priority: "urgent", status: "open", assignee: "Sam" }
];

await mongoose.connect(uri);
await Ticket.deleteMany({});
await Ticket.insertMany(sample);
console.log("Seeded tickets:", sample.length);
await mongoose.disconnect();