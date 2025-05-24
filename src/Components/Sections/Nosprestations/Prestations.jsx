import React from "react";
import "../Sections.css";
import Cardpresta from "./Cardpresta";
import TitreH2 from "../TitreH2/titreH2intro";

const Prestations = () => {
  return (
    <section id="nosPrestations">
      <div className="container">
        <TitreH2
          titre="Domaines d'expertise"
          introPragraphe=" Nous analysons et étudions votre projet, puis déterminons la
            solution technique adéquate pour le réaliser !"
        />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3">
          <Cardpresta
            iconpresta="../../src/assets/images/computer2.svg"
            textalterne="Sites web"
            titre="Sites web"
            description="Site vitrine, portfolio, e-business&nbsp;?... vous avez le choix de votre tenue sur la toile&nbsp;!"
            lien="#siteweb"
            nomlien="+ d'infos →"
            popin="siteweb"
          />

          <Cardpresta
            iconpresta="../../src/assets/images/appmobile.svg"
            titre="Applis mobile "
            textalterne="Applis mobile"
            description="Vous êtes plutôt Android ou IOS&nbsp;? et pourquoi pas les deux en même temps&nbsp;?"
            lien="#applimobile"
            nomlien="autre chose"
            popin="applimobile"
          />

          <Cardpresta
            iconpresta="../../src/assets/images/strategy.svg"
            textalterne="Stratégie digitale"
            titre="Stratégie digitale"
            description="Référencement, publicité, social media... nous savons vous rendre visible en ligne&nbsp;!"
            lien="#strategie"
            nomlien="autre chose"
            popin="strategie"
          />

          <Cardpresta
            iconpresta="../../src/assets/images/uiux.svg"
            textalterne="Conception"
            titre="Ux/Ui Design"
            description="Besoin d'une vraie image de marque&nbsp;? nous savons comment faire&nbsp;!"
            lien="#uxui"
            nomlien="autre chose"
            popin="uxui"
          />
        </div>
      </div>
    </section>
  );
};

export default Prestations;
