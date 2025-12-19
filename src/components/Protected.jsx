import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Protected({ children }) {
  const { isLoggedIn, login } = useContext(AuthContext);

  if (isLoggedIn) return <>{children}</>;

  return (
    <div style={{ padding: 12, border: "1px solid #f1f1f1", borderRadius: 8 }}>
      <div style={{ marginBottom: 8, fontWeight: 600 }}>Access Denied</div>
      <div style={{ marginBottom: 8 }}>You must be logged in to view this content.</div>
      <button onClick={login} style={{ padding: "0.35rem 0.7rem" }}>Login</button>
    </div>
  );
}
