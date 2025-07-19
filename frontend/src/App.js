import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Media from "./pages/Media";
import Layout from "./components/Layout";

function App() {
  return (
    <Router basename="/thegiant">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/media" element={<Layout><Media /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
