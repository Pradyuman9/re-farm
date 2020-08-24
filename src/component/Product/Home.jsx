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
// import bottom from "./../images/bottom.jpg"
// import farming from "./../images/farming.jpg"
// import homev1 from "./../images/homev1.jpg"
// import homev2 from "./../images/homev2.jpg"
import method from "./../images/method.png"
// import n1 from "./../images/n1.jpg"
// import n4 from "./../images/n4.jpg"
// import new1 from "./../images/new.png"
// import newsletter from "./../images/newsletter.jpg"
import p1 from "./../images/p1.jpg"
import p2 from "./../images/p2.jpg"
import p3 from "./../images/p3.jpg"
import p4 from "./../images/p4.jpg"
import p5 from "./../images/p5.jpg"
import p6 from "./../images/p5.jpg"
// import refarm from "./../images/refarm.png"
// import refarmlogo from "./../images/refarmlogo.png"
// import signin from "./../images/signin.jpg"
// import tracking from "./../images/tracking.jpg"
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
// function hideURLbar() {
//   return window.scrollTo(0, 1);
// }

function Home(){
    return(
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


  <div className="mian-content">
    <Header></Header>
  </div>
  {/* <!-- main image slider container --> */}
  <div className="slide-window">
    <div className="slide-wrapper"  data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">

          <div className="slide">
            <div className="slide-caption text-center">
              <p className="text-uppercase" style={mystyle}>The right choice</p>
              <h3 className="text-uppercase" style={mystyle}>REFARMING METHODOLOGIES</h3>
              <div className="cont-btn">
                <a className="btn text-uppercase" style={mystyle} href="contact.html">
                  Contact</a>
              </div>

            </div>
          </div>

          {/* <!-- <img className="testimonial-img" src="images/homev1.jpg" alt="dog-profile"> --> */}

        </div>
        <div className="carousel-item">

          <div className="slide slide2">
            <div className="slide-caption text-center">
              <p className="text-uppercase" style={mystyle}>The right choice</p>
              <h3 className="text-uppercase" style={mystyle}>Improving agriculture, improving lives.</h3>
              <div className="cont-btn">
                <a className="btn text-uppercase" style={mystyle} href="contact.html">
                  Contact</a>
              </div>

            </div>
          </div>

        </div>
      </div>

      <a className="carousel-control-prev" href="#testimonials-carousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>

      </a>
      <a className="carousel-control-next" href="#testimonials-carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>

      </a>
    </div>


  </div>

  {/* <!-- end of main image slider container --> -->

  <!-- banner-bottom-refarm --> */}
  <div className="banner-bottom-refarm py-lg-5 py-3">
    <div className="container">
      <div className="inner-sec-refarmls-agileits py-lg-5 py-3">
        {/* <!---728x90---> */}

        <h4 className="sub-tittle text-uppercase text-center" style={mystyle}>What we do</h4>
        <h3 className="tittle text-center mb-lg-5 mb-3" style={mystyle}>
          WHAT WE OFFER</h3>
        {/* <!---728x90---> */}
        <ul className="grid cs-style-5 row">
          <li className="grid-info-img">
            <figure>
              <img src={p1} className="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Vegitables</h3>
                <span>Lorem ipsum </span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
          <li className="grid-info-img">
            <figure>
              <img src={p2} className="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Berries</h3>
                <span>Lorem ipsum </span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
          <li className="grid-info-img">
            <figure>
              <img src={p3} className="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Organic Dairy</h3>
                <span>Lorem ipsum </span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
          <li className="grid-info-img">
            <figure>
              <img src={p4} className="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Seeds</h3>
                <span>Lorem ipsum </span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
          <li className="grid-info-img">
            <figure>
              <img src={p5} className="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Herbs</h3>
                <span>Jacob Cummings</span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
          <li className="grid-info-img">
            <figure>
              <img src={p6} className="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Farm</h3>
                <span>Lorem ipsum </span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* <!--// banner-bottom-]refarm -->
  <!-- /bottom-last --> */}
  <section className="bottom-last">
    <div className="bottom-bg py-5 bs-slider-overlay text-left">
      <div className="container">
        <h3 className="tittle text-left" style={mystyle}> WHAT WE OFFER</h3>
        <p className="text-white mb-4" style={mystyle}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem ipsum dolor sit amet Neque
          porro quisquam est qui dolorem Lorem int
          ipsum dolor sit amet.</p>
        <div className="log-in pb-md-5 pb-3">
          <a className="hover-2 btn text-uppercase" href="single.html">Read More</a>
        </div>
      </div>

    </div>
  </section>
  {/* <!-- //bottom-last -->
  <!-- ab --> */}
  <section className="banner-bottom-refarm bg-light py-lg-5 py-md-5 py-3" id="feature">
    <div className="container">
      <div className="inner-sec-refarmls-agileits py-lg-5 py-3">
        <h4 className="sub-tittle text-uppercase text-center" style={mystyle}>Features</h4>
        <h3 className="tittle text-center" style={mystyle}> Our Great Features</h3>
        <div className="row mt-lg-5 mt-md-4 mt-4">
          <div className="col-lg-4 about-in text-center">
            <div className="card">
              <div className="card-body">
                <i className="fas fa-meteor"></i>
                <h5 className="card-title" style={mystyle}>AI/ML drives efficiency</h5>
                <p className="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>

          </div>
          <div className="col-lg-4 about-in text-center">
            <div className="card">
              <div className="card-body">
                <i className="fas fa-lightbulb"></i>
                <h5 className="card-title" style={mystyle}>Creative Ideas</h5>
                <p className="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>

          </div>

          <div className="col-lg-4 about-in text-center">
            <div className="card">
              <div className="card-body">
                <i className="fas fa-laptop-code"></i>
                <h5 className="card-title" style={mystyle}>Web and App based platform</h5>
                <p className="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 about-in mt-lg-4 text-center">
            <div className="card">
              <div className="card-body">
                <i className="far fa-heart mb-4"></i>
                <h5 className="card-title" style={mystyle}>User Friendly</h5>
                <p className="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 about-in mt-lg-4 text-center">
            <div className="card">
              <div className="card-body">
                <i className="fas fa-leaf"></i>
                <h5 className="card-title" style={mystyle}>Hygiene</h5>
                <p className="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 about-in mt-lg-4 text-center">
            <div className="card">
              <div className="card-body">
                <i className="fas fa-map-marked-alt"></i>
                <h5 className="card-title" style={mystyle}>Tracking</h5>
                <p className="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
  {/* <!-- //ab --> */}
  <section className="team-sec main-stats-inner">
    <div className="container-fluid">
      <div className="inner-sec-refarmls-agileits">
        <div className="row stats-con">
          <div className="col-sm-3 col-6 stats_info counter_grid">

            <i className="fas fa-carrot"></i>
            <p className="counter">645</p>
            <h4>Products</h4>

          </div>
          <div className="col-sm-3 col-6 stats_info counter_grid1">

            <i className="far fa-heart"></i>
            <p className="counter">563</p>
            <h4>Satisfied Clients</h4>

          </div>
          <div className="col-md-6 main-stats-inner-img">

          </div>
          <div className="col-md-6 main-stats-inner-img two">
          </div>
          <div className="col-sm-3 col-6 stats_info counter_grid">

            <i className="fas fa-magic"></i>
            <p className="counter">1145</p>
            <h4>Varieties</h4>

          </div>
          <div className="col-sm-3 col-6 stats_info counter_grid2">

            <i className="far fa-smile"></i>
            <p className="counter">1045</p>
            <h4>Happy Clients</h4>

          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!--/team-->

  <!-- //team -->
  <!-- /story --> */}
  <section id="gta">
    <div className="fluid container">
    <p className="shop">sdn cbhbc</p>
    </div>
  </section>


  {/* <!-- <div className="container freebies-intro pt-md-5"> --> */}
  <section id="cta">
    <div className="row">
      <div className="col-lg-6">
        <h4 className="sub-tittle text-uppercase" style={mystyle}>Different</h4>
        <h3 className="tittle" style={mystyle}>Farming Methods</h3>
        <p>Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type.Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit
          consectetur cursus tortor vel interdum.</p>
      </div>
      <div className="col-lg-6">
        <img className={method} src="images/method.png" alt=""/>
      </div>
    </div>

  </section>

  <section className="freebies bg-light pt-md-8 pt-0">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 news-grid">
          <article className="item news fadeIn">
            <figure className="news-overlay">
              <figcaption className="overlay">
                <div className="like-share-wrapper">
                  <ul>
                    <li>
                      <div className="like-button-wrapper">
                        <a href="8#" className="like_button"><i className="far fa-heart"></i></a>
                        <span className="count">98</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="freebie-content">
                  <span className="date">13/05/2020</span>
                  <h4 style={mystyle}>Ancient Farming Technique</h4>
                  <div className="group log-in">
                    <a className="hover-2 btn text-uppercase" href="single.html">Read More</a>
                  </div>
                </div>
              </figcaption>
              <img src={x1} className="img-fluid" alt="img03"/>
            </figure>
          </article>
        </div>
        <div className="col-md-6 news-grid">
          <article className="item news fadeIn">
            <figure className="news-overlay">
              <figcaption className="overlay">
                <div className="like-share-wrapper">
                  <ul>
                    <li>
                      <div className="like-button-wrapper">
                        <a href="9#" className="like_button"><i className="far fa-heart"></i></a>
                        <span className="count">57</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="freebie-content">
                  <span className="date">30/05/2020</span>
                  <h4 style={mystyle}>Ancient Farming Technique</h4>
                  <div className="group log-in">
                    <a className="hover-2 btn text-uppercase" href="single.html">Read More</a>
                  </div>
                </div>
              </figcaption>
              <img src={x2} className="img-fluid" alt="img03"/>
            </figure>
          </article>
        </div>
        <div className="col-md-6 news-grid">
          <article className="item news fadeIn">
            <figure className="news-overlay">
              <figcaption className="overlay">
                <div className="like-share-wrapper">
                  <ul>
                    <li>
                      <div className="like-button-wrapper">
                        <a href="10#" className="like_button"><i className="far fa-heart"></i></a>
                        <span className="count">49</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="freebie-content">
                  <span className="date">03/06/2020</span>
                  <h4 style={mystyle}>Ancient Farming Technique</h4>
                  <div className="group log-in">
                    <a className="hover-2 btn text-uppercase" href="single.html">Read More</a>
                  </div>
                </div>
              </figcaption>
              <img src={x3} className="img-fluid" alt="img03"/>
            </figure>
          </article>
        </div>
        <div className="col-md-6 news-grid">
          <article className="item news fadeIn">
            <figure className="news-overlay">
              <figcaption className="overlay">
                <div className="like-share-wrapper">
                  <ul>
                    <li>
                      <div className="like-button-wrapper">
                        <a href="11#" className="like_button"><i className="far fa-heart"></i></a>
                        <span className="count">85</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="freebie-content">
                  <span className="date">30/06/2020</span>
                  <h4 style={mystyle}>Ancient Farming Technique</h4>
                  <div className="group log-in">
                    <a className="hover-2 btn text-uppercase" href="single.html">Read More</a>
                  </div>
                </div>
              </figcaption>
              <img src={x4} className="img-fluid" alt="img03"/>
            </figure>
          </article>
        </div>

      </div>
    </div>
  </section>
  {/* <!-- //story -->
  <!--/testimonials--> */}
  <div className="container">
	<div className="row">
		<div className="col-sm-12">
			<div id="myCarousel" className="carousel slide-ab" data-ride="carousel">
				<h4 className="tittle-ab" style={mystyle}>Customer <b className="tittle-ab" style={mystyle}>Testimonials</b></h4>
				{/* <!-- Carousel indicators --> */}
				<ol className="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
				{/* <!-- Wrapper for carousel items --> */}
				<div className="carousel-inner">
					<div className="item active">
						<div className="row">
							<div className="col-sm-6">
								<div className="testimonial">
									<p style={styleColour}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div className="media">
									<div className="media-left d-flex mr-3">
										<img src={one} alt=""/>
									</div>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Paula Wilson</b></div>
											<div className="details">Media Analyst / SkyNet</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="testimonial">
									<p style={styleColour}>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div className="media">
									<div className="media-left d-flex mr-3">
										<img src={two} alt=""/>
									</div>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Antonio Moreno</b></div>
											<div className="details">Web Developer / SoftBee</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="row">
							<div className="col-sm-6">
								<div className="testimonial">
									<p style={styleColour}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div className="media">
									<div className="media-left d-flex mr-3">
										<img src={three} alt=""/>
									</div>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Michael Holz</b></div>
											<div className="details">Web Developer / DevCorp</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="testimonial">
									<p style={styleColour}>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div className="media">
									<div className="media-left d-flex mr-3">
										<img src={four} alt=""/>
									</div>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Mary Saveley</b></div>
											<div className="details">Graphic Designer / MarsMedia</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="row">
							<div className="col-sm-6">
								<div className="testimonial">
									<p style={styleColour}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div className="media">
									<div className="media-left d-flex mr-3">
										<img src={five} alt=""/>
									</div>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Martin Sommer</b></div>
											<div className="details">SEO Analyst / RealSearch</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="testimonial">
									<p style={styleColour}>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div className="media">
									<div className="media-left d-flex mr-3">
										<img src={six} alt=""/>
									</div>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>John Williams</b></div>
											<div className="details">Web Designer / UniqueDesign</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- Carousel controls --> */}
				<a className="carousel-control left" href="#myCarousel" data-slide="prev">
					<i className="fa fa-chevron-left"></i>
				</a>
				<a className="carousel-control right" href="#myCarousel" data-slide="next">
					<i className="fa fa-chevron-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>
  {/* <!--//testimonials-->
  <!-- /newsletter--> */}
  <div className="newsletter py-lg-5 py-4 text-center">
    <div className="newsletter-inner py-lg-5 py-4">
      <h3 className="tittle text-center mb-lg-5 mb-3" style={{Color: "#fff"}}>
        Don't forget to Sign up</h3>
      <div className="newsright">
        <form action="#" method="post" className="d-flex">
          <input className="form-control" type="email" placeholder="" name="email" required=""/>
          <input className="form-control" type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
  {/* <!-- //newsletter-->
  <!--footer --> */}
  <Footer></Footer>
  {/* <!-- //footer -->

  <!--model-forms-->
  <!--/Login--> */}
    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">

            <div className="login px-4 mx-auto mw-100">
              <h5 className="text-center mb-4">Login Now</h5>
              <form action="#" method="post">
                <div className="form-group">
                  <label className="mb-2">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required=""/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label className="mb-2">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" required=""/>
                </div>
                <div className="form-check mb-2">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary submit mb-4">Sign In</button>
                <p className="text-center pb-4">
                  <a href="#16" data-toggle="modal" data-target="#exampleModalCenter2"> Don't have an account?</a>
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
    {/* //Login-->
      /Register--> */}
      {/* </div> */}
    <div className="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="login px-4 mx-auto mw-100">
              <h5 className="text-center mb-4">Register Now</h5>
              <form action="#" method="post">
                <div className="form-group">
                  <label>First name</label>

                  <input type="text" className="form-control" id="validationDefault01" placeholder="" required=""/>
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input type="text" className="form-control" id="validationDefault02" placeholder="" required=""/>
                </div>
                <div className="form-group">
                <label className="mb-2">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required=""/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

                <div className="form-group">
                  <label className="mb-2">Password</label>
                  <input type="password" className="form-control" id="password1" placeholder="" required=""/>
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control" id="password2" placeholder="" required=""/>
                </div>

                <button type="submit" className="btn btn-primary submit mb-4">Register</button>
                <p className="text-center pb-4">
                  <a href="1#">By clicking Register, I agree to your terms</a>
                </p>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
    </body>
    </div>

    )
}

export default Home;