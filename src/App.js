import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Time from "./time";
import HappyNewYear from "./happy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Time />} />
        <Route path="/happy" element={<HappyNewYear />} />
      </Routes>
    </Router>
  );
}

export default App;
