import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="customFooter">
      <div className="container py-5">
        <div className="row gy-4">

          {/* Contact */}
          <div className="col-md-3 col-sm-6">
            <h5 className="footerTitle">Contact Us</h5>
            <p className="footerText">
              Plot 55 ABCD & 56 D, Kandivali Industrial Estate,
              Charkop, Kandivali (W), Mumbai – 400 067.
            </p>

            <p className="footerText">
              <i className="fa-solid fa-envelope me-2"></i>
              customercare@biryanihouse.in
            </p>

            <p className="footerText">
              <i className="fa-solid fa-headset me-2"></i>
              8080801984
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-sm-6">
            <h5 className="footerTitle">Quick Links</h5>
            <ul className="footerLinks">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Others */}
          <div className="col-md-3 col-sm-6">
            <h5 className="footerTitle">Others</h5>
            <ul className="footerLinks">
              <li><a href="#">Store Locator</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Legal</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-md-3 col-sm-6">
            <h5 className="footerTitle">Follow Us</h5>

            <div className="socialBox">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="text-center mt-4 footerBottom">
          <small>© 2026 Biryani House. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;