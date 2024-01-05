import React, { useEffect, useState } from "react";
import Search from "../Components/Common/Search";
import CourseCard from "../Components/Common/CourseCard";
import { CoursesData } from "./coursesData.js";
import { Helmet } from "react-helmet-async";

const Courses = () => {
  const [data, setData] = useState(CoursesData);

  // const handleAZSort = () => {
  //   const sortedData = CoursesData.sort((a, b) =>
  //     a.course_name.localeCompare(b.course_name)
  //   );
  //   setData(sortedData);
  //   console.log(data);
  // };

  // const handleCountSort = () => {
  //   const sortedData = CoursesData.sort((a, b) => b.count - a.count);
  //   console.log("done");
  //   setData(sortedData);
  //   console.log(data);
  // };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [data]);
  return (
    <div>
      <Helmet>
        <title>All Engineering Courses in Maharastra - MH College World</title>
        <meta
          name="description"
          content="Get the list of all the available engineering courses and list of colleges in Maharashtra State with the help of MH College World"
        />
        <link rel="canonical" href="/courses" />
      </Helmet>
      <div>
        <h1 className="ft-h2-page">Engineering Coureses in Maharashtra</h1>
        {/* <Search />
        <div className="ft-h2-page">
          <button className="btn-1" onClick={handleAZSort}>
            Sort : A-Z
          </button>
          <button className="btn-1" onClick={handleCountSort}>
            Sort : By Count
          </button>
        </div> */}

        {data.map((Course) => {
          return <CourseCard Course={Course} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
