import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <ul className="navigation">
        <li>
          <Link to="/" className="btn">
            Home
          </Link>
        </li>
        <li>
          <Link to="/add" className="btn">
            Add
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
