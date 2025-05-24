import React from "react";
import "../Sections.css";
import "./Quisommesnous.css";
import TitreH2 from "../TitreH2/titreH2intro";
import Bouton from "../Boutons/Bouton";
import "./Overcard.css";

const Quisommesnous = () => {
  return (
    <section id="quiSommesnous" className="quiSommesnous">
      <div className="container">
        <div className="containerCustom">
          <TitreH2
            titre="Qui sommes-nous ?"
            introPragraphe="Conception web, Créations, e-marketing"
          />
          <div className="row w-separation w-first">
            <div className="col-sm-12 col-md-6 order-md-1">
              <h3 className="nous-heading">- Conseils en communication</h3>
              <p>
                Omitto iuris dictionem in libera civitate contra leges
                senatusque consulta; caedes relinquo; libidines praetereo,
                quarum acerbissimum extat indicium et ad insignem memoriam
                turpitudinis. thanks !
              </p>
              <p>
                Quarum acerbissimum extat indicium et ad insignem memoriam
                turpitudinis.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 order-md-2">
              <h3 className="nous-heading">- Agence connectée</h3>
              <p>
                Berytus isdemque pares Emissa et Damascus saeculis condita
                priscis. Post hanc adclinis Libano monti Phoenice, regio plena
                gratiarum et venustatis, urbibus decorata magnis et pulchris; in
                quibus amoenitate celebritateque nominum Tyros excellit.
              </p>
              <p>
                Quarum acerbissimum extat indicium et ad insignem memoriam
                turpitudinis.
              </p>
            </div>
          </div>

          <div className="row align-items-center w-separation grey">
            <div className="col-sm-12 col-md-6 order-md-1">
              <img
                src="../../../src/assets/images/about/responsive-through-and-through.svg"
                className="imgbox"
                alt="Applications web multidevice"
              />
            </div>
            <div className="col-sm-12 col-md-6 order-md-2">
              <h3 className="nous-heading">Applications web multidevice</h3>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
              <Bouton type="btn-default" url="#" labellien="btn-default" />
            </div>
          </div>

          <div className="row align-items-center w-separation">
            <div className="col-sm-12 col-md-6 order-md-2">
              <img
                src="../../../src/assets/images/about/inky-template.svg"
                className="imgbox"
                alt="Full Accessibilité"
              />
            </div>
            <div className="col-sm-12 col-md-6 order-md-1 f-r-txt">
              <h3 className="nous-heading">Full Accessibilité</h3>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
              <Bouton
                className=""
                type="btn-purpleghost"
                url="#"
                labellien="btn-default"
              />
            </div>
          </div>

          <div className="row align-items-center w-separation grey">
            <div className="col-sm-12 col-md-6 order-md-1">
              <img
                src="../../../src/assets/images/about/inky-computer.svg"
                className="imgbox"
                alt="Mise en ligne de votre plateforme"
              />
            </div>
            <div className="col-sm-12 col-md-6 order-md-2">
              <h3 className="nous-heading">
                Mise en ligne de votre plateforme
              </h3>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
              <Bouton type="btn-default" url="#" labellien="btn-default" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quisommesnous;
