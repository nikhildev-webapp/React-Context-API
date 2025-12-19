import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div style={{ minWidth: 260, padding: "1rem", borderRadius: 8, background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {cart.map((it) => (
            <li key={it.id} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #eee" }}>
              <div>
                <div style={{ fontWeight: 600 }}>{it.name}</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>₹{it.price}</div>
              </div>
              <div>
                <button onClick={() => removeItem(it.id)} style={{ padding: "0.25rem 0.6rem" }}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
