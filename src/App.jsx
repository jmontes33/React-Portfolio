import React from "react";
import NavBar from "./components/light_nav_with_bottom_border";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Erdd from "./components/Erdd";
import NotFoundPage from "./components/NotFoundPage";
import Skills from "./components/Skills";
import FooterBar from "./components/FooterBar";
import Resume from "./components/Resume";
import Repartidor from "./components/Repartidor";

export function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/erdd" element={<Erdd />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/repartidor" element={<Repartidor />} />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  );
}

export default App;
