import React from "react";
import "./ContactUs.scss";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="ContactUs"
    >
      <div className="contact-left">
        <form>
          <div className="contact-name">
            <label htmlFor="name">Name*</label>
            <input type="text" name="name" required autoComplete="off" />
          </div>
          <div className="contact-middle">
            <div>
              <label htmlFor="email">Email Address*</label>
              <input type="email" name="email" required autoComplete="off" />
            </div>
            <div>
              <label htmlFor="name">Phone Number*</label>
              <input type="number" name="number" required autoComplete="off" />
            </div>
          </div>
          <div className="contact-message">
            <label htmlFor="message">Message*</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            ></textarea>
          </div>
          <input className="form-btn" type="button" value="Submit" />
        </form>
      </div>
      <div className="contact-right">
        <h2>Babbaza Luxury Furniture</h2>
        <div>
          <h5>Address</h5>
          <p>
            Yukarı Dudullu, Şerifali Mahallesi, Tavukçuyolu Cd No:266, 34500
            Ümraniye/İstanbul
          </p>
        </div>
        <div>
          <h5>Email</h5>
          <p>info@babbaza.com</p>
        </div>
        <div>
          <h5>Phone Number</h5>
          <p>+90 542 840 31 34</p>
        </div>
        <div className="contact-icons">
          <a href="https://www.instagram.com/luxebabazadesign/" target="_blank">
            <BsInstagram />
          </a>
          <a href="https://wa.me/905428403134" target="_blank">
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactUs;
