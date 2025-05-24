import React from "react";
import "../Sections.css";
import "./Contact.css";
import TitreH2 from "../TitreH2/titreH2intro";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9cbf1071-c4ba-497a-8169-9fb5dac0943d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Votre demande a bien été envoyée !");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="nousContacter" className="nousContacter">
      <div className="container">
        <div className="containerCustom">
          <TitreH2
            titre="Contact"
            introPragraphe="Besoin d'un renseignement ?"
          />
          <div className="row w-separation w-first">
            <div className="col-sm-12 col-md-5 order-md-1">
              <h3 className="">Vous avez un projet ?</h3>
              <p>
                Décrivez-nous en quelques lignes ce que vous souhaitez réaliser
                et nous vous donnerons une estimation du coût et du temps de
                réalisation
              </p>
            </div>
            <div className="col-sm-12 col-md-7 order-md-2">
              <div>
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    className="form-control"
                    name="nom"
                    placeholder="Votre nom ?"
                    required
                  />

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="votre@email"
                    required
                  />

                  <textarea
                    type="text"
                    className="form-control"
                    name="message"
                    placeholder="Ex : Je souhaites créer le site web de mon association..."
                    required
                  ></textarea>
                  <button type="submit" className="btn-soumettre">
                    Soumettre mon projet
                  </button>
                </form>
                <span className="message-succes">{result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
