import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fasilitas from "./components/Fasilitas.jsx";
import Layanan from "./components/Layanan.jsx";
import Tentang from "./components/Tentang.jsx";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Fasilitas" element={<Fasilitas />} />
      <Route path="/Layanan" element={<Layanan />} />
      <Route path="/Tentang" element={<Tentang />} />      
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
