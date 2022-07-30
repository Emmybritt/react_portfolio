import React from "react";
import Header from "../../components/header/HeaderFluid";
import Slider from "../../components/slider/SliderTwo";
import About from "../../components/about/AboutFour";
import Service from "../../components/service/ServiceTwo";
import Skills from "../../components/skills/Skills";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeTwo = () => {
  useDocumentTitle("Home Dark || React Personal Portfolio Template");
  return (
    <div className="home-dark">
      <Header />
      {/* End Header Section */}
      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/* Services */}
      <section id="services" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Services</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Service />
        </div>
      </section>
      {/* End Services */}

      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          <Skills />
        </div>
      </section>
      {/* End Skills */}

      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Portfolio</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}

      <div className="section testimonial">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      {/* End testimonial */}

      {/* Blog */}
      <section id="blog" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Recent articles</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Blog />
        </div>
      </section>
      {/*  End Blog */}

      {/* Contact */}
      <section id="contact" className="section after-left-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contact us</h4>
                </div>
                {/* End .sm-title */}
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div className="sm-title">
                  <h4 className="font-alt">Get in touch</h4>
                  <p>
                    Always available for freelancing if the right project comes
                    along, Feel free to contact me.
                  </p>
                </div>
                <div className="media">
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                    123 Stree New York City , <br />
                    United States Of America <br />
                    NY 750065.
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <span className="media-body">
                    support@domain.com
                    <br />
                    info@domain.com
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <span className="media-body">
                    +044 966 9696 636
                    <br />
                    +044 966 9696 636
                  </span>
                </div>
                {/* End media */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </div>
  );
};

export default HomeTwo;
