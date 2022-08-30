import React, {useState} from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Contact from "../../components/contact/Contact";
import Modal from "react-modal";
// import SimpleReactLightbox from "simple-react-lightbox";
// import { SRLWrapper } from "simple-react-lightbox";

// const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];

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
        <div className="blog-post" onClick={toggleModalOne}>
          <div className="blog-img">
            <div className="data">
              <span>22</span>
              <small>Jan</small>
            </div>

            <img src={require('../../assets/ulego.png')} alt="blog post"></img>
          </div>
          {/* End blog-img */}


          {/* End blog-info */}
        </div>
        {/* End blog-post */}
      </div>
      <div
        className="col-lg-4 col-md-6 my-3"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="blog-post" onClick={toggleModalTwo}>
          <div className="blog-img">
            <div className="data">
              <span>22</span>
              <small>Jan</small>
            </div>

            <img height={185} width='100%' src={require('../../assets/expenses-tracker.png')} alt="blog post"></img>
          </div>
          {/* End blog-img */}


          {/* End blog-info */}
        </div>
        {/* End blog-post */}
      </div>
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
              <small>Jan</small>
            </div>

            <img height={185} width='100%' src={require('../../assets/job.jpg')} alt="blog post"></img>
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
          <span style={{
            color: 'white'
          }}>X</span>
        </button>
        {/* End close icon */}

        <div className="box_inner">
          <div className="scrollable">
            <div className="blog-grid">
              <div className="blog-img">
                <img src={require('../../assets/ulego.png')} alt="blog post"></img>
              </div>
              {/* End blog-img */}
              <article className="article">
                <div className="article-title">
                  <h2>
                    Ulego Fintech Mobile Application
                  </h2>
                  <div className="media">
                    
                    <a href="https://play.google.com/store/apps/details?id=com.ulegoapp_app">Click To Visit Link</a>
                  </div>
                </div>
                {/* End .article-title */}

                <div className="article-content">
                 

                </div>
                {/* End article content */}
              </article>
              {/* End Article */}

              <div className="contact-form article-comment">
                <h4>Send Message to me</h4>
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
           <span style={{
            color: 'white'
           }}>X</span>
        </button>
        {/* End close icon */}

        <div className="box_inner">
          <div className="scrollable">
            <div className="blog-grid">
              <div className="blog-img">
              <img width='100%' src={require('../../assets/expenses-tracker.png')} alt="blog post"></img>
              </div>
              {/* End blog-img */}
              <article className="article">
                <div className="article-title">
                  <h2>
                    Expenses Tracking Application
                  </h2>
                  
                </div>
                {/* End .article-title */}

                <div className="article-content">
                <a href="https://github.com/Tracking">Click Link to view App</a>
                </div>
                {/* End article content */}
              </article>
              {/* End Article */}

              <div className="contact-form article-comment">
                <h4>Send me a Review</h4>
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
    {/* Start Modal for Blog-2 */}
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
           <span style={{
            color: 'white'
           }}>X</span>
        </button>
        {/* End close icon */}

        <div className="box_inner">
          <div className="scrollable">
            <div className="blog-grid">
              <div className="blog-img">
              
              <img width='100%' src={require('../../assets/job.jpg')} alt="blog post"></img>
              </div>
              {/* End blog-img */}
              <article className="article">
                <div className="article-title">
                  <h2>
                    Online Course Management system
                  </h2>
                  
                </div>
                {/* End .article-title */}

                <div className="article-content">
                <a href="https://vercel.com/emmybritt/vue-tailwind-css-landing-page-design">Click Link to view App</a>
                </div>
                {/* End article content */}
              </article>
              {/* End Article */}

              <div className="contact-form article-comment">
                <h4>Send me a Review</h4>
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
