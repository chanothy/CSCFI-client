import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registerRoute } from "../../utils/APIRoutes";
import { success } from "../../utils/HTTPCodes";
import "./Register.css";
let URL = import.meta.env.VITE_SERVER_URL;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    event.preventDefault();
    console.log("Submission")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (password != password2) {
      alert("password don't match")
      return;
    } else if (!emailRegex.test(email)) {
      alert("email not valid")
      return;
    }
    else if (password.length < 8) {
      alert("password must be at least 8 long")
      return;
    }
    axios
      .post(registerRoute, {
        firstname,
        lastname,
        email,
        password,
        role,
      })
      .then((res) => {
        if (res.status == success) {
          console.log(res);
          navigate("/dashboard")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register-box">
      <div className="wrapper-reg">
        <form>
          <h1>Register</h1>
          <div className="">
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="">
            <input
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="loginInfo">
            <div className="">
              <input
                type="text"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>

            <div className="">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="btn-submit" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
