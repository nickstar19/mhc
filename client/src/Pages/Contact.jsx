import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact_Us">
      <div class="container">
        <h2>Contact Us</h2>
        <p class="contact-info">
          <span>
            Phone Number: <a href="tel:+917498508551">+91 7498508551</a>
          </span>
          <span>
            Email:{" "}
            <a href="mailto:mhcollegeworld@gmail.com">
              mhcollegeworld@gmail.com
            </a>
          </span>
        </p>
        <p class="address ">
          <b>Address:</b> Desh Prem Jai Bhim, Mhaske wasti, near Dmart Ready,
          Ravet, Pune - 412101
        </p>
      </div>
    </div>
  );
};

export default Contact;
