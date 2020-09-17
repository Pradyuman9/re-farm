import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,withRouter,
    useRouteMatch,
     useParams, Redirect
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import logo1 from "./../../images/02d15d154afbf18851a6f9f22eb6e97c-01.png"
import Home from '../Home'
import refarm from "./../../images/re-farm.png"
import SignIn from './SignIn';
import Axios from 'axios';
import SignUp from './SignUp';

export default class Header extends Component {
  constructor(props){
    super(props)
     const uid = localStorage.getItem("uid");
         let loggedIn = true
         if(uid==null){
           loggedIn=false;
         }
    this.state={
      details:[],
      loggedIn
    }
  }
  
  login=(user)=>{
    const url ='https://asia-south1-refarm.cloudfunctions.net/signInusingemailpassword'
    Axios.post(url,user)
    .then(res => {
      const details = res.data
      this.setState({details})
      console.log(details)
       if(res.data.uid){
         localStorage.setItem("uid",`${res.data.uid}`)
         this.setState({loggedIn:true})
         console.log(localStorage.getItem('uid'))
       }else{
         localStorage.setItem("error",`${res.data.error_message}`);
         console.log(localStorage.getItem('error'))
       }
    })

  }

  
  signUp=(user)=>{
    const url ='https://asia-south1-refarm.cloudfunctions.net/signUpusingemailpassword'
    Axios.post(url,user)
    .then(res => {
      const details = res.data
      this.setState({details})
      console.log(details)
       if(res.data.uid){
         localStorage.setItem("uid",`${res.data.uid}`)
         this.setState({loggedIn:true})
         console.log(localStorage.getItem('uid'))
       }else{
          localStorage.setItem("error",`${res.data.error_message}`);
         console.log(localStorage.getItem('error'))
       } 
    })
  }
  signOut=()=>{
    localStorage.clear();
    this.setState({loggedIn:false})
  }
 
    render() {
       var loggedInState=null
       var alert=null
       if(!this.state.loggedIn){
         loggedInState=<div className="col-md-3 login-right-img text-center">
         <a className="request text-uppercase" href="#1" data-toggle="modal" data-target="#exampleModalCenter">Sign In</a>
         <a className="request text-uppercase" href="#2" data-toggle="modal" data-target="#exampleModalCenter2">Sign Up</a>
       </div>
       }else{
         alert=<div class="alert">
         <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
         <strong>Welcome!</strong> You are loggedIn Succefully.
       </div>
         loggedInState=<div className="col-md-3 login-right-img text-center">
         <a onClick={()=>this.signOut()} className="request text-uppercase" href="#1" >Sign Out</a>
        
       </div>
       }
        return (
            <div>
              
              {console.log(localStorage.getItem('error'))}
              {console.log(this.state.loggedIn)}
              {console.log(localStorage.getItem('uid'))}
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
        {loggedInState}
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
                                    <Link to={"/about"} className="nav-link" >About</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to={"/products"} className="nav-link" >products</Link>
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#s" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="services.html">Services</a>
                                            <a className="dropdown-item" href="services.html" title="">Services 1</a>

                                            <a className="dropdown-item" href="single.html" title="">Single Page</a>
                                        </div>
                                    </li> */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="gallery.html">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="blog.html">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/contactUs"}className="nav-link" href="contact.html">Contact</Link>
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
    <SignIn login={this.login} path ={this.props.path}></SignIn>
    <SignUp signUp={this.signUp} path ={this.props.path}></SignUp>
            </div>
        )
    }
}


