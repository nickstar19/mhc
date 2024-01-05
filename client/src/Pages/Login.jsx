import { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { login } from "../actions/auth.js";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const [showpass, setShowpass] = useState(false);

  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handling Login
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData, navigate);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Login - MH College World</title>
        <meta
          name="description"
          content="Login: MH College World is website designed to ease the process of Engineering and Medical admission"
        />
        <link rel="canonical" href="/login" />
      </Helmet>
      <div className="login center-div">
        <form onSubmit={handleSubmit}>
          <div className="login__inputs">
            <input
              placeholder="Phone Number"
              name="mobileNumber"
              required
              type="text"
              onChange={handleChange}
              maxLength="10"
            />
            <input
              placeholder="Password"
              name="password"
              required
              type={showpass ? "text" : "password"}
              onChange={handleChange}
            />
            <div className="checkbox-div">
              <input
                style={{ width: "40px" }}
                type="checkbox"
                onChange={() => {
                  setShowpass((previous) => !previous);
                }}
              />
              <span>Show Password</span>
            </div>
            <button>Login </button>
          </div>
          <NavLink to="/register" className="changeform">
            Don't have a account <b>Create now</b>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Login;
