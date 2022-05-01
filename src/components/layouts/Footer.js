import React from "react";
import "../layouts/Mycss.css";

const Footer = React.memo(({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "col-start-2" : "col-start-1"
      } col-end-3 row-start-4 row-end-5 bg-primary-dark text-white text-center py-5 atlancolor`}
    >
      Created by{" "}
      <a
        href="https://github.com/Aryan-master"
        target="_blank"
        rel="noreferrer"
        className=" "
        style={{color:"gold"}}
      >
        Aryan Nigam
      </a>
    </div>
  );
});

export default Footer;
