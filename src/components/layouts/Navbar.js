import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  bg-dark">
          <a className="navbar-brand" href="#">
            React Router
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <span className="navbar-text">Login</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
