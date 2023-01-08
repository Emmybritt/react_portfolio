import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
	var settings = {
		dots: true,
		arrow: false,
		infinite: true,
		speed: 900,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: false,
		margin: 30,
		responsive: [
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const TestimonilContent = [
		{
			imageName: require(`../../assets/res.jpeg`),
			desc: `he was the best tutor i met`,
			reviewerName: "Nancy Favour",
			rating: "5.0",
		},
		{
			imageName: require(`../../assets/michael.jpeg`),
			desc: `He is very good and i am very proud of him.`,
			reviewerName: "Michael dalu",
			rating: "4.8",
		},
		{
			imageName: require(`../../assets/vic.jpeg`),
			desc: `I recommend him for the job`,
			reviewerName: "Janiaya kiaram",
			rating: "5.0",
		},
	];

	return (
		<>
			<Slider {...settings}>
				{TestimonilContent.map((val, i) => (
					<div className="testmonial-box media" key={i} data-aos="fade-up" data-aos-duration="1200">
						<div className="avatar">
							<img src={val.imageName} alt="review comments"></img>
						</div>

						{/* End avatar */}

						<div className="testmonial-text media-body">
							<p>{val.desc}</p>
							<div className="testmonial-info">
								<h6>{val.reviewerName}</h6>
								<div className="rating-value">
									<i className="ti-star"></i>
									<span>{val.rating}</span>
								</div>
							</div>
						</div>

						{/* End testimonial-text */}
					</div>
				))}
			</Slider>
		</>
	);
}
