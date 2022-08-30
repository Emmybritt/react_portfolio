import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>

          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2016-2019</span>
              <h6>Mathematics education</h6>
              <p>Adeniran ogunsanya college of education</p>
            </li>

            <li>
              <span className="dark-bg">2020-2021</span>
              <h6>Front end development</h6>
              <p>Wonderland Institute</p>
            </li>

            <li>
              <span className="dark-bg">2022 - till date</span>
              <h6>System achitecture</h6>
              <p>Freecodecamp</p>
            </li>
          </ul>

          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">2020</span>
              <h6>Software Engineer</h6>
              <p>Wonderland technology.</p>
             
            </li>

            <li>
              <span className="theme-bg">2021</span>
              <h6>Front end Engineer</h6>
              <p>Eagle wealth microfinance</p>
            </li>

            <li>
              <span className="theme-bg">2022</span>
              <h6>Mobile engineer</h6>
              <p>Nupat technologies</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 ml-auto my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>React js</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>React native</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 80 + "%" }}
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Vue js</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 86 + "%" }}
                >
                  <span>86%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>CSS3</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Node js</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 60 + "%" }}
                >
                  <span>60%</span>
                </div>
              </div>
            </div>

            
            {/* End skill-lt */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
