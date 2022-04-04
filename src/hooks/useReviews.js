import { useEffect, useState } from 'react';

const useReviews = () => {
	const [reviews, setReviews] = useState([]);

	const getUserReviews = async () => {
		try {
			const reviewsUrl = `/reviews.json`;
			const response = await fetch(reviewsUrl);
			const data = await response.json();
			setReviews(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUserReviews();
	}, []);

	return [reviews, setReviews];
};

export default useReviews;
