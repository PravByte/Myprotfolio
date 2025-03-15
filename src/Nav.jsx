import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Nav = () => {
  return (
    <nav id='nav' className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link
          style={{
            fontSize: "24px",
            fontWeight: "bolder",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "2px",
            textDecoration: "none",
          }}
          to="/"
          className="navbar-brand text-white"
        >
          Pravin Pr!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
          
              style={{
                fontSize: "18px",
                fontWeight: "light",
                fontFamily: "'Poppins', sans-serif",
                textDecoration: "none",
                margin: "0 12px",
                transition: "color 0.3s ease",
              }}
              to="/"
              className="nav-link active text-white"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              style={{
                fontSize: "18px",
                fontWeight: "light",
                fontFamily: "'Poppins', sans-serif",
                textDecoration: "none",
                margin: "0 12px",
                transition: "color 0.3s ease",
              }}
              to="/about"
              className="nav-link text-white"
            >
              About
            </Link>
            <Link
              style={{
                fontSize: "18px",
                fontWeight: "light",
                fontFamily: "'Poppins', sans-serif",
                textDecoration: "none",
                margin: "0 12px",
                transition: "color 0.3s ease",
              }}
              to="/skills"
              className="nav-link text-white"
            >
              Skills
            </Link>
           
            <Link
              style={{
                fontSize: "18px",
                fontWeight: "light",
                fontFamily: "'Poppins', sans-serif",
                textDecoration: "none",
                margin: "0 12px",
                transition: "color 0.3s ease",
              }}
              to="/portfolio"
              className="nav-link text-white"
            >
              Projects
            </Link>
            <Link
              style={{
                fontSize: "18px",
                fontWeight: "light",
                fontFamily: "'Poppins', sans-serif",
                textDecoration: "none",
                margin: "0 12px",
                transition: "color 0.3s ease",
              }}
              to="/contact"
              className="nav-link text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
