import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  priority: { type: String, enum: ["low","medium","high","urgent"], default: "low" },
  status: { type: String, enum: ["open","in-progress","resolved","closed"], default: "open" },
  assignee: String
}, { timestamps: true });

export default mongoose.model("Ticket", TicketSchema);