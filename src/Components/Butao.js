import React from "react";
import "./Butao.css";

export default function Butao({ value, color }) {
  return (
    <div className="butao" style={{ backgroundColor: color }}>
      <button>{value}</button>
    </div>
  );
}
