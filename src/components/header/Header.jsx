import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/AVTR h (1).png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Victor Mureithi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="victor">
          <img src={header_picture} alt="Victor Mureithi" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
