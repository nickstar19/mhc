import React from "react";
import "./FreeTrial.css";
import { useNavigate } from "react-router-dom";
const FreeTrial = () => {
  const location = useNavigate();
  return (
    <div className="FreeTrial">
      <div>
        <div>
          <p>Difficult in chossing College ?</p>
          <h2>Your Ultimate Guide to Finding Your Dream College!</h2>
          <p>Discover Your Dream College in Maharashtra</p>
        </div>
        <button
          className="btn-1"
          style={{ color: "#fff", background: "#324dc7", padding: "8px 32px" }}
          onClick={() => location("/login")}
        >
          Try Now
        </button>
      </div>
    </div>
  );
};

export default FreeTrial;
