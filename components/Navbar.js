import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navbar.css";
import "../js/main";
import "../js/sticky";
import "../js/drop";

export default function () {
  
  return (
    <div className="navbar-area">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img src="./images/logo.svg" alt="Logo" />
          </Link>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse sub-menu-bar"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto" id="myTab">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Portfolio">
                  portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Faq">
                  FAQ's
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="javascript:void(0)"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  pages
                </Link>
                <div
                  class="dropdown-menu"
                >
                  <a class="dropdown-item" to="#">
                    Action
                  </a>
                  <a class="dropdown-item" to="#">
                    Another action
                  </a>
                  <a class="dropdown-item" to="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <div className="navbar-btn d-none d-sm-inline-block">
              <ul>
                <li>
                  <Link className="solid" to="/">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
