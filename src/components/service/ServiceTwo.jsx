import React from "react";

const ServiceContent = [
  {
    icon: "ti-ruler-pencil",
    no: "01",
    service: "RESPONSIVE LAYOUT",
    title: "Responsive layout design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "ti-image",
    no: "02",
    service: "DEVELOPMENT",
    title: "Development gorgeous graphic design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "ti-layout",
    no: "03",
    service: "GRAPHIC",
    title: "Graphic gorgeous design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "ti-brush-alt",
    no: "04",
    service: "WEB DESIGN",
    title: "Web Design gorgeous graphic design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "ti-camera",
    no: "05",
    service: "MOTION GRAPHY",
    title: "Motion Graphy design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    icon: "ti-world",
    no: "06",
    service: "PHOTOGRAPHY",
    title: "Photography design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const ServiceTwo = () => {
  return (
    <>
      <div className="row gy-4">
        {ServiceContent.map((val, i) => (
          <div className="col-sm-6 col-lg-4" key={i}>
            <div className="feature-box-02">
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <h6>
                <span>{val.no}.</span> {val.service}
              </h6>
              <h5>{val.title}</h5>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceTwo;
