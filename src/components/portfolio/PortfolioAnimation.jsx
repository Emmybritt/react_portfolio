import React, {useState} from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Contact from "../../components/contact/Contact";
import Modal from "react-modal";
// import SimpleReactLightbox from "simple-react-lightbox";
// import { SRLWrapper } from "simple-react-lightbox";

// const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];
// const AllPortfolioContent = [
//   {
//     img: "1",
//     title: "Motion Graphy",
//     subTitle: "Android App",
//     alterText: "Motion Graphy",
//     delayAnimation: "",
//     portfolioLink:
//       "https://play.google.com/store/apps/details?id=com.alightcreative.motion&hl=en&gl=US",
//   },
//   {
//     img: "3",
//     title: "E-Learning App",
//     subTitle: "Nuna ios App",
//     alterText: "Elearning App",
//     delayAnimation: "100",
//     portfolioLink:
//       "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
//   },
//   {
//     img: "2",
//     title: "Visual Design",
//     subTitle: "Themeforest Marke",
//     alterText: "Business Mockup",
//     delayAnimation: "200",
//     portfolioLink:
//       "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
//   },
//   {
//     img: "4",
//     title: "Business Card",
//     subTitle: "Graphicriver Market",
//     alterText: "E-Cosmetics",
//     delayAnimation: "0",
//     portfolioLink:
//       "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
//   },
//   {
//     img: "7",
//     title: "Code Editing",
//     subTitle: "Codecanyon Market",
//     alterText: "Bottle Illustration",
//     delayAnimation: "100",
//     portfolioLink:
//       "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
//   },
//   {
//     img: "6",
//     title: "Web Application",
//     subTitle: "Behance Shot",
//     alterText: "Web Application",
//     delayAnimation: "200",
//     portfolioLink:
//       "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
//   },
// ];
// const BrandingPortfolioContent = [
//   {
//     img: "1",
//     title: "Web Application",
//     subTitle: "Behance Shot",
//     alterText: "Web Application",
//     delayAnimation: "",
//     portfolioLink:
//       "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
//   },

//   {
//     img: "7",
//     title: "Code Editing",
//     subTitle: "Codecanyon Market",
//     alterText: "Bottle Illustration",
//     delayAnimation: "100",
//     portfolioLink:
//       "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
//   },
//   {
//     img: "3",
//     title: "Visual Design",
//     subTitle: "Themeforest Marke",
//     alterText: "Business Mockup",
//     delayAnimation: "200",
//     portfolioLink:
//       "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
//   },
// ];

// const PhotographyPortfolioContent = [
//   {
//     img: "4",
//     title: "Code Editing",
//     subTitle: "Codecanyon Market",
//     alterText: "Bottle Illustration",
//     delayAnimation: "0",
//     portfolioLink:
//       "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
//   },
//   {
//     img: "6",
//     title: "Web Application",
//     subTitle: "Behance Shot",
//     alterText: "Web Application",
//     delayAnimation: "100",
//     portfolioLink:
//       "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
//   },
// ];
// const FashionPortfolioContent = [
//   {
//     img: "4",
//     title: "Code Editing",
//     subTitle: "Figma Shoot",
//     alterText: "Bottle Illustration",
//     delayAnimation: "0",
//     portfolioLink:
//       "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
//   },
// ];

// const ProductPortfolioContent = [
//   {
//     img: "3",
//     title: "E-Learning App",
//     subTitle: "Nuna ios App",
//     alterText: "Illustration",
//     delayAnimation: "",
//     portfolioLink:
//       "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
//   },
//   {
//     img: "5",
//     title: "Visual Design",
//     subTitle: "Themeforest Marke",
//     alterText: "Business Mockup",
//     delayAnimation: "100",
//     portfolioLink:
//       "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
//   },

//   {
//     img: "6",
//     title: "Chatting Application",
//     subTitle: "Codecanyon Market",
//     alterText: "Bottle Illustration",
//     delayAnimation: "200",
//     portfolioLink:
//       "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
//   },
// ];

const PortfolioAnimation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (

    <>
    <div className="row">
      


      <div
        className="col-lg-4 col-md-6 my-3"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="blog-post" onClick={toggleModalThree}>
          <div className="blog-img">
            <div className="data">
              <span>22</span>
              <small>Apr</small>
            </div>

            <img src="img/blog/blog-3.jpg" alt="blog post"></img>
          </div>
          {/* End blog-img */}


          {/* End blog-info */}
        </div>
        {/* End blog-post */}
      </div>
      {/* End .col for blog-1 */}
    </div>
    {/* End .row */}

    {/* Start Modal for Blog-1 */}
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModalOne}
      contentLabel="My dialog"
      className="custom-modal"
      overlayClassName="custom-overlay"
      closeTimeoutMS={500}
    >
      <div>
        <button className="close-modal" onClick={toggleModalOne}>
          <img src="/img/cancel.svg" alt="close icon" />
        </button>
        {/* End close icon */}

        <div className="box_inner">
          <div className="scrollable">
            <div className="blog-grid">
              <div className="blog-img">
                <img src="img/blog/blog-1.jpg" alt="blog post"></img>
              </div>
              {/* End blog-img */}
              <article className="article">
                <div className="article-title">
                  <h2>
                    They Now Bade Farewell To The Kind But Unseen People
                  </h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="img/testimonial/team-1.jpg" alt="thumbnail" />
                    </div>
                    <div className="media-body">
                      <label>BY ALEX</label>
                      <span>26 FEB 2020</span>
                    </div>
                  </div>
                </div>
                {/* End .article-title */}

                <div className="article-content">
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et
                    pede dis dolor pretium donec dictum. Vici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                    veni amet luctus enim sem libero tellus viverra venenatis
                    aliquam. Commodo natoque quam pulvinar elit.
                  </p>
                  <p>
                    Eget aenean tellus venenatis. Donec odio tempus. Felis
                    arcu pretium metus nullam quam aenean sociis quis sem
                    neque vici libero. Venenatis nullam fringilla pretium
                    magnis aliquam nunc vulputate integer augue ultricies
                    cras. Eget viverra feugiat cras ut. Sit natoque montes
                    tempus ligula eget vitae pede rhoncus maecenas
                    consectetuer commodo condimentum aenean.
                  </p>
                  <h4>What are my payment options?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Dick Grayson</cite>
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                {/* End article content */}
              </article>
              {/* End Article */}

              <div className="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <Contact />
              </div>
              {/* End .contact Form */}
            </div>
          </div>
        </div>
      </div>
      {/* End modal box news */}
    </Modal>
    {/* End  Modal for Blog-1 */}

    {/* Start Modal for Blog-2 */}
    <Modal
      isOpen={isOpen2}
      onRequestClose={toggleModalTwo}
      contentLabel="My dialog"
      className="custom-modal"
      overlayClassName="custom-overlay"
      closeTimeoutMS={500}
    >
      <div>
        <button className="close-modal" onClick={toggleModalTwo}>
          <img src="/img/cancel.svg" alt="close icon" />
        </button>
        {/* End close icon */}

        <div className="box_inner">
          <div className="scrollable">
            <div className="blog-grid">
              <div className="blog-img">
                <img src="img/blog/blog-2.jpg" alt="blog post"></img>
              </div>
              {/* End blog-img */}
              <article className="article">
                <div className="article-title">
                  <h2>
                    Ten Mind-Blowing Reasons Why Design Is Using This
                    Technique For Exposure.
                  </h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="img/testimonial/team-2.jpg" alt="thumbnail" />
                    </div>
                    <div className="media-body">
                      <label>BY SMITH</label>
                      <span>05 JAN 2020</span>
                    </div>
                  </div>
                </div>
                {/* End .article-title */}

                <div className="article-content">
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et
                    pede dis dolor pretium donec dictum. Vici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                    veni amet luctus enim sem libero tellus viverra venenatis
                    aliquam. Commodo natoque quam pulvinar elit.
                  </p>
                  <p>
                    Eget aenean tellus venenatis. Donec odio tempus. Felis
                    arcu pretium metus nullam quam aenean sociis quis sem
                    neque vici libero. Venenatis nullam fringilla pretium
                    magnis aliquam nunc vulputate integer augue ultricies
                    cras. Eget viverra feugiat cras ut. Sit natoque montes
                    tempus ligula eget vitae pede rhoncus maecenas
                    consectetuer commodo condimentum aenean.
                  </p>
                  <h4>What are my payment options?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Dick Grayson</cite>
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                {/* End article content */}
              </article>
              {/* End Article */}

              <div className="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <Contact />
              </div>
              {/* End .contact Form */}
            </div>
          </div>
        </div>
      </div>
      {/* End modal box news */}
    </Modal>
    {/* End  Modal for Blog-2 */}

    {/* Start Modal for Blog-3 */}
    <Modal
      isOpen={isOpen3}
      onRequestClose={toggleModalThree}
      contentLabel="My dialog"
      className="custom-modal"
      overlayClassName="custom-overlay"
      closeTimeoutMS={500}
    >
      <div>
        <button className="close-modal" onClick={toggleModalThree}>
          <img src="/img/cancel.svg" alt="close icon" />
        </button>
        {/* End close icon */}

        <div className="box_inner">
          <div className="scrollable">
            <div className="blog-grid">
              <div className="blog-img">
                <img src="img/blog/blog-3.jpg" alt="blog post"></img>
              </div>
              {/* End blog-img */}
              <article className="article">
                <div className="article-title">
                  <h2>
                    I Will Tell You The Truth About Design In The Next 60
                    Seconds.
                  </h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="img/testimonial/team-3.jpg" alt="thumbnail" />
                    </div>
                    <div className="media-body">
                      <label>BY RIO</label>
                      <span>12 AUG 2020</span>
                    </div>
                  </div>
                </div>
                {/* End .article-title */}

                <div className="article-content">
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et
                    pede dis dolor pretium donec dictum. Vici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem. Adipiscing
                    veni amet luctus enim sem libero tellus viverra venenatis
                    aliquam. Commodo natoque quam pulvinar elit.
                  </p>
                  <p>
                    Eget aenean tellus venenatis. Donec odio tempus. Felis
                    arcu pretium metus nullam quam aenean sociis quis sem
                    neque vici libero. Venenatis nullam fringilla pretium
                    magnis aliquam nunc vulputate integer augue ultricies
                    cras. Eget viverra feugiat cras ut. Sit natoque montes
                    tempus ligula eget vitae pede rhoncus maecenas
                    consectetuer commodo condimentum aenean.
                  </p>
                  <h4>What are my payment options?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Dick Grayson</cite>
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                {/* End article content */}
              </article>
              {/* End Article */}

              <div className="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <Contact />
              </div>
              {/* End .contact Form */}
            </div>
          </div>
        </div>
      </div>
      {/* End modal box news */}
    </Modal>
    {/* End  Modal for Blog-3 */}
  </>

    // <p>Portjndj</p>
    // <SimpleReactLightbox>
    //   <div className="positon-relative">
    //     <div className="portfolio-filter-01">
    //       <Tabs>
    //         <TabList className="filter d-flex justify-content-center">
    //           {tabList.map((val, i) => (
    //             <Tab key={i}>{val}</Tab>
    //           ))}
    //         </TabList>
    //         {/* End tablist */}

    //         <SRLWrapper>
    //           <TabPanel>
    //             <div className="portfolio-content row lightbox-gallery">
    //               {AllPortfolioContent.map((val, i) => (
    //                 <div
    //                   className="col-sm-6 col-lg-4 grid-item product"
    //                   key={i}
    //                   data-aos="fade-right"
    //                   data-aos-duration="1200"
    //                   data-aos-delay={val.delayAnimation}
    //                 >
    //                   <div className="portfolio-box-01">
    //                     <div className="portfolio-img">
    //                       <div className="portfolio-info">
    //                         <h5>
    //                           <a href={val.portfolioLink} target="_blank">
    //                             {val.title}
    //                           </a>
    //                         </h5>
    //                         <span>{val.subTitle}</span>
    //                       </div>
    //                       {/* End .portfolio-info */}
    //                       <a
    //                         href={`img/portfolio/${val.img}.jpg`}
    //                         className="gallery-link"
    //                       >
    //                         <img
    //                           src={`img/portfolio/${val.img}.jpg`}
    //                           alt={val.alterText}
    //                         />
    //                       </a>
    //                       {/* End gallery link */}
    //                       <a
    //                         href={val.portfolioLink}
    //                         className="portfolio-icon"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                       >
    //                         <span className="ti-link"></span>
    //                       </a>
    //                       {/* End .portfolio-icon */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //             {/* End list wrapper */}
    //           </TabPanel>

    //           <TabPanel>
    //             <div className="portfolio-content row lightbox-gallery">
    //               {BrandingPortfolioContent.map((val, i) => (
    //                 <div
    //                   className="col-sm-6 col-lg-4 grid-item product"
    //                   key={i}
    //                   data-aos="fade-right"
    //                   data-aos-duration="1200"
    //                   data-aos-delay={val.delayAnimation}
    //                 >
    //                   <div className="portfolio-box-01">
    //                     <div className="portfolio-img">
    //                       <div className="portfolio-info">
    //                         <h5>
    //                           <a href={val.portfolioLink} target="_blank">
    //                             {val.title}
    //                           </a>
    //                         </h5>
    //                         <span>{val.subTitle}</span>
    //                       </div>
    //                       {/* End .portfolio-info */}
    //                       <a
    //                         href={`img/portfolio/${val.img}.jpg`}
    //                         className="gallery-link"
    //                       >
    //                         <img
    //                           src={`img/portfolio/${val.img}.jpg`}
    //                           alt={val.alterText}
    //                         />
    //                       </a>
    //                       {/* End gallery link */}
    //                       <a
    //                         href={val.portfolioLink}
    //                         className="portfolio-icon"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                       >
    //                         <span className="ti-link"></span>
    //                       </a>
    //                       {/* End .portfolio-icon */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //             {/* End list wrapper */}
    //           </TabPanel>

    //           <TabPanel>
    //             <div className="portfolio-content row lightbox-gallery">
    //               {PhotographyPortfolioContent.map((val, i) => (
    //                 <div
    //                   className="col-sm-6 col-lg-4 grid-item product"
    //                   key={i}
    //                   data-aos="fade-right"
    //                   data-aos-duration="1200"
    //                   data-aos-delay={val.delayAnimation}
    //                 >
    //                   <div className="portfolio-box-01">
    //                     <div className="portfolio-img">
    //                       <div className="portfolio-info">
    //                         <h5>
    //                           <a href={val.portfolioLink} target="_blank">
    //                             {val.title}
    //                           </a>
    //                         </h5>
    //                         <span>{val.subTitle}</span>
    //                       </div>
    //                       {/* End .portfolio-info */}
    //                       <a
    //                         href={`img/portfolio/${val.img}.jpg`}
    //                         className="gallery-link"
    //                       >
    //                         <img
    //                           src={`img/portfolio/${val.img}.jpg`}
    //                           alt={val.alterText}
    //                         />
    //                       </a>
    //                       {/* End gallery link */}
    //                       <a
    //                         href={val.portfolioLink}
    //                         className="portfolio-icon"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                       >
    //                         <span className="ti-link"></span>
    //                       </a>
    //                       {/* End .portfolio-icon */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //             {/* End list wrapper */}
    //           </TabPanel>

    //           <TabPanel>
    //             <div className="portfolio-content row lightbox-gallery">
    //               {FashionPortfolioContent.map((val, i) => (
    //                 <div
    //                   className="col-sm-6 col-lg-4 grid-item product"
    //                   key={i}
    //                   data-aos="fade-right"
    //                   data-aos-duration="1200"
    //                   data-aos-delay={val.delayAnimation}
    //                 >
    //                   <div className="portfolio-box-01">
    //                     <div className="portfolio-img">
    //                       <div className="portfolio-info">
    //                         <h5>
    //                           <a href={val.portfolioLink} target="_blank">
    //                             {val.title}
    //                           </a>
    //                         </h5>
    //                         <span>{val.subTitle}</span>
    //                       </div>
    //                       {/* End .portfolio-info */}
    //                       <a
    //                         href={`img/portfolio/${val.img}.jpg`}
    //                         className="gallery-link"
    //                       >
    //                         <img
    //                           src={`img/portfolio/${val.img}.jpg`}
    //                           alt={val.alterText}
    //                         />
    //                       </a>
    //                       {/* End gallery link */}
    //                       <a
    //                         href={val.portfolioLink}
    //                         className="portfolio-icon"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                       >
    //                         <span className="ti-link"></span>
    //                       </a>
    //                       {/* End .portfolio-icon */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //               {/* grid item  */}
    //             </div>
    //             {/* End list wrapper */}
    //           </TabPanel>

    //           <TabPanel>
    //             <div className="portfolio-content row lightbox-gallery">
    //               {ProductPortfolioContent.map((val, i) => (
    //                 <div
    //                   className="col-sm-6 col-lg-4 grid-item product"
    //                   key={i}
    //                   data-aos="fade-right"
    //                   data-aos-duration="1200"
    //                   data-aos-delay={val.delayAnimation}
    //                 >
    //                   <div className="portfolio-box-01">
    //                     <div className="portfolio-img">
    //                       <div className="portfolio-info">
    //                         <h5>
    //                           <a href={val.portfolioLink} target="_blank">
    //                             {val.title}
    //                           </a>
    //                         </h5>
    //                         <span>{val.subTitle}</span>
    //                       </div>
    //                       {/* End .portfolio-info */}
    //                       <a
    //                         href={`img/portfolio/${val.img}.jpg`}
    //                         className="gallery-link"
    //                       >
    //                         <img
    //                           src={`img/portfolio/${val.img}.jpg`}
    //                           alt={val.alterText}
    //                         />
    //                       </a>
    //                       {/* End gallery link */}
    //                       <a
    //                         href={val.portfolioLink}
    //                         className="portfolio-icon"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                       >
    //                         <span className="ti-link"></span>
    //                       </a>
    //                       {/* End .portfolio-icon */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //               {/* grid item  */}
    //             </div>
    //             {/* End list wrapper */}
    //           </TabPanel>
    //         </SRLWrapper>
    //         {/* End tabpanel */}
    //       </Tabs>
    //     </div>
    //   </div>
    // </SimpleReactLightbox>
  );
};

export default PortfolioAnimation;
