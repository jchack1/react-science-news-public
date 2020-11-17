import React from "react";
import logo from "../../img/Atom.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>
        Science News <img src={logo} alt="atom logo" className="atom-logo" />
      </h1>
      <h2>Recent articles published in Canada</h2>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>{" "}
        |{" "}
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
