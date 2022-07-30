import React from "react";
import Social from "../Social";

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay overlay-65"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/banner/bg-3.jpg"
          })`,
        }}
      >
        <div className="top-style rotate-both-side dark-shape">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 163.1 150.9"
            enableBackground="new 0 0 163.1 150.9"
          >
            <path
              fill="currentColor"
              d="M119,12.1c14.4,5.6,30,11.9,37.7,23.3c7.8,11.4,7.7,28.1,3.5,42.2c-4.3,14.2-12.7,25.9-21.1,36.3    c-8.4,10.3-16.8,19.2-26.9,25.8c-10.2,6.7-22.1,11-34.1,11.2c-12,0.2-24.1-3.9-33.8-10.7c-9.7-6.9-17-16.7-23.1-27.2    C15,102.5,10,91.3,5.6,77.6C1.2,63.8-2.6,47.5,2.2,34.8C7.1,22.1,20.7,13,34.8,7.3c14.1-5.8,28.7-8.2,42.7-7C91.4,1.6,104.6,6.6,119,12.1z"
            />
          </svg>
        </div>
        <div className="bottom-style rotate-both-side dark-shape">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1400.6 1226.4"
            enableBackground="new 0 0 1400.6 1226.4"
          >
            <path
              fill="currentColor"
              d="M1384.4,488c-49.2-80.5-218.1-104.6-341.5-187.7C920.4,218,845.3,76.7,731.8,24C618.3-27.9,466.3,8.8,342,91    C217.8,173.3,120.4,301.1,59.6,449.5C-0.3,597.9-23.6,766.9,30.1,905.4c52.7,138.6,182.4,246.7,318.2,292.3    c135.9,46.5,278,29.5,397.8-1.8c119.8-32.2,216.3-78.7,303-141.2c86.7-61.7,163.6-137.7,238.7-244C1362,704.3,1433.6,568.4,1384.4,488z"
            />
          </svg>
        </div>

        <div className="frame-layout__particles"></div>
        {/* End particle animation */}
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo text-center">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hi There, I'm
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Miladra Narzo
                </h1>
                <div>
                  <div className="nav ht-list justify-content-center">
                    <span
                      className="font-alt"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="150"
                    >
                      Web Designer
                    </span>{" "}
                    <span
                      className="font-alt"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      Web Developer
                    </span>
                    <span
                      className="font-alt"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="250"
                    >
                      UI/UX Designer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="scroll-bottom go-to">
          <a href="#about">Scroll</a>
        </div>

        {/* End bottom scroll */}

        <Social />
        {/* End social slide  */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
