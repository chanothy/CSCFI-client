import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginRoute } from "../../utils/APIRoutes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    if (email && password) {
      event.preventDefault();
      axios
        .post(loginRoute, {
          email,
          password,
          role,
        })
        .then((res) => {
          if (res.data.login && res.data.tfa == null) {
            localStorage.setItem("session-token", res.data.token)
            alert("logged in");
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="login-box">
      <div>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            className="dropdown"
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value=""></option>
            <option value="user">Client</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="remember-forgot">
          <Link to="/forgot-password" className="button">
            Forgot Password?
          </Link>
        </div>

        <button className="btn-login" onClick={handleSubmit}>
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="btn-reg">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
