import React from "react";
import style from "./Boutons.module.css";

const Bouton = ({ type, url, labellien, pop, close }) => {
  const btnType = style[type] || style.default;
  return (
    <>
      <a
        href={url}
        className={`${style.btn} ${btnType}`}
        data-bs-toggle={pop}
        data-bs-dismiss={close}
      >
        {labellien}
      </a>
    </>
  );
};

export default Bouton;
