import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import aboutUsImg from '../../assets/images/aboutImg.svg';

const About = () => {
	return (
		<section className="py-5">
			<Container>
				<Row lg={2} xs={1} className="g-4">
					<Col className="d-flex align-items-center ">
						<div className="m-auto">
							<img
								className="w-100 h-100 about-image d-block  rounded"
								src={aboutUsImg}
								alt=""
							/>
						</div>
					</Col>
					<Col className="d-flex align-items-center">
						<div className="rounded rounded-3 shadow-lg bg-light p-3 p-lg-4 p-xl-5">
							<div className="mb-4">
								<h2 className="generic-text-color mb-4 text-center">
									We Provide Essential Services for PS5 and for the other
									consoles
								</h2>
								<p className=" text-format text-secondary mb-5 text-align-justify">
									PlayStation Mania Recognized as a global leader in interactive
									and digital entertainment, PlayStation Mania Interactive
									Entertainment (SIE) is responsible for the PlayStation® brand
									and family of products and services. PlayStation has delivered
									innovation to the market since the launch of the original
									PlayStation in Japan in 1994. The PlayStation family of
									products and services include PlayStation®5, PlayStation®4,
									PlayStation®VR, PlayStation™Store, PlayStation®Plus,
									PlayStation™Now, and acclaimed PlayStation software titles
									from PlayStation Studios.
								</p>
							</div>
							<div>
								<h6 className="text-black my-4">
									<FontAwesomeIcon
										className="generic-text-color me-3"
										icon={faCheckCircle}
									/>
									We are committed to providing ultimate gaming services
								</h6>
								<h6 className="text-black my-4">
									<FontAwesomeIcon
										className="generic-text-color me-3"
										icon={faCheckCircle}
									/>
									We know the true needs and expectations of our gammer
								</h6>
								<h6 className="text-black my-4">
									<FontAwesomeIcon
										className="generic-text-color me-3"
										icon={faCheckCircle}
									/>
									24 Hours Online gaming services
								</h6>
								<h6 className="text-black my-4">
									<FontAwesomeIcon
										className="generic-text-color me-3"
										icon={faCheckCircle}
									/>
									Best quality gaming consoles
								</h6>

								<h6 className="text-black my-4">
									<FontAwesomeIcon
										className="generic-text-color me-3"
										icon={faCheckCircle}
									/>
									Quality Services as promised
								</h6>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
