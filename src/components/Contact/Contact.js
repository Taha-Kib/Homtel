import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Instagram from "../images/instagram.png";
import ExpandCard from "./ExpandCard";

const Contact = () => {
  const handleFacebookClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100094613253756",
      "_blank"
    );
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/homtelsignaturesuites/", "_blank");
  };

  const handleWhatsappClick = () => {
    const phoneNumber = "923008492703";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, "_blank");
  };

  // const handlePhoneClick = () => {
  //   const phoneNumber = "932244994454";

  //   // Construct the tel: URL
  //   const url = `tel:${phoneNumber}`;

  //   // Create a new <a> element
  //   const link = document.createElement("a");
  //   link.href = url;

  //   // Programmatically trigger a click on the link
  //   link.click();
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="contact_container" id="contact">
        <h2 className="section_title">Get in touch</h2>
        <h2 className="section_subtitle">Contact Us</h2>

        <div className="contactus-items">
          <FontAwesomeIcon
            className="facebook-icon"
            icon={faFacebook}
            onClick={handleFacebookClick}
          />
          {/* <ExpandCard
          icon={faEnvelope}
          classProp={"email-icon"}
          text={"heloworld@gmail.com"}
        />
        <ExpandCard
          icon={faPhone}
          classProp={"phone-icon"}
          text={"+923244994454"}
        /> */}
          <img
            className="instagram-icon"
            onClick={handleInstagramClick}
            src={Instagram}
            alt="Instagram"
          />

          <FontAwesomeIcon
            className="whatsapp-icon"
            icon={faWhatsapp}
            onClick={handleWhatsappClick}
          />

          <ExpandCard
            icon={faPhone}
            classProp={"phone-icon"}
            text={"+923008492703"}
          />
        </div>

        <div className="properties">
          <h4>Check out our listings by clicking the links below</h4>
          <ul>
            <li>
              <a rel="noreferrer" target="_blank" href="https://abnb.me/tUzLB7EVeBb">Property 1</a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://abnb.me/TdKTzoGVeBb">Property 2</a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://abnb.me/yESjzwJVeBb">Property 3</a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://abnb.me/eik5aUKVeBb">Property 4</a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://abnb.me/FuvPZrMVeBb">Property 5</a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://abnb.me/Qa0g5gOVeBb">Property 6</a>
            </li>
          </ul>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
