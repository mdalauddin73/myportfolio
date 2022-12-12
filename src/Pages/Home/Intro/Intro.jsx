import React from "react";

const Intro = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col w-[200] lg:flex-row-reverse">
        <img
          src="alauddin1.jpg"
          className="max-w-sm rounded-lg shadow-2xl w-[200px]"
          alt=""
        />
        <div className="w-[600px]">
          <h1 className="text-3xl font-bold italic">Hello, I am</h1>
          <h1 className="text-5xl font-bold">Mohammad Alauddin</h1>
          <p className="py-6">
            Front-end Developer / IT Consultant / IT Specialist / IT Officer
          </p>
          <a
            href="Resume_Mohammad_Alauddin.pdf"
            className="btn btn-primary font-bold text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
