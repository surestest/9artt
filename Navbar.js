import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header-container">
      <div className="logo-section">
        <img
          src="/images/pexels-photo-5935661.webp"
          alt="Logo"
          className="logo"
        />
      </div>

      <div className="title-section">
        <h1 className="company-name">Company Name</h1>
        <h2 className="app-name">Application Name</h2>
      </div>

      <div className="user-section">
        <span className="welcome-message">
          <i className="user-icon">&#128100;</i> Welcome, <b>John Doe</b>
        </span>
        <div className="action-buttons">
          {}
          <Link to="/chatboats">
            <button className="nav-button">Chatboats</button>
          </Link>
          <Link to="/collections">
            <button className="nav-button">Collections</button>
          </Link>
          <Link to="/dashboard">
            <button className="nav-button">Data Sources</button>
          </Link>
          <Link to="/formhandle">
            <button className="nav-button">Admin</button>
          </Link>
        </div>
        <div className="icons">
          <span className="help-icon">?</span>
          <span className="logout-icon">⤴️</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
