import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <nav>
        <h1>Babbaza Luxury Logo</h1>
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
      </nav>
    </header>
  );
}

export default Header;
