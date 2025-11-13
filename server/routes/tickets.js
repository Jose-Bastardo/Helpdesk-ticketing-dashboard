import express from "express";
import Ticket from "../models/Ticket.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { status, priority, page = 1, limit = 20 } = req.query;
  const q = {};
  if (status) q.status = status;
  if (priority) q.priority = priority;
  const items = await Ticket.find(q)
    .sort({ createdAt: -1 })
    .skip((+page - 1) * +limit)
    .limit(+limit);
  const total = await Ticket.countDocuments(q);
  res.json({ items, total });
});

router.post("/", async (req, res) => {
  const t = await Ticket.create(req.body);
  res.status(201).json(t);
});

router.put("/:id", async (req, res) => {
  const t = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(t);
});

router.delete("/:id", async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;