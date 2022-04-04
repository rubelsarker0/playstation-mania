import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
	const { reviewerImg, reviewerName, reviewerComment, reviewerRating } = review;
	return (
		<CardGroup>
			<Card className="pt-4 border-0 shadow-lg rounded">
				<Card.Img
					variant="top"
					className="mx-auto w-50 rounded-pill"
					src={reviewerImg}
				/>
				<Card.Body>
					<Card.Title className="generic-text-color fs-4">
						{reviewerName}
					</Card.Title>
					<Card.Text className="text-secondary">
						{reviewerComment.slice(0, 150)}
					</Card.Text>
				</Card.Body>
				<Card.Footer className="d-flex align-items-center justify-content-around">
					<div className="rating-star">
						<FontAwesomeIcon
							className="fa-1x text-warning me-3"
							icon={faStar}
						/>
						<FontAwesomeIcon
							className="fa-1x text-warning me-3"
							icon={faStar}
						/>
						<FontAwesomeIcon
							className="fa-1x text-warning me-3"
							icon={faStar}
						/>
						<FontAwesomeIcon
							className="fa-1x text-warning me-3"
							icon={faStar}
						/>
						<FontAwesomeIcon className="fa-1x text-warning" icon={faStar} />
					</div>
					<div className="rating fs-4">
						<p className="text-secondary">{reviewerRating}</p>
					</div>
				</Card.Footer>
			</Card>
		</CardGroup>
	);
};

export default Review;
