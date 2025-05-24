import React from "react";
import "./Hero.css";
import "../../Components/Sections/Sections.css";
const Hero = () => {
  return (
    <section id="hero" className="hero text-center">
      <div className="row align-items-center">
        <div>
          <h1>Besoin de communiquer efficacement&nbsp;?</h1>
          <p>
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple’s marketing pages.
          </p>
          <a href="#nosPrestations" className="btnCustom ghostClear">
            J'ai un projet&nbsp;!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
