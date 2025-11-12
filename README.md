# Help Desk Ticket Dashboard (MERN)
A minimal Jira-style board to create, assign, and track IT tickets with charts-ready endpoints.

## ✨ Features
- CRUD tickets (title, description, priority, status, assignee)
- Filters (by priority/status), pagination-ready list
- REST API (JSON), CORS enabled
- Seed script for demo data

## 🧰 Tech
- Node.js + Express, MongoDB + Mongoose
- React + Vite

## 🚀 Quick Start
### Server
```bash
npm install
cp .env.example .env
# set MONGODB_URI=mongodb://127.0.0.1:27017/helpdesk
node server/seed.js
node server/server.js