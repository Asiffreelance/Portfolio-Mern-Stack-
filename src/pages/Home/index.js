import React from "react";
import Portfolio from "../Project";
import Contact from "../Contact";
import { Banner, Testimonial, Information, Service } from "../../components";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Portfolio />
      <Testimonial />
      <Information />
      <Contact />
    </div>
  );
};

export default Home;
