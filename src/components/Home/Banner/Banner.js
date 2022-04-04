import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import topBannerImg from '../../../assets/images/top-banner.svg';

const Banner = () => {
	const navigate = useNavigate();

	const handleContact = () => {
		navigate('/about');
	};
	return (
		<section className="generic-bg-color py-5">
			<Container>
				<Row lg={2} xs={1} className="g-4">
					<Col>
						<div className="bg-light rounded p-5 h-auto">
							<h1 className="generic-text-color mb-5">
								PS5 best console in the world! ultimate gaming experience.
							</h1>
							<p className="text-secondary text-align-justify mb-5">
								Experience lightning-fast loading with an ultra-high speed SSD,
								deeper immersion with support for haptic feedback1, adaptive
								triggers1 and 3D Audio*, and an all-new generation of incredible
								PlayStation games.
							</p>
							<Button
								onClick={handleContact}
								variant="primary"
								className="rounded-pill px-5 generic-bg-color text-uppercase"
								size="lg"
							>
								Contact Us
							</Button>
						</div>
					</Col>
					<Col>
						<img className="w-100" src={topBannerImg} alt="" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
