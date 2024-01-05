import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Search from "../Components/Common/Search";
import "./CourseClgList.css";
import { getClglist } from "../actions/getClglist";
import { Helmet } from "react-helmet-async";

const CourseClgList = () => {
  const [collegelist, setCollegeList] = useState([]);
  const param = useParams();
  useEffect(() => {
    getClglist({ course_name: param.course }, setCollegeList);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="CourseClgList">
      <Helmet>
        <title>{param.course} Courses in Maharastra - MH College World</title>
        <meta
          name="description"
          content={`Get the list of all the available ${param.course} courses and list of colleges in Maharashtra State - MH College World`}
        />
        <link rel="canonical" href="/courses-college-list" />
      </Helmet>
      <div>
        <h1 className="ft-h2-page">
          {param.course} Courses Colleges in Maharashtra
        </h1>
        <table style={{ textAlign: "center" }}>
          <tr>
            <th>Dte</th>
            <th>College Name</th>
            <th>No. of Seats Available</th>
          </tr>

          {collegelist.map((college) => {
            return (
              <tr>
                <td>{college?.dte}</td>
                <td>{college?.college_name}</td>
                <td>{college.seat_count || "Not available"}</td>
              </tr>
            );
          })}
        </table>
        {/* <Search /> */}
      </div>
    </div>
  );
};

export default CourseClgList;
