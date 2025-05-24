import React from "react";
import Bouton from "../Boutons/Bouton";
import "../Sections.css";
import "./Foot.css";

const Foot = () => {
  return (
    <>
      <section id="piedsDepage" className="piedsDepage">
        <div className="container">
          <div className="containerCustom">
            <div className="row w-separation w-first">
              <div className="col text-center">
                <p>
                  Copyright {new Date().getFullYear()} © comfayce - Tous Droits
                  Réservés
                </p>
              </div>
              <div className="col text-center">
                <p>
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    href="#mention"
                  >
                    Mentions légales
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="mention"
        tabIndex="-1"
        aria-labelledby="leModalLabel"
        aria-hidden="true"
        style={{ margin: "0" }}
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "100%", marginTop: "70px", marginBottom: "0" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="leModalLabel">
                - Mentions légales -
              </h2>
              <div class="close-modal" data-bs-dismiss="modal">
                <div class="lr">
                  <div class="rl"></div>
                </div>
              </div>
            </div>
            <div className="modal-body" style={{ textAlign: "left" }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <h3>1. Identification et présentation du site</h3>
                    <p>
                      Raison sociale : COMFAYCE
                      <br />
                      Siège social : 1 Allée Serge PROKOFIEV 78280 GUYANCOURT,
                      FRANCE
                      <br />
                      Tél. : +33 (0)6 40 47 87 14
                      <br />
                      Site Internet : www.comfayce.com
                      <br />
                      Directeur de publication : M. Aymar FOUTOU KOMBO
                      <br />
                      SIREN : 835 340 753 RCS VERSAILLES
                      <br />
                      Le site Internet est hébergé par la société 1and1 sur ses
                      serveurs.
                    </p>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <h3>2. Objet</h3>
                    <p>
                      Le présent site Internet a pour objet de fournir des
                      informations sur la société COMFAYCE et ses activités.
                    </p>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <h3>3. Propriété intellectuelle</h3>
                    <p>
                      La structure générale, ainsi que les logiciels, textes,
                      photos, images animées ou non, sons, savoir-faire,
                      dessins, graphismes et tous autres éléments composants le
                      site sont la propriété exclusive de l'agence COMFAYCE. Les
                      utilisateurs du présent site sont tenus de respecter les
                      dispositions de la loi relative à l'Informatique, aux
                      fichiers et aux libertés, dont la violation est passible
                      de sanctions pénales. Toute représentation totale ou
                      partielle de ce site par quelque procédé que ce soit, sans
                      l'autorisation expresse de l'éditeur est interdite et
                      constituerait une contrefaçon sanctionnée par les articles
                      L.335-2 et suivants du Code de la propriété
                      intellectuelle. Il en est de même des bases de données
                      figurant sur le site web, qui sont protégées par les
                      dispositions de la loi du 1er juillet 1998 portant
                      transposition dans le Code de la propriété intellectuelle
                      de la directive européenne du 11 mars 1996 relative à la
                      protection juridique des bases de données. L'identité
                      visuelle de l'agence COMFAYCE ainsi que les logos des
                      marques figurant sur le site sont des marques déposées ou
                      sont la propriété de ses partenaires. Toute reproduction
                      totale ou partielle de ces marques ou de ces logos,
                      effectuée à partir des éléments du site sans
                      l'autorisation expresse de l'agence COMFAYCE est donc
                      prohibée, au sens de l'article L.713-2 du Code de la
                      propriété intellectuelle.
                    </p>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <h3>4. Contenu éditorial</h3>
                    <p>
                      Le site s'efforce d'assurer l'exactitude et la mise à jour
                      des informations diffusées et décline toute responsabilité
                      pour toute imprécision, inexactitude ou omission ainsi que
                      pour tous dommages résultant d'une introduction
                      frauduleuse d'un tiers ayant entraîné une modification des
                      informations mises à disposition. Le contenu éditorial du
                      site est à but informatif et non contractuel et peut être
                      modifié, sans recours ni préavis. L'éditeur s'engage à
                      mettre tous les moyens humains, techniques et financiers
                      pour assurer la fiabilité des annonces publiées sur le
                      site. Il ne peut en aucun cas être tenu pour responsable
                      pour toute erreur, omission, inexactitude, indisponibilité
                      ou défaut d'affichage de ces dernières. Ces informations
                      ne constituent en aucun cas une assertion, une garantie ou
                      un quelconque engagement de la part l'éditeur.
                    </p>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <h3>5. Droits et devoirs de l'utilisateur</h3>
                    <p>
                      L'utilisateur du présent site reconnaît disposer de la
                      compétence des moyens nécessaires pour accéder à ce site,
                      l'utiliser et avoir vérifié que la configuration
                      informatique utilisée ne contient aucun virus et qu'elle
                      est en parfait état de fonctionnement. L'utilisateur est
                      informé que lors de ses visites, le site collecte des
                      informations destinées à l'établissement de statistiques
                      de trafic. Un cookie peut s'installer automatiquement sur
                      son logiciel de navigation Le cookie est un bloc de
                      données qui ne permet pas de l'identifier mais qui sert à
                      enregistrer des informations relatives à la navigation de
                      celui-ci sur le site. La collecte d'informations
                      personnelles sur le site s'effectue en conformité avec la
                      loi n°78-17 du 6 janvier 1978 relative à l'informatique,
                      aux fichiers et aux libertés. Conformément aux lois en
                      vigueur l'utilisateur dispose d'un droit d'accès, de
                      rectification ou de suppression aux données personnelles
                      le concernant en contactant l'éditeur du site.
                    </p>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <h3>6. Liens hypertextes</h3>
                    <p>
                      Les liens hypertextes mis en place dans le cadre du site
                      Internet en direction d’autres ressources présentes sur le
                      réseau Internet ont fait l’objet d’une autorisation
                      préalable, expresse et écrite. Les utilisateurs du site
                      Internet ne peuvent mettre en place un lien hypertexte en
                      direction du site sans l’autorisation expresse, écrite et
                      préalable de l’éditeur.
                    </p>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <h3>7. Droits et devoirs de l'utilisateur</h3>
                    <p>
                      L'éditeur est tenu par une obligation de moyens en termes
                      d'accessibilité de service et met en place tous les moyens
                      nécessaires pour rendre le site accessible 7 jours sur 7
                      et 24 heures sur 24. Il peut néanmoins suspendre l'accès
                      au site sans préavis, notamment pour des raisons de
                      maintenance et de mises à niveau et il ne peut en aucun
                      cas être tenu pour responsable des éventuels préjudices
                      qui peuvent en découler.
                    </p>
                  </div>

                  <div className="col-sm-12 col-md-12">
                    <h3>8. Droit applicable</h3>
                    <p>Les présentes sont soumises au droit français.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="text-center modal-close">
                <Bouton
                  type="btn-purpleghost"
                  url="#"
                  labellien="Fermer"
                  pop=""
                  close="modal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foot;
