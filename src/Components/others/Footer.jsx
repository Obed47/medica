import React from "react";
import media1 from "../others/assets/media1.png";
import media2 from "../others/assets/media2.png";
import media3 from "../others/assets/media3.png";
import media4 from "../others/assets/media4.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="messages">
        <div>
          Fill in info about your symtoms,
          heriditary illnesses and others
          Fill in info about your symtoms,
          heriditary illnesses and others
        </div>
        <div>
          Fill in info about your symtoms,
          heriditary illnesses and others
          Fill in info about your symtoms,
          heriditary illnesses and others
        </div>
        <div>
          Fill in info about your symtoms,
          heriditary illnesses and others
          Fill in info about your symtoms,
          heriditary illnesses and others
        </div>
      </div>
      <div className="socials-medias">
        <div className="images">
          <img src={media1} alt="social-media" />
          <img src={media2} alt="social-media" />
          <img src={media3} alt="social-media" />
          <img src={media4} alt="social-media" />
        </div>
        <p className="copyright">medica@copyright2024</p>
      </div>
    </div>
  );
};

export default Footer;
