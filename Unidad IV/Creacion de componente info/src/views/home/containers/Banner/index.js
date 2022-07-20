import React from "react";

import "./Banner.css";
import Info from "./Info";
import Photo from "./Photo";
import Skills from "./Skills";

const Banner = () => {
  return (
    <div className="banner">
      <section className="info">
        <Info />
      </section>
      <section className="photo">
        <Photo />
      </section>
      <section className="skills opensans fs_14">
        <Skills />
      </section>
    </div>
  );
};

export default Banner;
