import React from "react";

import "./Degrees.css";
import { useNavigate } from "react-router-dom";
const Degrees = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <div className="container">
          <h2>Engineering Degrees</h2>

          <p>
            Different kind of Engineering Degrees available in Maharastra and
            the list colleges.
          </p>
          <br />

          <div className="degree-cards">
            <div
              className="card"
              onClick={() => {
                navigate(
                  "courses-college-list/Computer Science and Engineering"
                );
              }}
            >
              <h3>Computer Science and Engineering</h3>
              <p>Number of College: 114</p>
            </div>

            <div
              className="card"
              onClick={() => {
                navigate("courses-college-list/Computer Engineering");
              }}
            >
              <h3>Computer Engineering</h3>
              <p>Number of College : 195</p>
            </div>

            <div
              className="card"
              onClick={() => {
                navigate(
                  "courses-college-list/Electronics and Telecommunication Engg"
                );
              }}
            >
              <h3>Electronics and Telecommunication Engg</h3>
              <p>Number of College : 215</p>
            </div>
            <div
              className="card"
              onClick={() => {
                navigate("courses-college-list/Mechanical Engineering");
              }}
            >
              <h3>Mechanical Engineering</h3>
              <p>Number of College: 273</p>
            </div>

            <div
              className="card"
              onClick={() => {
                navigate("courses-college-list/Civil Engineering");
              }}
            >
              <h3>Civil Engineering</h3>
              <p>Number of College : 232</p>
            </div>

            <div
              className="card"
              onClick={() => {
                navigate("courses-college-list/Robotics and Automation");
              }}
            >
              <h3>Robotics and Automation</h3>
              <p>Number of College : 4</p>
            </div>
          </div>
          <button
            className="btn-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/courses");
            }}
          >
            Know More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Degrees;
