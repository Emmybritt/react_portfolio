import React from "react";

const About = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<div className="row align-items-center justify-content-center">
				<div className="col-lg-6 my-3" data-aos="fade-right" data-aos-duration="1200">
					<div className="img-box dark-img-box">
						<img src={require("../../assets/emmanuel.jpeg")} className="myImage" alt="smiling a girl" />
					</div>
				</div>

				<div className="col-lg-6 my-3" data-aos="fade-right" data-aos-duration="1200" data-aos-dealay="100">
					<div className="typo-box about-me">
						<h3>Emmy britt</h3>
						<h5>
							A <span className="color-theme">Full stack engineer</span> based in{" "}
							<span className="color-theme">Lagos</span>
						</h5>
						<p>
							I design and develop softwares for customers and companies, am specialized in creating
							stylish, modern websites, Mobile apps and online stores. My passion is to design digital user
							experiences through the bold interface and meaningful interactions. Check out my Portfolio
						</p>
						<div className="row about-list">
							<div className="col-md-6">
								<div className="media">
									<label>Birthday</label>
									<p>29th july 2000</p>
								</div>
								<div className="media">
									<label>Age</label>
									<p>{currentYear - 2000} Yrs</p>
								</div>
								<div className="media">
									<label>Residence</label>
									<p>Lagos</p>
								</div>
								<div className="media">
									<label>Address</label>
									<p>46 community street yaba</p>
								</div>
							</div>
							{/* End .col */}

							<div className="col-md-6">
								<div className="media">
									<label>E-mail</label>
									<p>beritogwu@gmail.com</p>
								</div>
								<div className="media">
									<label>Phone</label>
									<p>+2347016588973</p>
								</div>
								<div className="media">
									<label>Github</label>
									<p>
										<a href="https://github.com/Emmybritt">Emmybritt</a>
									</p>
								</div>
								<div className="media">
									<label>Job</label>
									<p>Available</p>
								</div>
							</div>
							{/* End .col */}
						</div>
						{/* End .row */}
						<div className="btn-bar">
							<a className="px-btn px-btn-theme" href="../../assets/berit.pdf" download>
								Download CV
							</a>
						</div>
					</div>
					{/* End .about me */}
				</div>
				{/* End .col */}
			</div>
		</>
	);
};

export default About;
