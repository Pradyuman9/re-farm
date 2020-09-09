import React, { Component } from 'react'
import Header from './comp/Header'
import Footer from './comp/Footer'
import validate from './comp/scripts'
import contact from './../images/contact.jpg'

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
    <div class="mian-content">
      <Header></Header>
    </div>
    {/* <!-- main image slider container -->

    <!-- contact --> */}
    <section id="contact">
      <div class="clsAutoFit">

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


    <Footer></Footer>
    {/* <!-- //footer --> */}

  </body>
            </div>
        )
    }
}
