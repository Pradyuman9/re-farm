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
  <link href="./../CSS/bootstrap.css" rel="stylesheet" type="text/css"/>
  <link rel="stylesheet" href="./../CSS/component.css" type="text/css" media="all"/>
  <link href="./../CSS/style.css" rel="stylesheet" type="text/css"/>

  <link href="./../CSS/minimal-slider.css" rel="stylesheet" type="text/css"/>

</head>

<body data-gr-c-s-loaded="true" cz-shortcut-listen="true">

  {/* <!-- Demo bar start --> */}


  <div class="mian-content">
    <Header></Header>
  </div>
  {/* <!-- main image slider container --> */}
  <div class="slide-window">
    <div class="slide-wrapper"  data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">

          <div class="slide">
            <div class="slide-caption text-center">
              <p class="text-uppercase" style={mystyle}>The right choice</p>
              <h3 class="text-uppercase" style={mystyle}>REFARMING METHODOLOGIES</h3>
              <div class="cont-btn">
                <a class="btn text-uppercase" style={mystyle} href="contact.html">
                  Contact</a>
              </div>

            </div>
          </div>

          {/* <!-- <img class="testimonial-img" src="images/homev1.jpg" alt="dog-profile"> --> */}

        </div>
        <div class="carousel-item">

          <div class="slide slide2">
            <div class="slide-caption text-center">
              <p class="text-uppercase" style={mystyle}>The right choice</p>
              <h3 class="text-uppercase" style={mystyle}>Improving agriculture, improving lives.</h3>
              <div class="cont-btn">
                <a class="btn text-uppercase" style={mystyle} href="contact.html">
                  Contact</a>
              </div>

            </div>
          </div>

        </div>
      </div>

      <a class="carousel-control-prev" href="#testimonials-carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>

      </a>
      <a class="carousel-control-next" href="#testimonials-carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>

      </a>
    </div>


  </div>

  {/* <!-- end of main image slider container --> -->

  <!-- banner-bottom-refarm --> */}
  <div class="banner-bottom-refarm py-lg-5 py-3">
    <div class="container">
      <div class="inner-sec-refarmls-agileits py-lg-5 py-3">
        {/* <!---728x90---> */}

        <h4 class="sub-tittle text-uppercase text-center" style={mystyle}>What we do</h4>
        <h3 class="tittle text-center mb-lg-5 mb-3" style={mystyle}>
          WHAT WE OFFER</h3>
        {/* <!---728x90---> */}
        <ul class="grid cs-style-5 row">
          <li class="grid-info-img">
            <figure>
              <img src={p1} class="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Vegitables</h3>
                <span>Lorem ipsum </span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
          <li class="grid-info-img">
            <figure>
              <img src={p2} class="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Berries</h3>
                <span>Lorem ipsum </span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
          <li class="grid-info-img">
            <figure>
              <img src={p3} class="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Organic Dairy</h3>
                <span>Lorem ipsum </span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
          <li class="grid-info-img">
            <figure>
              <img src={p4} class="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Seeds</h3>
                <span>Lorem ipsum </span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
          <li class="grid-info-img">
            <figure>
              <img src={p5} class="img-fluid" alt="img03"/>
              <figcaption>
                <h3>Herbs</h3>
                <span>Jacob Cummings</span>
                <a href="product.html">Product</a>
              </figcaption>
            </figure>
          </li>
          <li class="grid-info-img">
            <figure>
              <img src={p6} class="img-fluid" alt="img03"/>
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
  <section class="bottom-last">
    <div class="bottom-bg py-5 bs-slider-overlay text-left">
      <div class="container">
        <h3 class="tittle text-left" style={mystyle}> WHAT WE OFFER</h3>
        <p class="text-white mb-4" style={mystyle}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem ipsum dolor sit amet Neque
          porro quisquam est qui dolorem Lorem int
          ipsum dolor sit amet.</p>
        <div class="log-in pb-md-5 pb-3">
          <a class="hover-2 btn text-uppercase" href="single.html">Read More</a>
        </div>
      </div>

    </div>
  </section>
  {/* <!-- //bottom-last -->
  <!-- ab --> */}
  <section class="banner-bottom-refarm bg-light py-lg-5 py-md-5 py-3" id="feature">
    <div class="container">
      <div class="inner-sec-refarmls-agileits py-lg-5 py-3">
        <h4 class="sub-tittle text-uppercase text-center" style={mystyle}>Features</h4>
        <h3 class="tittle text-center" style={mystyle}> Our Great Features</h3>
        <div class="row mt-lg-5 mt-md-4 mt-4">
          <div class="col-lg-4 about-in text-center">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-meteor"></i>
                <h5 class="card-title" style={mystyle}>AI/ML drives efficiency</h5>
                <p class="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>

          </div>
          <div class="col-lg-4 about-in text-center">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-lightbulb"></i>
                <h5 class="card-title" style={mystyle}>Creative Ideas</h5>
                <p class="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>

          </div>

          <div class="col-lg-4 about-in text-center">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-laptop-code"></i>
                <h5 class="card-title" style={mystyle}>Web and App based platform</h5>
                <p class="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 about-in mt-lg-4 text-center">
            <div class="card">
              <div class="card-body">
                <i class="far fa-heart mb-4"></i>
                <h5 class="card-title" style={mystyle}>User Friendly</h5>
                <p class="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 about-in mt-lg-4 text-center">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-leaf"></i>
                <h5 class="card-title" style={mystyle}>Hygiene</h5>
                <p class="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 about-in mt-lg-4 text-center">
            <div class="card">
              <div class="card-body">
                <i class="fas fa-map-marked-alt"></i>
                <h5 class="card-title" style={mystyle}>Tracking</h5>
                <p class="card-text" style={mystyle}>Lorem ipsum dolor sit amet consectetur elit,Adipisicing elit tempor.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
  {/* <!-- //ab --> */}
  <section class="team-sec main-stats-inner">
    <div class="container-fluid">
      <div class="inner-sec-refarmls-agileits">
        <div class="row stats-con">
          <div class="col-sm-3 col-6 stats_info counter_grid">

            <i class="fas fa-carrot"></i>
            <p class="counter">645</p>
            <h4>Products</h4>

          </div>
          <div class="col-sm-3 col-6 stats_info counter_grid1">

            <i class="far fa-heart"></i>
            <p class="counter">563</p>
            <h4>Satisfied Clients</h4>

          </div>
          <div class="col-md-6 main-stats-inner-img">

          </div>
          <div class="col-md-6 main-stats-inner-img two">
          </div>
          <div class="col-sm-3 col-6 stats_info counter_grid">

            <i class="fas fa-magic"></i>
            <p class="counter">1145</p>
            <h4>Varieties</h4>

          </div>
          <div class="col-sm-3 col-6 stats_info counter_grid2">

            <i class="far fa-smile"></i>
            <p class="counter">1045</p>
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
    <div class="fluid container">
    <p class="shop">sdn cbhbc</p>
    </div>
  </section>


  {/* <!-- <div class="container freebies-intro pt-md-5"> --> */}
  <section id="cta">
    <div class="row">
      <div class="col-lg-6">
        <h4 class="sub-tittle text-uppercase" style={mystyle}>Different</h4>
        <h3 class="tittle" style={mystyle}>Farming Methods</h3>
        <p>Lorem ipsum dolor sit amet Neque porro quisquam est qui dolorem Lorem int ipsum dolor sit amet when an unknown printer took a galley of type.Vivamus id tempor felis. Cras sagittis mi sit amet malesuada mollis. Mauris porroinit
          consectetur cursus tortor vel interdum.</p>
      </div>
      <div class="col-lg-6">
        <img class={method} src="images/method.png" alt=""/>
      </div>
    </div>

  </section>

  <section class="freebies bg-light pt-md-8 pt-0">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 news-grid">
          <article class="item news fadeIn">
            <figure class="news-overlay">
              <figcaption class="overlay">
                <div class="like-share-wrapper">
                  <ul>
                    <li>
                      <div class="like-button-wrapper">
                        <a href="8#" class="like_button"><i class="far fa-heart"></i></a>
                        <span class="count">98</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="freebie-content">
                  <span class="date">13/05/2020</span>
                  <h4 style={mystyle}>Ancient Farming Technique</h4>
                  <div class="group log-in">
                    <a class="hover-2 btn text-uppercase" href="single.html">Read More</a>
                  </div>
                </div>
              </figcaption>
              <img src={x1} class="img-fluid" alt="img03"/>
            </figure>
          </article>
        </div>
        <div class="col-md-6 news-grid">
          <article class="item news fadeIn">
            <figure class="news-overlay">
              <figcaption class="overlay">
                <div class="like-share-wrapper">
                  <ul>
                    <li>
                      <div class="like-button-wrapper">
                        <a href="9#" class="like_button"><i class="far fa-heart"></i></a>
                        <span class="count">57</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="freebie-content">
                  <span class="date">30/05/2020</span>
                  <h4 style={mystyle}>Ancient Farming Technique</h4>
                  <div class="group log-in">
                    <a class="hover-2 btn text-uppercase" href="single.html">Read More</a>
                  </div>
                </div>
              </figcaption>
              <img src={x2} class="img-fluid" alt="img03"/>
            </figure>
          </article>
        </div>
        <div class="col-md-6 news-grid">
          <article class="item news fadeIn">
            <figure class="news-overlay">
              <figcaption class="overlay">
                <div class="like-share-wrapper">
                  <ul>
                    <li>
                      <div class="like-button-wrapper">
                        <a href="10#" class="like_button"><i class="far fa-heart"></i></a>
                        <span class="count">49</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="freebie-content">
                  <span class="date">03/06/2020</span>
                  <h4 style={mystyle}>Ancient Farming Technique</h4>
                  <div class="group log-in">
                    <a class="hover-2 btn text-uppercase" href="single.html">Read More</a>
                  </div>
                </div>
              </figcaption>
              <img src={x3} class="img-fluid" alt="img03"/>
            </figure>
          </article>
        </div>
        <div class="col-md-6 news-grid">
          <article class="item news fadeIn">
            <figure class="news-overlay">
              <figcaption class="overlay">
                <div class="like-share-wrapper">
                  <ul>
                    <li>
                      <div class="like-button-wrapper">
                        <a href="11#" class="like_button"><i class="far fa-heart"></i></a>
                        <span class="count">85</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="freebie-content">
                  <span class="date">30/06/2020</span>
                  <h4 style={mystyle}>Ancient Farming Technique</h4>
                  <div class="group log-in">
                    <a class="hover-2 btn text-uppercase" href="single.html">Read More</a>
                  </div>
                </div>
              </figcaption>
              <img src={x4} class="img-fluid" alt="img03"/>
            </figure>
          </article>
        </div>

      </div>
    </div>
  </section>
  {/* <!-- //story -->
  <!--/testimonials--> */}
  <div class="container">
	<div class="row">
		<div class="col-sm-12">
			<div id="myCarousel" class="carousel slide-ab" data-ride="carousel">
				<h4 class="tittle-ab" style={mystyle}>Customer <b class="tittle-ab" style={mystyle}>Testimonials</b></h4>
				{/* <!-- Carousel indicators --> */}
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
				{/* <!-- Wrapper for carousel items --> */}
				<div class="carousel-inner">
					<div class="item active">
						<div class="row">
							<div class="col-sm-6">
								<div class="testimonial">
									<p style={styleColour}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src={one} alt=""/>
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Paula Wilson</b></div>
											<div class="details">Media Analyst / SkyNet</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="testimonial">
									<p style={styleColour}>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src={two} alt=""/>
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Antonio Moreno</b></div>
											<div class="details">Web Developer / SoftBee</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="row">
							<div class="col-sm-6">
								<div class="testimonial">
									<p style={styleColour}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src={three} alt=""/>
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Michael Holz</b></div>
											<div class="details">Web Developer / DevCorp</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="testimonial">
									<p style={styleColour}>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src={four} alt=""/>
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Mary Saveley</b></div>
											<div class="details">Graphic Designer / MarsMedia</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="row">
							<div class="col-sm-6">
								<div class="testimonial">
									<p style={styleColour}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src={five} alt=""/>
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>Martin Sommer</b></div>
											<div class="details">SEO Analyst / RealSearch</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="testimonial">
									<p style={styleColour}>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
								</div>
								<div class="media">
									<div class="media-left d-flex mr-3">
										<img src={six} alt=""/>
									</div>
									<div class="media-body">
										<div class="overview">
											<div class="name"><b>John Williams</b></div>
											<div class="details">Web Designer / UniqueDesign</div>
											<div class="star-rating">
												<ul class="list-inline">
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star"></i></li>
													<li class="list-inline-item"><i class="fa fa-star-o"></i></li>
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
				<a class="carousel-control left" href="#myCarousel" data-slide="prev">
					<i class="fa fa-chevron-left"></i>
				</a>
				<a class="carousel-control right" href="#myCarousel" data-slide="next">
					<i class="fa fa-chevron-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>
  {/* <!--//testimonials-->
  <!-- /newsletter--> */}
  <div class="newsletter py-lg-5 py-4 text-center">
    <div class="newsletter-inner py-lg-5 py-4">
      <h3 class="tittle text-center mb-lg-5 mb-3" style={{Color: "#fff"}}>
        Don't forget to Sign up</h3>
      <div class="newsright">
        <form action="#" method="post" class="d-flex">
          <input class="form-control" type="email" placeholder="" name="email" required=""/>
          <input class="form-control" type="submit" value="Subscribe"/>
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
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header text-center">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">

          <div class="login px-4 mx-auto mw-100">
            <h5 class="text-center mb-4">Login Now</h5>
            <form action="#" method="post">
              <div class="form-group">
                <label class="mb-2">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required=""/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label class="mb-2">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="" required=""/>
              </div>
              <div class="form-check mb-2">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary submit mb-4">Sign In</button>
              <p class="text-center pb-4">
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
  <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header text-center">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="login px-4 mx-auto mw-100">
            <h5 class="text-center mb-4">Register Now</h5>
            <form action="#" method="post">
              <div class="form-group">
                <label>First name</label>

                <input type="text" class="form-control" id="validationDefault01" placeholder="" required=""/>
              </div>
              <div class="form-group">
                <label>Last name</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="" required=""/>
              </div>

              <div class="form-group">
                <label class="mb-2">Password</label>
                <input type="password" class="form-control" id="password1" placeholder="" required=""/>
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" id="password2" placeholder="" required=""/>
              </div>

              <button type="submit" class="btn btn-primary submit mb-4">Register</button>
              <p class="text-center pb-4">
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