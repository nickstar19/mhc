import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { profile } from "../actions/profile";
import { Helmet } from "react-helmet-async";
import { viewHistory } from "../actions/viewHistory";
const Dashboard = ({ setCollegeList }) => {
  const [Profile, setProfile] = useState({ userHistory: [] });
  const navigate = useNavigate();
  const handleCheckHistory = (index) => {
    viewHistory({ count: index }, setCollegeList);
    if (setCollegeList((prev) => prev) != []) {
      navigate("/result");
    }
  };
  useEffect(() => {
    profile(setProfile);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Dashboard - MH College World</title>
        <meta
          name="description"
          content="Dashboard: MH College World is website designed to ease the process of Engineering and Medical admission"
        />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <div className="Dashboard">
        <div className="DashboardBg"></div>

        <div className="DashboardUserProfile">
          <h2>{Profile.username}</h2>
          <button>{Profile.type} Version</button>
          {/* <button>+ Upgrade</button> */}
        </div>

        <div className="DashboardContent">
          <div>
            <h3>History</h3>

            <div className="gird-table">
              <div>Sr no.</div>
              <div>Percentile</div>
              <div>Category</div>
              <div>Gender</div>
              <div>Branch</div>
            </div>
            {Profile["userHistory"].map((History, index) => {
              return (
                <div
                  className="gird-table"
                  key={index}
                  id={index}
                  onClick={(e) => {
                    handleCheckHistory(index);
                  }}
                >
                  <div>{index + 1}</div>
                  <div>{History.percentile}%</div>
                  <div>{History.category}</div>
                  <div>{History.gender === "G" ? <>Male</> : <>Female</>}</div>
                  <div>{History?.branch}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="DashboardContent">
          <button className="btn-2" onClick={() => navigate("/collect")}>
            Check Your College List
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
