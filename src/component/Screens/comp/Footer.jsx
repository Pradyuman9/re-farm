import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Footer= () => {
  return (

        <footer className="footer-emp-wthree bg-dark dotts py-lg-5 py-3">
        <div className="container">
          <div className="row footer-top">
            <div className="col-lg-4 footer-grid-refarmls">
              <div className="footer-title">
                <h3>About Us</h3>
              </div>
              <div className="footer-text">
                <p>Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget consectetur sed, convallis at tellus. Nulla porttitor accumsana tincidunt.</p>
                <ul className="social-icons">
                  <li className="mr-1"><a href="#12"><span className="fab fa-facebook-f"></span></a></li>
                  <li className="mx-1"><a href="#13"><span className="fab fa-twitter"></span></a></li>
                  <li className="mx-1"><a href="#14"><span className="fab fa-google-plus-g"></span></a></li>
                  <li className="mx-1"><a href="#15"><span className="fab fa-linkedin-in"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 footer-grid-refarmls">
              <div className="footer-title">
                <h3>Get in touch</h3>
              </div>
              <div className="contact-info">
                <h4>Location :</h4>
                <p>0926k 4th block building, Hyderabad,Telangana</p>
                <div className="phone">
                  <h4>Contact :</h4>
                  <p>Phone : +121 098 8907 9987</p>
                  <p>Email :
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 footer-grid-refarmls">
              <div className="footer-title">
                <h3>Quick Links</h3>
              </div>
              <ul className="links">
                <li>
                <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                <Link to={"/products"}>Products</Link>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
              <ul className="links">
                <li>
                  <a href="features.html">Features</a>
                </li>
                <li>
                  <Link to={"/contactUs"}>Support</Link>
                </li>
    
              </ul>
    
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="copyright-refarm mt-4">
            <p className="copy-right text-center ">© 2020 ReFarm. All Rights Reserved | Design by Abhishek Singh and Pradyuman Yadav
    
            </p>
          </div>
        </div>
      </footer>
    
  );
}
export default Footer;