import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import HomeReviews from '../Home/HomeReviews/HomeReviews';

const Reviews = () => {
	const [reviews, , isLoading] = useReviews();
	return (
		<section>
			<HomeReviews reviews={reviews}></HomeReviews>
			{isLoading && (
				<Container>
					<div className="text-center mx-auto pb-5">
						<Spinner
							style={{ width: '5rem', height: '5rem' }}
							animation="border"
							variant="primary"
						/>
					</div>
				</Container>
			)}
		</section>
	);
};

export default Reviews;
