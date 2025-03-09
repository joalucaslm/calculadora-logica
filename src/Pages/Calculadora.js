import React from "react";
import "./Calculadora.css";
import Butao from "../Components/Butao";

export default function Calculadora() {
  return (
    <div className="App">
      <div className="calculadora">
        <textarea
          className="inputCalculadora"
          placeholder="Digite a lógica"
        ></textarea>
        <div className="butoes">
            <table>
                <tr>
                    <th><Butao value="A" /></th>
                    <th><Butao value="B" /></th>
                    <th><Butao value="C" /></th>
                    <th><Butao value="D" /></th>
                    <th><Butao value="C" color="var(--vermelho)" /></th>
                    <th><Butao value="⌫" color="var(--laranja)" /></th>

                </tr>
                <tr>
                    <th><Butao value="E" /></th>
                    <th><Butao value="F" /></th>
                    <th><Butao value="G" /></th>
                    <th><Butao value="H" /></th>
                    <th><Butao value="A" /></th>
                    <th><Butao value="A" /></th>
                </tr>
                <tr>
                    <th><Butao value="I" /></th>
                    <th><Butao value="J" /></th>
                    <th><Butao value="K" /></th>
                    <th><Butao value="L" /></th>
                    <th><Butao value="A" /></th>
                    <th><Butao value="A" /></th>
                </tr>
                <tr>
                    <th><Butao value="M" /></th>
                    <th><Butao value="N" /></th>
                    <th><Butao value="O" /></th>
                    <th><Butao value="P" /></th>
                    <th><Butao value="A" /></th>
                    <th><Butao value="A" /></th>
                </tr>
                <tr>
                    <th><Butao value="Q" /></th>
                    <th><Butao value="R" /></th>
                    <th><Butao value="S" /></th>
                    <th><Butao value="T" /></th>
                    <th><Butao value="V" color="var(--verde)" /></th>
                    <th><Butao value="A" /></th>
                </tr>
                <tr>
                    <th><Butao value="U" /></th>
                    <th><Butao value="V" /></th>
                    <th><Butao value="W" /></th>
                    <th><Butao value="X" /></th>
                    <th><Butao value="F" color="var(--vermelho)" /></th>
                    <th><Butao value="A" /></th>
                </tr>
            </table>
        </div>
      </div>
    </div>
  );
}
