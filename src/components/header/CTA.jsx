import React from "react";
import CV from "../../assets/_MyResume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://www.youtube.com/watch?v=Aq5WXmQQooo"
        target="_blank"
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Wanna chat?
      </a>
    </div>
  );
};

export default CTA;
