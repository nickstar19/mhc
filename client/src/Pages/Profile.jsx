import React from "react";
import { useEffect } from "react";

import "./profile.css";
import { Helmet } from "react-helmet-async";
const Profile = ({ collegeList }) => {
  const data = collegeList;
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Profile - MH College World</title>
        <meta
          name="description"
          content="MH College World is website designed to ease the process of engineering and Medical admission"
        />
        <link rel="canonical" href="/profile" />
      </Helmet>
      <div className="college__profile">
        <div className="college__profile__text"></div>
      </div>
      <div>
        <div className="college__card">
          <div className="college__card__upper">
            <div className="college__count">Ranks</div>
            <div className="college__dtecode">DTE</div>
            <div className="college__name">Colleges</div>
            <div className="college__cutoff">Percentile</div>
            {/* <div classname="college__dropdownarro">more</div> */}
          </div>
        </div>

        {data.map((singlecollege, index) => {
          return (
            <>
              <div className="college__card">
                <div className="college__card__upper">
                  <div className="college__count">{index + 1}</div>
                  <div className="college__dtecode">{singlecollege.dte}</div>
                  <div className="college__name">
                    {singlecollege.college_name}
                  </div>
                  <div className="college__cutoff">{singlecollege?.cutoff}</div>
                  {/* <div classname="college__dropdownarrow"></div> */}
                </div>
                {/* <hr /> */}
                <div className="college__card__lower">
                  <div className="college__district">
                    District : {singlecollege.district}
                  </div>
                  <a
                    className="college__seatMatrix college__btn"
                    target="blank"
                    href={`/pdf/${singlecollege.dte}.pdf`}
                  >
                    Cutoff
                  </a>
                  <a
                    className="college__detail college__btn"
                    target="blank"
                    href={`https://fe2022.mahacet.org/StaticPages/frmInstituteSummary?InstituteCode=1002${singlecollege.dte}`}
                  >
                    College Details
                  </a>
                  <a
                    className="college__webiste college__btn"
                    target="blank"
                    href={`https://${singlecollege.website}`}
                  >
                    College Website
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Profile;
