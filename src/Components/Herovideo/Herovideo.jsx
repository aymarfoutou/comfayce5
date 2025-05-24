import React from "react";
import "./Herovideo.css";

const Herovideo = () => {
  return (
    <div className="position-relative w-100 vh-100 overflow-hidden">
      {/* Vidéo de fond */}
      <video
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        src="../../src/assets/images/asia.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay sombre */}
      <div className="position-absolute top-0 start-0 w-100 h-100 purple bg-opacity-50"></div>

      {/* Contenu centré */}
      <div className="container h-100 position-relative d-flex align-items-center justify-content-center">
        <div className="row text-center text-white">
          <div className="col-12">
            <h1 className="display-4 fw-bold mb-3">
              Besoin de communiquer
              <br />
              <span style={{ color: "#f64542" }}>Efficacement&nbsp;?</span>
            </h1>
            <p className="lead mb-4">
              <span style={{ color: "#fff" }}>
                COMFAYCE vous accompage dans la réalisation de votre projet de
                communication&nbsp;!
              </span>
            </p>
            <a href="#nosPrestations" className="btnCustom ghostClear">
              J'ai un projet&nbsp;!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herovideo;
