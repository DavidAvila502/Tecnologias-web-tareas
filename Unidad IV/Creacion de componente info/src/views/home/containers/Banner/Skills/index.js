import React from "react";

import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills_grid">
        <div className="bar" style={{ width: "100%" }}></div>
        <div>Programacion</div>
        <div className="bar" style={{ width: "80%" }}></div>
        <div>Disenho</div>
        <div className="bar" style={{ width: "90%" }}></div>
        <div>APIs</div>
        <div className="bar" style={{ width: "85%" }}></div>
        <div>Documentacion</div>
      </div>
    </>
  );
};

export default Skills;
