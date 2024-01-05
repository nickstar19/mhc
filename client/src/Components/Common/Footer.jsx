import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2>Contact Us</h2>
        <br />
        <hr />
        <div>
          <br />
          <ul>
            <li>Mobile : +91 74985 08551</li>
            <br />
            <li>Email : mhcollegeworld@gmail.com</li>
            <br />
            <li>
              <a href="/contact">Know more about us : Contact Us</a>
            </li>
            <br />
            <br />* <a href="/term">Terms</a> and
            <a href="/policy"> Our Policies</a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
