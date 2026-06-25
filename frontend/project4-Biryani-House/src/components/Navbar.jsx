import React from "react";
import bLOGO from "../assets/logoBiryani.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm sticky-top"
      style={{
        background: "linear-gradient(to right,#111,#1f1f1f)",
      }}
    >
      <div className="container">

        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={bLOGO}
            alt="logo"
            style={{
              width: "65px",
              height: "65px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid #ffb703",
            }}
          />

          <span
            style={{
              color: "#ffb703",
              fontSize: "26px",
              fontWeight: "700",
            }}
          >
            Biryani House
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link text-light px-3" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light px-3" to="/variety">
                Variety
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light px-3" to="/about-us">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light px-3" to="/contact-us">
                Contact
              </Link>
            </li>

          </ul>

          <form className="d-flex">

            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Biryani..."
            />

            <button
              className="btn"
              style={{
                background: "#ffb703",
                color: "black",
                fontWeight: "600",
              }}
            >
              Search
            </button>

          </form>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;