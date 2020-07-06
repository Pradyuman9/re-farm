import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../CSS/bootstrap.css'
import './../CSS/style.css'
import './../CSS/component.css'
import './../CSS/minimal-slider.css'
import Header from './comp/Header'
import Footer from './comp/Footer'

//images import
import one from "./../images/1.jpg"
import two from "./../images/2.jpg"
import three from "./../images/3.png"
import four from "./../images/4.jpg"
import five from "./../images/5.jpg"
import six from "./../images/6.png"
import about from "./../images/about.jpg"
import bottom from "./../images/bottom.jpg"
import farming from "./../images/farming.jpg"
import homev1 from "./../images/homev1.jpg"
import homev2 from "./../images/homev2.jpg"
import method from "./../images/method.png"
import n1 from "./../images/n1.jpg"
import n4 from "./../images/n4.jpg"
import new1 from "./../images/new.png"
import newsletter from "./../images/newsletter.jpg"
import p1 from "./../images/p1.jpg"
import p2 from "./../images/p2.jpg"
import p3 from "./../images/p3.jpg"
import p4 from "./../images/p4.jpg"
import p5 from "./../images/p5.jpg"
import p6 from "./../images/p5.jpg"
import refarm from "./../images/refarm.png"
import refarmlogo from "./../images/refarmlogo.png"
import signin from "./../images/signin.jpg"
import tracking from "./../images/tracking.jpg"
import x1 from "./../images/x1.jpg"
import x2 from "./../images/x2.jpg"
import x3 from "./../images/x3.jpg"
import x4 from "./../images/x4.jpg"

const mystyle={
    fontfamily:"Oswald, sans-serif"
};
const styleColour={
    color: "#333"
}

function About(){
    return(
    <div>
      <head>
      	<meta charset="utf-8"/>
				<title>About</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="keywords" content="ReFarm "></meta>
				<link href="./../CSS/bootstrap.css" rel="stylesheet" type="text/css"/>
				<link rel="stylesheet" href="./../CSS/component.css" type="text/css" media="all"/>
				<link href="./../CSS/style.css" rel="stylesheet" type="text/css"/>
				<link href="./../CSS/minimal-slider.css" rel="stylesheet" type="text/css"/>
			</head>
			<body data-gr-c-s-loaded="true" cz-shortcut-listen="true"></body>
			 {/* <!-- Demo bar start --> */}
  		<div class="mian-content">
    		<Header></Header>
  		</div>
			<section id="about">
      <div class="clsAutoFit">

      <img class="cls-img" src={about} alt=""/>
      <div class="content-wrap">
        <p class="aaa" style={{"color": "#2c3446"}}>Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem </p>
      </div>
      <div class="content-wrap-2">
        <p class="aaa" style={{"color": "#2c3446"}}> Mauris porroinit consectetur cursus tortor vel interdum.Simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div class="btn-1">
        <button type="button" class="btn btn-dark btn-lg download-button"> Read More</button>
      </div>
      </div>
    </section>
		<Footer></Footer>
    </div>)
}

export default About;
