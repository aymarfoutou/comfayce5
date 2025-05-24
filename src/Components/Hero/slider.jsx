import React from "react";
// import "./Hero.css";
import "../../Components/Sections/Sections.css";
import "./Slider.css";
const Slider = () => {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
            aria-current="true"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="../../src/assets/images/imgtest1.jpg"
              className="d-block w-100"
              alt=""
            />

            <div className="container">
              <div className="carousel-caption">
                <h1>Besoin de communiquer efficacement&nbsp;?</h1>
                <p>
                  Some representative placeholder content for the first slide of
                  the carousel.
                </p>
                <p>
                  <a href="#nosPrestations" className="btnCustom ghostClear">
                    J'ai un projet&nbsp;!
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../../src/assets/images/imgtest2.jpg"
              className="d-block w-100"
              alt=""
            />

            <div className="container">
              <div className="carousel-caption">
                <h1>Besoin de communiquer efficacement&nbsp;?</h1>
                <p>
                  Some representative placeholder content for the second slide
                  of the carousel.
                </p>
                <p>
                  <a href="#nosPrestations" className="btnCustom ghostClear">
                    J'ai un projet&nbsp;!
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="../../src/assets/images/imgtest1.jpg"
              className="d-block w-100"
              alt=""
            />

            <div className="container">
              <div className="carousel-caption">
                <h1>Besoin de communiquer efficacement&nbsp;?</h1>
                <p>
                  Some representative placeholder content for the third slide of
                  this carousel.
                </p>
                <p>
                  <a href="#nosPrestations" className="btnCustom ghostClear">
                    J'ai un projet&nbsp;!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
