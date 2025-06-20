import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Media from "./Media";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
          <Link to="/media">Media</Link>
        </nav>

        <div style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
