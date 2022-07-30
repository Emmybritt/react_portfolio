import React from "react";
import Social from "../Social";
import TextLoop from "react-text-loop";
import { FaAngleDown } from "react-icons/fa";
import { videoTagString, VideoTag } from "react-video-tag";

videoTagString({
  src: "https://www.ibthemespro.com/resource/krozo/resources/video.mp4",
  poster: "img/bg-2.jpg",
});

const Slider = () => {
  return (
    <>
      <section
        id="home"
        className="home-banner slider-five-video inner-content-static overlay overlay-75 video-banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/banner/bg-2.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo text-center">
                <h1 className="font-alt">
                  I'm <span>David </span>Rockstar
                </h1>
                <h2 className="mb-4">
                  <TextLoop>
                    <span className="loop-text">Web Developer</span>
                    <span className="loop-text"> UI/UX Designer</span>
                    <span className="loop-text"> App Developer</span>
                  </TextLoop>{" "}
                </h2>
                <Social />
                {/* End social slide  */}
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="video-background">
          <VideoTag
            autoPlay={`${true}`}
            muted={`${true}`}
            playsInline={`${true}`}
            loop={`${true}`}
            src={`${"https://www.ibthemespro.com/resource/krozo/resources/video.mp4"}`}
            poster={`${"img/bg-2.jpg"}`}
          />
        </div>

        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
        {/* End bottom scroll */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
