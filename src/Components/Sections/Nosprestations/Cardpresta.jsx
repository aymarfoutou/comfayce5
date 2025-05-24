import React from "react";
import "./Prestations.css";
import Bouton from "../Boutons/Bouton";

const Cardpresta = (props) => {
  const { iconpresta, textalterne, titre, description, lien, nomlien, popin } =
    props;
  return (
    <>
      <div className="col">
        <a href={lien} className="cardTolink" data-bs-toggle="modal">
          <div className="presta-card">
            <div>
              <img
                src={iconpresta}
                alt={textalterne}
                className="img-responsive morph"
              />
              <h3 className="service-heading">{titre}</h3>
              <p>{description}</p>
              {/* <button className="btn ghost" data-bs-toggle="modal">
                {nomlien}
              </button> */}
              <Bouton
                type="btn-purpleghost"
                url={`#${popin}`}
                labellien="Plus d'infos →"
                pop="modal"
              />
            </div>
          </div>
        </a>
      </div>
      <div
        className="modal fade prestaset"
        id="siteweb"
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
              <div className="close-modal" data-bs-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
            </div>
            <div className="modal-body" style={{ textAlign: "left" }}>
              <div className="container">
                <div className="row text-center">
                  <div className="col-sm-12 col-md-12">
                    <div className="b-card">
                      <div>
                        <img
                          src="../../src/assets/images/computer2.svg"
                          className="img-responsive"
                        />
                      </div>
                      <h2>- Sites web - </h2>
                      <p>
                        Le présent site Internet a pour objet de fournir des
                        informations sur la société COMFAYCE et ses activités.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <div className="s-card">
                      <div class="container">
                        <div class="row align-items-center">
                          <div class="col-sm-2">
                            <img
                              src="../../src/assets/images/computer2.svg"
                              className="img-responsive-small"
                            />
                          </div>
                          <div class="col-sm-10">
                            <h3 className="nous-heading">
                              CMS et sites auto-administrables
                            </h3>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-12">
                            <p>
                              Nous développons des sites web
                              auto-administrables, à la conception dynamique et
                              naturellement visible dans les moteurs de
                              recherche. Ex : WordPress, Joomla...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-md-2">
                    <div className="s-card">
                      <div class="container">
                        <div class="row align-items-center">
                          <div class="col-sm-2">
                            <img
                              src="../../src/assets/images/computer2.svg"
                              className="img-responsive-small"
                            />
                          </div>
                          <div class="col-sm-10">
                            <h3 className="nous-heading">
                              CMS et sites auto-administrables
                            </h3>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-12">
                            <p>
                              Nous développons des sites web
                              auto-administrables, à la conception dynamique et
                              naturellement visible dans les moteurs de
                              recherche. Ex : WordPress, Joomla...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <div className="s-card">
                      <div class="container">
                        <div class="row align-items-center">
                          <div class="col-sm-2">
                            <img
                              src="../../src/assets/images/computer2.svg"
                              className="img-responsive-small"
                            />
                          </div>
                          <div class="col-sm-10">
                            <h3 className="nous-heading">
                              CMS et sites auto-administrables
                            </h3>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-12">
                            <p>
                              Nous développons des sites web
                              auto-administrables, à la conception dynamique et
                              naturellement visible dans les moteurs de
                              recherche. Ex : WordPress, Joomla...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 order-md-2">
                    <div className="s-card">
                      <div class="container">
                        <div class="row align-items-center">
                          <div class="col-sm-2">
                            <img
                              src="../../src/assets/images/computer2.svg"
                              className="img-responsive-small"
                            />
                          </div>
                          <div class="col-sm-10">
                            <h3 className="nous-heading">
                              CMS et sites auto-administrables
                            </h3>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-12">
                            <p>
                              Nous développons des sites web
                              auto-administrables, à la conception dynamique et
                              naturellement visible dans les moteurs de
                              recherche. Ex : WordPress, Joomla...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <div className="s-card">
                      <div class="container">
                        <div class="row align-items-center">
                          <div class="col-sm-2">
                            <img
                              src="../../src/assets/images/computer2.svg"
                              className="img-responsive-small"
                            />
                          </div>
                          <div class="col-sm-10">
                            <h3 className="nous-heading">
                              CMS et sites auto-administrables
                            </h3>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-12">
                            <p>
                              Nous développons des sites web
                              auto-administrables, à la conception dynamique et
                              naturellement visible dans les moteurs de
                              recherche. Ex : WordPress, Joomla...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-sm-12 col-md-12">
                    <div className="s-conf">
                      <h2>Ils nous ont fait confiance</h2>
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-3">
                            <img
                              src="https://zbo.media/wp-content/uploads/2022/12/logo-ca-idf-zbo-media-partenaire-noir-300x133.png.webp"
                              className="img-responsive-partners"
                            />
                          </div>
                          <div className="col-sm-3">
                            <img
                              src="https://zbo.media/wp-content/uploads/2022/12/logo-alinea-noir-300x133.png.webp"
                              className="img-responsive-partners"
                            />
                          </div>
                          <div className="col-sm-3">
                            <img
                              src="https://zbo.media/wp-content/uploads/2022/12/logo-galeries-lafayette-300x133.png.webp"
                              className="img-responsive-partners"
                            />
                          </div>
                          <div className="col-sm-3">
                            <img
                              src="https://zbo.media/wp-content/uploads/2022/12/logo-point-fort-fichet-noir-300x133.png.webp"
                              className="img-responsive-partners"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
      <div
        className="modal fade prestaset"
        id="applimobile"
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
              <div className="close-modal" data-bs-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
            </div>
            <div className="modal-body" style={{ textAlign: "left" }}>
              <div className="container">
                <div className="row text-center">
                  <div className="col-sm-12 col-md-12">
                    <h2>Applis mobile</h2>
                    <p>
                      Le présent site Internet a pour objet de fournir des
                      informations sur la société COMFAYCE et ses activités.
                    </p>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <h3 className="nous-heading">
                      - Conseils en communication
                    </h3>
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
                      priscis. Post hanc adclinis Libano monti Phoenice, regio
                      plena gratiarum et venustatis, urbibus decorata magnis et
                      pulchris; in quibus amoenitate celebritateque nominum
                      Tyros excellit.
                    </p>
                    <p>
                      Quarum acerbissimum extat indicium et ad insignem memoriam
                      turpitudinis.
                    </p>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <h3 className="nous-heading">
                      - Conseils en communication
                    </h3>
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
                      priscis. Post hanc adclinis Libano monti Phoenice, regio
                      plena gratiarum et venustatis, urbibus decorata magnis et
                      pulchris; in quibus amoenitate celebritateque nominum
                      Tyros excellit.
                    </p>
                    <p>
                      Quarum acerbissimum extat indicium et ad insignem memoriam
                      turpitudinis.
                    </p>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <h3 className="nous-heading">
                      - Conseils en communication
                    </h3>
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
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#" className="btn full" data-bs-dismiss="modal">
                Fermer les mentions →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade prestaset"
        id="strategie"
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
              <div className="close-modal" data-bs-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
            </div>
            <div className="modal-body" style={{ textAlign: "left" }}>
              <div className="container">
                <div className="row text-center">
                  <div className="col-sm-12 col-md-12">
                    <h2>Stratégie digitale</h2>
                    <p>
                      Le présent site Internet a pour objet de fournir des
                      informations sur la société COMFAYCE et ses activités.
                    </p>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <h3 className="nous-heading">
                      - Conseils en communication
                    </h3>
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
                      priscis. Post hanc adclinis Libano monti Phoenice, regio
                      plena gratiarum et venustatis, urbibus decorata magnis et
                      pulchris; in quibus amoenitate celebritateque nominum
                      Tyros excellit.
                    </p>
                    <p>
                      Quarum acerbissimum extat indicium et ad insignem memoriam
                      turpitudinis.
                    </p>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <h3 className="nous-heading">
                      - Conseils en communication
                    </h3>
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
                      priscis. Post hanc adclinis Libano monti Phoenice, regio
                      plena gratiarum et venustatis, urbibus decorata magnis et
                      pulchris; in quibus amoenitate celebritateque nominum
                      Tyros excellit.
                    </p>
                    <p>
                      Quarum acerbissimum extat indicium et ad insignem memoriam
                      turpitudinis.
                    </p>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <h3 className="nous-heading">
                      - Conseils en communication
                    </h3>
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
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#" className="btn full" data-bs-dismiss="modal">
                Fermer les mentions →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade prestaset"
        id="uxui"
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
              <div className="close-modal" data-bs-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
            </div>
            <div className="modal-body" style={{ textAlign: "left" }}>
              <div className="container">
                <div className="row text-center">
                  <div className="col-sm-12 col-md-12">
                    <h2>Ux/Ui Design</h2>
                    <p>
                      Le présent site Internet a pour objet de fournir des
                      informations sur la société COMFAYCE et ses activités.
                    </p>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <h3 className="nous-heading">
                      - Conseils en communication
                    </h3>
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
                      priscis. Post hanc adclinis Libano monti Phoenice, regio
                      plena gratiarum et venustatis, urbibus decorata magnis et
                      pulchris; in quibus amoenitate celebritateque nominum
                      Tyros excellit.
                    </p>
                    <p>
                      Quarum acerbissimum extat indicium et ad insignem memoriam
                      turpitudinis.
                    </p>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <h3 className="nous-heading">
                      - Conseils en communication
                    </h3>
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
                      priscis. Post hanc adclinis Libano monti Phoenice, regio
                      plena gratiarum et venustatis, urbibus decorata magnis et
                      pulchris; in quibus amoenitate celebritateque nominum
                      Tyros excellit.
                    </p>
                    <p>
                      Quarum acerbissimum extat indicium et ad insignem memoriam
                      turpitudinis.
                    </p>
                  </div>
                </div>
                <div className="row w-separation grey">
                  <div className="col-sm-12 col-md-6 order-md-1">
                    <h3 className="nous-heading">
                      - Conseils en communication
                    </h3>
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
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#" className="btn full" data-bs-dismiss="modal">
                Fermer les mentions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardpresta;
