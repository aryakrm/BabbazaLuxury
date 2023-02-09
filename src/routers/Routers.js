import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default Routers;
