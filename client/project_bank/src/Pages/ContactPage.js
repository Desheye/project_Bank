// ContactPage.js
import React from "react";
import "../css/contactpage.css";
import { slideUpEaseInOut } from "../Components/animationUtils";
import { motion as m, AnimatePresence } from "framer-motion";
import IconsComponent from "../Components/MenuList";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

function ContactPage({ isMenuOpen }) {
  console.log("im here too");

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <m.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideUpEaseInOut}
          className="contact"
        >
          <div id="item-0">
            <div className="contact-pitch">
              We're Much More Closer Than You Think
            </div>
          </div>
          <div
            id="item-1"
            className="icon-container phone"
            data-contact="Call us: 123-456-7890"
          >
            <FaPhone className="icon" />
          </div>
          <div
            id="item-2"
            className="icon-container email"
            data-contact="Email: example@email.com"
          >
            <FaEnvelope className="icon" />
          </div>
          <div
            id="item-3"
            className="icon-container whatsapp"
            data-contact="WhatsApp: +1 234-567-8901"
          >
            <FaWhatsapp className="icon" />
          </div>
          <div
            id="item-4"
            className="icon-container facebook"
            data-contact="Facebook: /yourpage"
          >
            <FaFacebookF className="icon" />
          </div>
          <div
            id="item-5"
            className="icon-container twitter"
            data-contact="Twitter: @yourhandle"
          >
            <FaTwitter className="icon" />
          </div>
        </m.div>
      )}
      <IconsComponent />
    </AnimatePresence>
  );
}

export default ContactPage;
