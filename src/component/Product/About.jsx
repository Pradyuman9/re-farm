import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../CSS/bootstrap.css'
import './../CSS/style.css'
import './../CSS/component.css'
import './../CSS/minimal-slider.css'
import Header from './comp/Header'
import Footer from './comp/Footer'

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

      <img class="cls-img" src='./../images/about.jpg' alt=""/>
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
