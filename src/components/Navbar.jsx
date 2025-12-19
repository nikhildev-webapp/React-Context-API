import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const langLabel = {
  en: "English",
  hi: "हिन्दी",
};

export default function Navbar() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { cartCount } = useContext(CartContext);
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 1rem", borderBottom: "1px solid #eaeaea" }}>
      <div style={{ fontWeight: 600 }}>React-Context-Api</div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <div>Language: <strong>{langLabel[language]}</strong></div>
        <button onClick={toggleLanguage} style={{ padding: "0.35rem 0.75rem" }}>
          {language === "en" ? "Switch to हिन्दी" : "Switch to English"}
        </button>
        <div style={{ marginLeft: 8 }}>
          <strong>Cart:</strong> <span>{cartCount}</span>
        </div>
        <div style={{ marginLeft: 12 }}>
          {isLoggedIn ? (
            <button onClick={logout} style={{ padding: "0.35rem 0.75rem" }}>Logout</button>
          ) : (
            <button onClick={login} style={{ padding: "0.35rem 0.75rem" }}>Login</button>
          )}
        </div>
      </div>
    </nav>
  );
}
