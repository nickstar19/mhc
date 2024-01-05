import { useState } from "react";
import { useEffect } from "react";

import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { register } from "../actions/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const navigate = useNavigate();

  const [showpass, setShowpass] = useState(false);

  const init_formdata = {};
  const [formData, setFormData] = useState(init_formdata);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handling Login
  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData, navigate);
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
          content="Register: MH College World is website designed to ease the process of Engineering and Medical admission"
        />
        <link rel="canonical" href="/register" />
      </Helmet>
      <div className="login center-div">
        <form onSubmit={handleSubmit}>
          <div className="login__inputs">
            <input
              required
              placeholder="Name"
              name="username"
              onChange={handleChange}
            />

            <input
              placeholder="Phone Number"
              name="mobileNumber"
              required
              type="text"
              maxLength="10"
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              name="email"
              required
              type="email"
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              name="password"
              required
              type={showpass ? "text" : "password"}
              onChange={handleChange}
            />

            <input
              placeholder="Confirm Password"
              name="cpassword"
              type={showpass ? "text" : "password"}
              required
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
            <button>Register </button>
          </div>

          <NavLink to="/login" className="changeform">
            Already have a account <b>Login Here</b>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Register;
