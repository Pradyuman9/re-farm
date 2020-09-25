import React, { Component } from 'react'
import Header from './comp/Header'
import Footer from './comp/Footer'
import validate from './comp/scripts'
import contact from './../images/contact.jpg'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
    render() {
        const mystyle={
            fontfamily:"Oswald, sans-serif"
        };
        const styleColour={
            color: "#000"
        }
        return (
            <div>
                <head>
  <title>ReFarm</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta charset="utf-8"/>
  <meta name="keywords" content="ReFarm "/>
  
  <link href="./../../public/CSS/bootstrap.css" rel="stylesheet" type="text/css"/>
  <link rel="stylesheet" href="./../../public/CSS/component.css" type="text/css" media="all"/>
  <link href="./../CSS/style.css" rel="stylesheet" type="text/css"/>

  <link href="./CSS/minimal-slider.css" rel="stylesheet" type="text/css"/>

</head>
<body data-gr-c-s-loaded="true" cz-shortcut-listen="true">

    {/* <!-- Demo bar start --> */}
    <div class="main-content">
      <Header></Header>
    </div>
    {/* <!-- main image slider container -->

    <!-- contact --> */}
    <section id="contact">
      <div class="clsAutoFit1">

      <img class="con-img" src={contact} alt=""/>
      <div class="title">
    <h1 class="contact-title" style={mystyle}>Send us a Message</h1>
  </div>
  <div class="contact-wrap1">
    <p style={styleColour}>	ceo@mobifirst.co.in</p>
  </div>
  <div class="contact-wrap2">
    <p style={styleColour}>	+91 9177901022</p>
  </div>
  <div class="contact-wrap3">
    <p style={styleColour}>Hyderabad, Telangana</p>
  </div>

  <div class="wrapper">
  {/* <!-- <h2>Contact us</h2> --> */}
  <div id="error_message"></div>
  <form id="myform" action="mailto:abhishek.aashu99@gmail.com" method="post" enctype="text/plain" onsubmit="return validate();" >
    <div class="input_field">
        <input type="text" placeholder="Name" id="name"/>

    </div>
    <div class="input_field">
        <input type="text" placeholder="Subject" id="subject"/>
    </div>
    <div class="input_field">
        <input type="text" placeholder="Phone" id="phone"/>
    </div>
    <div class="input_field">
        <input type="text" placeholder="Email" id="email"/>
    </div>
    <div class="input_field msg">
        <textarea placeholder="Message" id="message"></textarea>
    </div>
    <div class="btn">
      <input type="submit" name="submit" value="Send"/>
      <input type="reset" name="reset" value="Reset"/>
    </div>
  </form>
</div>


      </div>
    </section>


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
    {/* <!-- //footer --> */}

  </body>
            </div>
        )
    }
}
