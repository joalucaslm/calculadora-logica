import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculadora from "./Pages/Calculadora";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculadora />} />
      </Routes>
    </Router>
  );
}
