import React, { useEffect, useState } from "react";
import "./Nav.css";

import Hamburger from "../../Icons/hamburger.svg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const [islogged, setIslogged] = useState();

  const [nav, setNav] = useState(false);
  const handleMenu = () => {
    const hamburger = document.getElementById("NavId");
    if (window.innerWidth < 880) {
      if (!nav) {
        hamburger.style.transform = "translate(0, 0)";
        setNav(true);
      } else {
        hamburger.style.transform = "translate(-100%, 0)";
        setNav(false);
      }
    }
  };

  const token = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    if (token) {
      setIslogged(true);
    } else {
      setIslogged(false);
    }
  }, [token]);

  return (
    <div className="NavWrapper">
      <div className="Nav center-div">
        <div className="Nav_logo">
          <a href="/">MH College World</a>
        </div>
        <div className="NavBg" id="NavId" onClick={handleMenu}>
          <ul>
            <div className="NavLogo" onClick={() => navigate("/")}>
              MH College World
            </div>
            <li>
              <NavLink to="/">Main</NavLink>
            </li>

            {islogged ? (
              <>
                <li>
                  <NavLink to="/collect">Explore</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                    }}
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <img src={Hamburger} alt="Hamburger" onClick={handleMenu} />
      </div>
    </div>
  );
};

export default Nav;
