import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Toolbar from "./toolbar";
import Landing from "./landing";
import React from "react";
import "./main-page.css";
import SummaryList from "./summary";

function App() {
  return (
    <Router>
      <div className="container">
        <Toolbar />
        <Routes>
          <Route path="/new" element={<Landing />}></Route>
          <Route path="/features" element={<SummaryList />}></Route>
          <Route path="/pricing.html" element={<Landing />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
