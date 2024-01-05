import React from "react";
import { useNavigate } from "react-router-dom";
import Pay from "../Components/Home/Pay";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Payment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Payment - MH College World</title>
        <meta
          name="description"
          content="MH College World is website designed to ease the process of engineering and Medical admission"
        />
        <link rel="canonical" href="/pay" />
      </Helmet>
      <Pay />* <a href="/term">Terms</a> and <a href="/policy">Policy</a>
    </div>
  );
};

export default Payment;
