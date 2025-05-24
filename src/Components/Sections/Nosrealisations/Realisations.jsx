import React from "react";
import "../Sections.css";
import Cardrea from "./Cardrea";
import Bouton from "../Boutons/Bouton";
import { Modal } from "react-bootstrap";
import TitreH2 from "../TitreH2/titreH2intro";

const Realisations = () => {
  return (
    <>
      <section id="nosRealisations">
        <div className="container">
          <div className="containerCustom">
            <TitreH2
              titre="Nos Réalisations"
              introPragraphe="Conception web, Créations, e-marketing"
            />
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 group">
              <Cardrea
                idModal="sfr"
                imagerea="../../src/assets/images/portfolio/srpsfr.jpg"
                textalterne="ehe"
                titre="SFR - SHOWROOM PRIVÉ"
                projet="Landing page"
                titrepopin="SFR - SHOWROOM"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/srp-sfr/srp-sfr.jpg"
              />
              <Cardrea
                idModal="shark"
                imagerea="../../src/assets/images/portfolio/sharksummer.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/sharksummer/sharksummer.jpg"
              />
              <Cardrea
                idModal="s8"
                imagerea="../../src/assets/images/portfolio/samsunggs8.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/samsung8/sams8.jpg"
              />
              <Cardrea
                idModal="pd"
                imagerea="../../src/assets/images/portfolio/pierredonard.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/samsung8/sams8.jpg"
              />
              <Cardrea
                idModal="huwaie"
                imagerea="../../src/assets/images/portfolio/polys.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/samsung8/sams8.jpg"
              />
              <Cardrea
                idModal="polys"
                imagerea="../../src/assets/images/portfolio/spartoo.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/samsung8/sams8.jpg"
              />
              <Cardrea
                idModal="spartoo"
                imagerea="../../src/assets/images/portfolio/nissans.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/samsung8/sams8.jpg"
              />
              <Cardrea
                idModal="nissan"
                imagerea="../../src/assets/images/portfolio/onairagency.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/samsung8/sams8.jpg"
              />
              <Cardrea
                idModal="ooa"
                imagerea="../../src/assets/images/portfolio/accorhotels1.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/samsung8/sams8.jpg"
              />
              <Cardrea
                idModal="accor"
                imagerea="../../src/assets/images/portfolio/mediaserk.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/samsung8/sams8.jpg"
              />
              <Cardrea
                idModal="mediaserk"
                imagerea="../../src/assets/images/portfolio/cafe-garonne.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/samsung8/sams8.jpg"
              />
              <Cardrea
                idModal="cbg"
                imagerea="../../src/assets/images/portfolio/sfr.jpg"
                textalterne="ehe"
                titre="SHARK SUMMER"
                projet="Landing page"
                titrepopin="SHARK SUMMER"
                descriptpopin="Landing page"
                imagesourcepopin="../../../src/assets/images/portfolio/samsung8/sams8.jpg"
              />
            </div>
            <div>
              <Bouton
                type="btn-default"
                labellien="btn-default"
                url="#nousContacter"
              />
            </div>
          </div>
        </div>
      </section>
      <Modal />
    </>
  );
};
export default Realisations;
