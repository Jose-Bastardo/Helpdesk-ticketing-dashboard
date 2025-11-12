import React, { useState } from "react";
const API = "http://localhost:4000";

export default function TicketForm({ onCreated }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  async function submit(e) {
    e.preventDefault();
    await fetch(`${API}/api/tickets`, { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, priority }) });
    setTitle(""); setPriority("low");
    onCreated?.();
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8 }}>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Ticket title" required />
      <select value={priority} onChange={e=>setPriority(e.target.value)}>
        <option>low</option><option>medium</option><option>high</option><option>urgent</option>
      </select>
      <button>Create</button>
    </form>
  );
}