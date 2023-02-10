import React from "react";
import "./Footer.scss";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <img className="logo" src="/babbazaLogo.png" alt="babbazaLogo" />
      <p>info@babbaza.com</p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/luxebabazadesign/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://wa.me/905428403134" target="_blank">
          <BsWhatsapp />
        </a>
      </div>
      <p>© 2023 Babbaza Luxury. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
