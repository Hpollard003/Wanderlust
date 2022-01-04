import React from "react";
import PaperPlane from "../assets/paperPlane.gif";

const AboutPage = () => {
  return (
    <div className="text-light">
      About Page                <span>
                  <img src={PaperPlane} alt="" height="100" loading="lazy" />
                </span>
    </div>
  );
};

export default AboutPage;
