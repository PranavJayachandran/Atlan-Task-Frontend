import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <div className="bg-[#1a1d2e]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
