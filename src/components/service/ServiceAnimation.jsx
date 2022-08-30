import React from "react";

const ServiceContent = [
  {
    icon: "ti-ruler-pencil",
    title: "Web Development",
    descriptions: ``,
    animationDealy: "",
  },
  {
    icon: "ti-image",
    title: "Mobile Development",
    descriptions: ``,
    animationDealy: "100",
  },
  {
    icon: "ti-layout",
    title: "Planning & Researching",
    descriptions: ``,
    animationDealy: "200",
  },
  {
    icon: "ti-brush-alt",
    title: "Web Animation",
    descriptions: ``,
    animationDealy: "300",
  },
  {
    icon: "ti-camera",
    title: "Software Engineer Mentorship",
    descriptions: ``,
    animationDealy: "400",
  },
  {
    icon: "ti-world",
    title: "Web/Mobile App Deployment",
    descriptions: ``,
    animationDealy: "500",
  },
];

export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-dealay={val.animationDealy}
          >
            <div className="feature-box-01">
              <div>
                <div className="icon">
                  <i className={val.icon}></i>
                </div>
                <div className="feature-content">
                  <h5>{val.title}</h5>
                  <p>{val.descriptions}</p>
                </div>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
        {/* End .col */}
      </div>
    </>
  );
}
