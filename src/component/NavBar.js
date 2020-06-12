import React, { Component } from "react";
import LOGO from "../photos/LOGO.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="text-center mb-5 mt-3">
        <img src={LOGO} alt="Logo" className="ourLogo" />

        <div className="text-center">
          <nav className="navbar navbar-expand-lg navbar-light bg-light text-center p-auto">
            <Link className="navbar-brand" to="/showdetails">
              Show Details
            </Link>
            <Link className="navbar-brand" to="/clientform">
              Add Details
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
