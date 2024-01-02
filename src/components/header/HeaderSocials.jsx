import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { BsYoutube } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/victor-mureithi-97b469294">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Mureithi820">
        <FaGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
