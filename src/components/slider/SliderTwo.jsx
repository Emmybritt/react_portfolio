import React from "react";
import TextLoop from "react-text-loop";
import Social from "../Social";

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay "
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/banner/bg-1.jpg"
          })`,
        }}
      >
        <div className="frame-layout__particles"></div>
        {/* End particle animation */}
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo ">
                <h1 className="font-alt">
                  Hello,
                  <br /> I'm Raquel Murillo a <br /> Product{" "}
                  <TextLoop>
                    <span className="loop-text">Developer</span>
                    <span className="loop-text"> Designer</span>
                  </TextLoop>{" "}
                </h1>
                <div className="btn-bar mt-4">
                  <a className="px-btn px-btn-theme btn-md" href="#about">
                    See Who I'M
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-bottom go-to">
          <a href="#about">Scroll</a>
        </div>
        <Social />
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
