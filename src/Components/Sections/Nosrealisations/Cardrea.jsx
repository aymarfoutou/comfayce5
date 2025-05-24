import React from "react";
import "./Realisations.css";
import "./Modal.css";

const Cardrea = (props) => {
  const {
    textalterne,
    titre,
    projet,
    imagerea,
    titrepopin,
    descriptpopin,
    imagesourcepopin,
    idModal,
  } = props;
  return (
    <>
      <div className="col">
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href={`#${idModal}`}
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <div className="enSavoirPlus">+ d'infos &#8594;</div>
              </div>
            </div>
            <img src={imagerea} className="img-responsive" alt={textalterne} />
          </a>
          <div className="portfolio-caption">
            <h3 className="client">{titre}</h3>
            <p>{projet}</p>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={idModal}
        tabindex="-1"
        aria-labelledby="leModalLabel"
        aria-hidden="true"
        style={{ margin: "0" }}
      >
        <div className="modal-dialog" style={{ maxWidth: "100%", margin: "0" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="leModalLabel">
                {titrepopin}
              </h2>
              <p>{descriptpopin}</p>
              <div class="close-modal" data-bs-dismiss="modal">
                <div class="lr">
                  <div class="rl"></div>
                </div>
              </div>
            </div>
            <div className="modal-body" style={{ margin: "0 auto" }}>
              <img src={imagesourcepopin} className="img-responsive" alt="" />
            </div>
            <div className="modal-footer">
              <a href="#" class="btn full" data-bs-dismiss="modal">
                Retour aux réalisations →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardrea;
