import React from "react";
import { Link } from "react-router-dom";
import headerstyle from "../styles/headerstyle.css";

const Header = () => {
  return (
    <div className="header">
      <ol>
        <Link to="">
          <li>Home</li>
        </Link>
        <li>About</li>
        <li>Terms</li>
        <li>Contact</li>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ol>
    </div>
  );
};
export default Header;
