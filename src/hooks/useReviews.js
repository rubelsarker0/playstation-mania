import { useEffect, useState } from 'react';

const useReviews = () => {
	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getUserReviews = async () => {
		try {
			const reviewsUrl = `/reviews.json`;
			const response = await fetch(reviewsUrl);
			const data = await response.json();
			setReviews(data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUserReviews();
	}, []);

	return [reviews, setReviews, isLoading];
};

export default useReviews;
