import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import logo1 from "./../../images/02d15d154afbf18851a6f9f22eb6e97c-01.png"

import refarm from "./../../images/re-farm.png"

import * as ReactBootstrap from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'


function Header(){
    return(<header>
        {/* <div className="App-header">
            <img  className ="logo1" src={logo1} alt="hello"/>
            <img className="name-Re" src={refarm} alt="hello"/>
            <div className="vl"></div>
        </div> */}
		<div class="container-fluid">
      <div class="row">
        <div class="col-md-3 top-social-icons text-center">
          <ul class="social-icons">
            <li class="mr-1"><a href="#1"><span class="fab fa-facebook-f"></span></a></li>
            <li class="mx-1"><a href="#2"><span class="fab fa-twitter"></span></a></li>
            <li class="mx-1"><a href="#3"><span class="fab fa-google-plus-g"></span></a></li>
            <li class="mx-1"><a href="3"><span class="fab fa-linkedin-in"></span></a></li>
          </ul>
        </div>
        <div class="col-md-6 logo text-center">
          <h1>
            <a><img class="sign-img" src={logo1}  alt="s"/></a>
            <a><img class="refarm" src={refarm} alt="d"/></a>
             {/* <a class="navbar-brand" href="index.html">
                            ReFarm</a> */}
          </h1>
        </div>
        <div class="col-md-3 login-right-img text-center">
          <a class="request text-uppercase" href="#1" data-toggle="modal" data-target="#exampleModalCenter">Sign In</a>
          <a class="request text-uppercase" href="#2" data-toggle="modal" data-target="#exampleModalCenter2">Sign Up</a>
        </div>
      </div>
    </div>
		<div class="header-bg">
                <div class="container">
                    <header>
                 <nav class="navbar navbar-expand-lg navbar-light">
                            <button class="navbar-toggler navbar-toggler-right mx-auto collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
				   </button>

                            <div class="navbar-collapse collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-lg-auto text-left">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="index.html">Home
                                        <span class="sr-only">(current)</span>
                                    </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="about.html">About</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#s" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services
                                        <i class="fas fa-angle-down"></i>
                                    </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="services.html">Services</a>
                                            <a class="dropdown-item" href="services.html" title="">Services 1</a>

                                            <a class="dropdown-item" href="single.html" title="">Single Page</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="gallery.html">Gallery</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="blog.html">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.html">Contact</a>
                                    </li>

                                </ul>
                                <form action="#" method="post" class="form-inline my-2 my-lg-0 header-search">
                                    <input class="form-control" type="search" placeholder="Search here..." name="Search" required=""/>
                                    <button class="btn btn1 my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>	
    </header>
    )
}

export default Header;