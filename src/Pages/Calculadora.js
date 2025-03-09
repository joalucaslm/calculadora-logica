import React from "react";
import "./Calculadora.css";
import Butao from "../Components/Butao";

export default function Calculadora() {
  return (
    <div className="App">
      <div className="calculadora">
        <input placeholder="Digite a lógica"></input>
        <h2>TESTE</h2>
        <Butao />
        <Butao />
        <Butao />
        <Butao />
        <Butao />
      </div>
    </div>
  );
}
