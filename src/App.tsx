import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import ProjectFavourite from "./components/ProjectFavourite";
import About from "./components/About";

function App() {
  return (
    <div className="bg-[#1a1d2e]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<ProjectFavourite />} />
          <Route path="/favourites" element={<ProjectFavourite />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
