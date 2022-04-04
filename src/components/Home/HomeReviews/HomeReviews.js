import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const HomeReviews = ({ reviews }) => {
	return (
		<section className="py-5 bg-blue-500">
			<Container>
				<div className="text-center">
					<h1 className="generic-text-color">Our Valuable Customer Reviews</h1>
					<p className="text-secondary text-center w-50 mx-auto">
						The custom integration of the PS5 consol's systems lets creators
						pull data from the SSd so quickly that user can play games in a ways
						never before possible
					</p>
					<Row lg={3} xs={1} className="g-4 py-5">
						{reviews.map((review) => (
							<Review key={review.id} review={review} />
						))}
					</Row>
				</div>
			</Container>
		</section>
	);
};

export default HomeReviews;
