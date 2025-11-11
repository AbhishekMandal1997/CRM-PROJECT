// crm-frontend/src/App.js
import React, { useState, useEffect } from "react";
import "./styles.css";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Leads from "./pages/Leads";
import Activities from "./pages/Activities";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("login");
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  const onLogout = () => {
    setToken(null);
    setPage("login");
  };

  return (
    <div className="container">
      {token && (
        <aside className="sidebar">
          <div>
            <div className="brand">CRM<span style={{ color: "#facc15" }}>Pro+</span></div>
            <div className="nav">
              <button
                className={page === "dashboard" ? "active" : ""}
                onClick={() => setPage("dashboard")}
              >
                📊 Dashboard
              </button>
              <button
                className={page === "leads" ? "active" : ""}
                onClick={() => setPage("leads")}
              >
                👥 Leads
              </button>
              <button
                className={page === "activities" ? "active" : ""}
                onClick={() => setPage("activities")}
              >
                🗂️ Activities
              </button>
            </div>
          </div>
          <button className="logout" onClick={onLogout}>Logout</button>
        </aside>
      )}

      <main className="main">
        {!token && (
          <NavBar page={page} setPage={setPage} token={token} onLogout={onLogout} />
        )}

        {page === "register" && <Register onRegistered={() => setPage("login")} />}
        {page === "login" && (
          <Login
            onLogin={(t) => {
              setToken(t);
              setPage("dashboard");
            }}
          />
        )}
        {page === "dashboard" && <Dashboard token={token} />}
        {page === "leads" && <Leads token={token} />}
        {page === "activities" && <Activities token={token} />}

        <div className="footer">🚀 Built with ❤️ by CRM Pro+</div>
      </main>
    </div>
  );
}
