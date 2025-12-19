import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div style={{ minWidth: 320, padding: "1rem", borderRadius: 8, background: "#fff", boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }}>
      <h3>Dashboard</h3>
      <p>This is protected content visible only to authenticated users.</p>
      <button onClick={logout} style={{ padding: "0.4rem 0.8rem" }}>Logout</button>
    </div>
  );
}
