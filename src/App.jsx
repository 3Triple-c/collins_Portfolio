import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./css/App.css";

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />

      <main className="main-content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Works" element={<Works />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
