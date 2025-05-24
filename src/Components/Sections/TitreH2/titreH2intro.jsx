import React from "react";
import "./titreH2intro.css";

const titreH2intro = ({ titre, introPragraphe }) => {
  return (
    <>
      <div className="headSection">
        <h2>- {titre} -</h2>
        <p>{introPragraphe}</p>
      </div>
    </>
  );
};

export default titreH2intro;
