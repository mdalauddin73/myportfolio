import React from "react";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Intro from "../Intro/Intro";

const Home = () => {
  return (
    <div className="mx-5">
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
