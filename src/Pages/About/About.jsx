import React from "react";

const About = () => {
  return (
    <div className="mt-10 hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-10">My Skills</h1>
          <ul className="list-disc w-3/5 mx-auto text-left">
            <li>Networking - WAN, LAN and WIFI infrastructure</li>
            <li>Windows/Linux Server Management</li>
            <li>Advanced Level Hardware and Software Troubleshooting</li>
            <li>MCSE, CCNA, CCNA-Security, CCNP(R&S) </li>
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="text-left py-6">
            IT professional with 20+ years of experience with international
            NGOs, educational institutes, consultancy firms and health projects
            in Bangladesh. Currently serving as an IT Specialist at Concern
            Worldwide Bangladesh. Concern Worldwide is a non-governmental,
            international, humanitarian organisation dedicated to the reduction
            of suffering and working towards the ultimate elimination of extreme
            poverty in the world's poorest countries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
