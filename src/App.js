import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
// import ParticlesComponent from "./components/ParticlesComponent";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <Navbar />
      <div className="particles-container">
      </div>
      <Routes>
  
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </>
  );
}


export default App;
