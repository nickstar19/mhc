import React from "react";
import { BiSolidInstitution } from "react-icons/bi";

import "./CourseCard.css";
import { useNavigate } from "react-router-dom";
const CourseCard = ({ Course }) => {
  const navigate = useNavigate();
  return (
    <div className="CourseCard">
      <div>
        <h3>{Course.course_name}</h3>
        <p>{Course.description}</p>
        <br />
      </div>
      <div style={{ textAlign: "center" }} className="CourseCard_Sub">
        <BiSolidInstitution style={{ color: "white", fontSize: "3rem" }} />
        <p>Number of College</p>
        <div className="CouresCard_highlight">{Course.count}</div>

        <button
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/courses-college-list/${Course.course_name}`)
          }
        >
          List of College
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
