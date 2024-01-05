import { useState, useEffect } from "react";
import "./Collector.css";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getcolleges } from "../actions/college";
import district from "./district";
import { Helmet } from "react-helmet-async";

const listOfBranch = [
  { value: "comp", label: "Computer Engineering" },
  { value: "it", label: "Information Technology" },
  { value: "comp2", label: "Computer Science and Business Systems" },
  { value: "comp3", label: "Computer Science and Design" },
  { value: "iot", label: "Internet of Things (IoT)" },
  { value: "cyber security", label: "Cyber Security" },
  { value: "ds", label: "Data Science" },
  {
    value: "instrumentation_Engineering",
    label: "Instrumentation Engineering",
  },
  {
    value: "Manufacturing_Engineering",
    label: "Manufacturing Science and Engineering",
  },
  { value: "Metallurgy", label: "Metallurgy and Material Technology" },
  { value: "Mining", label: "Mining Engineering" },
  { value: "Production", label: "Production Engineering" },
  { value: "fire", label: "Safety and Fire Engineering" },
  { value: "Coating", label: "Surface Coating Technology" },
  { value: "Aeronautical", label: "Aeronautical Engineering" },
  { value: "Agri", label: "Agricultural Engineering" },
  { value: "textile", label: "Textile Engineering / Technology" },
  { value: "robotics", label: "Robotics" },
  { value: "mech", label: "Mechanical Engineering" },
  { value: "food", label: "Food Technology" },
  { value: "civil", label: "Civil Engineering" },
  { value: "plastic", label: "Plastic Technology" },
  { value: "pharma", label: "Pharmaceutical and Fine Chemical Technology" },
  { value: "petro", label: "Petro Chemical Engineering" },
  { value: "oil", label: "Oil Technology" },
  { value: "printing", label: "Printing Technology" },
  { value: "paint", label: "Paints Technology" },
  { value: "ai", label: "Artificial Intelligence" },
  { value: "entc", label: "Electronics and Telecommunication Engg" },
  { value: "ele", label: "Electrical Engineering" },
  { value: "biotech", label: "Bio Technology" },
  { value: "fashion", label: "Fashion Technology" },
  { value: "chem", label: "Chemical Engineering" },
];
const listOfCat = [
  { value: "NT1", label: "NT1" },
  { value: "NT2", label: "NT2" },
  { value: " NT3", label: " NT3" },
  { value: " ST", label: " ST" },
  { value: " VJ", label: " VJ" },
  { value: " OPEN", label: " OPEN" },
  { value: " DEFRNT2S", label: " DEFRNT2S" },
  { value: " DEFOBCS", label: " DEFOBCS" },
  { value: " OBC", label: " OBC" },
  { value: " DEFRNT1S", label: " DEFRNT1S" },
  { value: " DEFOPENS", label: " DEFOPENS" },
  { value: " DEFSCS", label: " DEFSCS" },
  { value: " DEFROBCS", label: " DEFROBCS" },
  { value: " DEFRSCS", label: " DEFRSCS" },
  { value: " SC", label: " SC" },
  { value: " EWS", label: " EWS" },
  { value: " TFWS", label: " TFWS" },
];
const listOfDistrict = district;
const listOfExam = [{ value: "CET", label: "CET" }];
const listOfGender = [
  { value: "G", label: "Male" },
  { value: "L", label: "Female" },
];

const Collector = ({ setCollegeList }) => {
  const navigate = useNavigate();
  const [page, setpage] = useState(false);

  const initData = {
    percentile: "",
    exam: "CET",
    ctaegory: "NT1",
    branch: "comp",
    homedistrict: "Ahmednagar",
    gender: "G",
    district1: "choose",
    district2: "choose",
    district3: "choose",
  };
  const [formData, setFormData] = useState(initData);

  const handlenext = (e) => {
    e.preventDefault();
    if (!page && formData.percentile !== "") {
      setpage(true);
    } else {
      window.alert("enter percentile");
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (
      formData.district1 != "choose" &&
      formData.district2 != "choose" &&
      formData.district3 != "choose"
    ) {
      getcolleges(formData, setCollegeList);
      if (setCollegeList != []) {
        navigate("/result");
      }
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="collector center-div">
      <Helmet>
        <title>MH College World</title>
        <meta
          name="description"
          content={`Get the list of all the list of colleges in Maharashtra State based on your percentile,category,home district and district in which you want your college with the help of MH College World`}
        />
        <link rel="canonical" href="/collect" />
      </Helmet>
      <form className="collector__form">
        <>
          {!page ? (
            <>
              <div className="Collector__page__title">
                *All filled are required to fill
              </div>
              <div>
                <label htmlFor="">1. Enter your Percentile</label>
                <input
                  required
                  onChange={handleChange}
                  name="percentile"
                  type="number"
                />
              </div>

              <div>
                <label htmlFor="">2. Choose Your Exam : </label>
                <select name="exam" onChange={handleChange} id="">
                  {listOfExam.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">3. Choose Your Category : </label>
                <select name="ctaegory" onChange={handleChange} id="">
                  {listOfCat.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">4. Choose Your Branch : </label>
                <select name="branch" onChange={handleChange} id="">
                  {listOfBranch.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">5. Completed Your 12th in (district) </label>
                <select name="homedistrict" onChange={handleChange} id="">
                  {listOfDistrict.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">6. Select Your Gender </label>
                <select name="gender" onChange={handleChange} id="">
                  {listOfGender.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </>
          ) : (
            <>
              <div className="Collector__page__title">
                Intereseted District To Study in?
              </div>
              <div>
                <label htmlFor="">Choose your First District </label>
                <select name="district1" onClick={handleChange} id="">
                  {listOfDistrict.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">Choose your Second District </label>
                <select name="district2" onClick={handleChange} id="">
                  {listOfDistrict.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="">Choose your Third District </label>
                <select name="district3" onClick={handleChange} id="">
                  {listOfDistrict.map((i) => {
                    return (
                      <option key={i.value} value={i.value}>
                        {i.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </>
          )}
        </>
        <div className="float-right">
          {!page ? (
            <button className="btn-1" onClick={handlenext}>
              Next
            </button>
          ) : (
            <button className="btn-1" onClick={handlesubmit}>
              Submit
            </button>
          )}
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div
            className="dot"
            style={{ "background-color": "var(--clr-highlight)" }}
          ></div>
        </div>
      </form>
    </div>
  );
};

export default Collector;
