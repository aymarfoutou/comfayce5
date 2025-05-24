import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/comfayce-logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  });
  return (
    <nav
      className={`navbar navbar-expand-lg ${sticky ? "purp-nav" : ""}`}
      id="head-navbar"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo comfayce" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 0 ? "active" : ""}`}
                  onClick={() => handleClick(0)}
                  href="#nosRealisations"
                >
                  Nos Réalisations
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 1 ? "active" : ""}`}
                  onClick={() => handleClick(1)}
                  href="#nosPrestations"
                >
                  J'ai un projet&nbsp;!
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 2 ? "active" : ""}`}
                  onClick={() => handleClick(2)}
                  href="#nosPrestations"
                >
                  Domaines d'Expertise
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 3 ? "active" : ""}`}
                  onClick={() => handleClick(3)}
                  href="#quiSommesnous"
                >
                  Qui sommes-nous&nbsp;?
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 4 ? "active" : ""}`}
                  onClick={() => handleClick(4)}
                  href="#nousContacter"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
