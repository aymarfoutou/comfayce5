import React from "react";
import Navbar from "./Components/Navbar/Navbar";
//import Hero from "./Components/Hero/Hero";
import Slider from "./Components/Hero/Slider";
import Prestations from "./Components/Sections/Nosprestations/Prestations";
import Realisations from "./Components/Sections/Nosrealisations/Realisations";
import Quisommesnous from "./Components/Sections/Quisommesnous/Quisommesnous";
import Contact from "./Components/Sections/Contact/Contact";
import Foot from "./Components/Sections/Foot/Foot";
import "bootstrap/dist/css/bootstrap.min.css";
import Prestaweb from "./Components/Sections/Nosprestations/PrestaWeb/PrestaWeb";
import Herovideo from "./Components/Herovideo/Herovideo";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <Slider /> */}
      <Herovideo />
      <Prestations />
      {/* <Prestaweb /> */}
      <Realisations />
      <Quisommesnous />
      <Contact />
      <Foot />
    </>
  );
};

export default App;
