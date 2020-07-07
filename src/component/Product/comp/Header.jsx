

import React from "react"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,withRouter,
    useRouteMatch,
     useParams
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import logo1 from "./../../images/02d15d154afbf18851a6f9f22eb6e97c-01.png"
import Home from './../Home'

import refarm from "./../../images/re-farm.png"

function Header(props){
    let match = useRouteMatch();
    return(
        <header>
        {/* <div classNameName="App-header">
            <img  classNameName ="logo1" src={logo1} alt="hello"/>
            <img classNameName="name-Re" src={refarm} alt="hello"/>
            <div classNameName="vl"></div>
        </div> */}
		<div className="container-fluid">
      <div className="row">
        <div className="col-md-3 top-social-icons text-center">
          <ul className="social-icons">
            <li className="mr-1"><a href="#1"><span className="fab fa-facebook-f"></span></a></li>
            <li className="mx-1"><a href="#2"><span className="fab fa-twitter"></span></a></li>
            <li className="mx-1"><a href="#3"><span className="fab fa-google-plus-g"></span></a></li>
            <li className="mx-1"><a href="3"><span className="fab fa-linkedin-in"></span></a></li>
          </ul>
        </div>
        <div className="col-md-6 logo text-center">
          <h1>
            <a><img className="sign-img" src={logo1}  alt="s"/></a>
            <a><img className="refarm" src={refarm} alt="d"/></a>
             {/* <a className="navbar-brand" href="index.html">
                            ReFarm</a> */}
          </h1>
        </div>
        <div className="col-md-3 login-right-img text-center">
          <a className="request text-uppercase" href="#1" data-toggle="modal" data-target="#exampleModalCenter">Sign In</a>
          <a className="request text-uppercase" href="#2" data-toggle="modal" data-target="#exampleModalCenter2">Sign Up</a>
        </div>
      </div>
    </div>
		<div className="header-bg">
                <div className="container">
                    <header>
                 <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler navbar-toggler-right mx-auto collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
				   </button>

                            <div className="navbar-collapse collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-lg-auto text-left">
                                    <li className="nav-item active">
                                        <Link to={`/`} className="nav-link" >Home</Link>
                                        {/* <span className="sr-only">(current)</span> */} 
                                    </li>
                                    <li className="nav-item">
                                    <Link to={"/products"} className="nav-link" >About</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#s" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="services.html">Services</a>
                                            <a className="dropdown-item" href="services.html" title="">Services 1</a>

                                            <a className="dropdown-item" href="single.html" title="">Single Page</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="gallery.html">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="blog.html">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact</a>
                                    </li>

                                </ul>
                                <form action="#" method="post" className="form-inline my-2 my-lg-0 header-search">
                                    <input className="form-control" type="search" placeholder="Search here..." name="Search" required=""/>
                                    <button className="btn btn1 my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
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