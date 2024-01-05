import React from "react";
import Hero from "../Components/Home/Hero";
import Pay from "../Components/Home/Pay";
import Degrees from "../Components/Home/Degrees";
import FreeTrial from "../Components/Home/FreeTrial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MH College World</title>
        <meta
          name="description"
          content={`Get the list of all the list of colleges in Maharashtra State based on your percentile,category,home district and district in which you want your college with the help of MH College World`}
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <FreeTrial />
      <Degrees />
      <Pay />
    </div>
  );
};

export default Home;
