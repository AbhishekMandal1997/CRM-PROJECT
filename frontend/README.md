# 📘 CRM Pro+ Frontend

A modern **Customer Relationship Management (CRM)** web application frontend built with **React.js**.  
It features a clean **glassmorphic UI**, **authentication system**, and **dynamic dashboard pages** for managing leads, activities, and analytics.

---

## 🚀 Features

- 🧊 Elegant, responsive glassmorphic UI  
- 🔐 Login and Register authentication flow  
- 🧭 Sidebar navigation with active states  
- 📊 Dashboard, Leads, and Activities pages  
- 🔁 Persistent login using localStorage  
- ⚡ Built with React + Vite (fast dev environment)

---

## 🏗️ Project Structure

crm-frontend/
│
├── src/
│ ├── components/
│ │ └── Card.js
│ │ └── Input.js
│ │ └── Modal.js
│ │ └── Navbar.js
│ │ └── ProtectedRoutes.js
│ │
│ ├── pages/
│ │ ├── Login.js
│ │ ├── Register.js
│ │ ├── Dashboard.js
│ │ ├── Leads.js
│ │ └── Activities.js
│ │
│ ├── App.js
│ ├── styles.css
│ └── index.jsx
│
├── package.json
├── vite.config.js
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/abhishekabk1997/crm-frontend.git
cd crm-frontend
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start the development server
bash
Copy code
npm run dev
👉 The app will start on http://localhost:5173

🔗 Backend Connection
The frontend connects to your CRM Backend API (Node.js + Express + Prisma).
Make sure your backend is running and update the API base URL in the frontend files (like Login.jsx, Register.jsx):

javascript
Copy code
🧩 Tech Stack
Technology	Purpose
React.js (Vite)	Frontend framework
CSS3 (Glassmorphism)	Styling and layout
JWT Auth	Authentication handling
LocalStorage	Token persistence
REST API	Backend communication

🎨 UI Highlights
Modern glassmorphism design

Soft gradients, blur effects, and minimal layout

Smooth transitions between pages

Sidebar with icons and hover effects

Fully responsive and mobile-friendly

🧠 Future Improvements
📈 Add charts and analytics (Chart.js / Recharts)

🧑‍💼 Role-based user access

🌓 Dark mode toggle

🔔 Notification system

🌍 Global state management (Redux / Zustand)