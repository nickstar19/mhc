import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const location = useNavigate();
  const [isLogged, setIslogged] = useState();
  const token = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    if (token) {
      setIslogged(true);
    } else {
      setIslogged(false);
    }
  }, [token]);

  return (
    <div className="Hero">
      <div>
        <h1>Hi Dreamers !</h1>
        <p>
          Finding colleges and careers that are right for you doesn’t have to be
          stressful. Sign in for help planning for life after high school.
        </p>
        {isLogged ? (
          <></>
        ) : (
          <button className="btn-1" onClick={() => location("/login")}>
            Sigin to Your Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
