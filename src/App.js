import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import ParticlesComponent from "./components/ParticlesComponent";

function App() {
  return (
    <>
      <Navbar />
      <div className="particles-container">
        <ParticlesComponent id="particles-container" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </>
  );
}


export default App;
