import React from "react";
import "./Navbar.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navgiate = useNavigate();

  return (
    <div className="topnav" id="myTopnav">
      <a href="/" className="active">
        Home
      </a>
      <a href="/dashboard">Dashboard</a>
      <a href="/about">About</a>
      <div className="login-button">
        <a href="/login">
          <button>Login</button>
        </a>{" "}
      </div>
    </div>
  );
};

export default Navbar;
