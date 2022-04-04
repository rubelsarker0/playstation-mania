import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Banner from './Banner/Banner';
import HomeReviews from './HomeReviews/HomeReviews';

const Home = () => {
	const [reviews] = useReviews();
	const navigate = useNavigate();

	const handleAllReviews = () => {
		navigate('/reviews');
	};

	return (
		<section>
			<Banner></Banner>
			<HomeReviews reviews={reviews.slice(0, 3)}></HomeReviews>
			<Container className="d-flex justify-content-center pb-5">
				<Button
					className="generic-bg-color text-center text-uppercase rounded-pill px-5 py-2 fw-bold"
					onClick={handleAllReviews}
				>
					See All Reviews
				</Button>
			</Container>
		</section>
	);
};

export default Home;
