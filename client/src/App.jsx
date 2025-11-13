import React, { useEffect, useState } from "react";
import TicketForm from "./components/TicketForm.jsx";
import TicketTable from "./components/TicketTable.jsx";

const API = import.meta.env.VITE_API || "http://localhost:4000";

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [filters, setFilters] = useState({});

  async function load() {
    const qs = new URLSearchParams(filters).toString();
    const res = await fetch(`${API}/api/tickets?${qs}`);
    const data = await res.json();
    setTickets(data.items);
  }
  useEffect(() => { load(); }, [JSON.stringify(filters)]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Help Desk Ticket Dashboard</h1>
      <TicketForm onCreated={load} />
      <div style={{ marginTop: 24 }}>
        <label>Status:&nbsp;
          <select onChange={e => setFilters(f => ({...f, status: e.target.value || undefined}))}>
            <option value="">Any</option><option>open</option><option>in-progress</option><option>resolved</option><option>closed</option>
          </select>
        </label>
        &nbsp;&nbsp;
        <label>Priority:&nbsp;
          <select onChange={e => setFilters(f => ({...f, priority: e.target.value || undefined}))}>
            <option value="">Any</option><option>low</option><option>medium</option><option>high</option><option>urgent</option>
          </select>
        </label>
      </div>
      <TicketTable items={tickets} onChanged={load} />
    </div>
  );
}