import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <img src="/babbazaLogo.png" alt="Babbaza logo" />
        <ul className="nav-menu">
          <li>
            <Link to={"home"}>Home</Link>
          </li>
          <li>
            <Link to={"gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
        </ul>
        <img className="versBar" src="/versBar.png" alt="versaceBar" />
      </nav>
    </header>
  );
}

export default Header;
