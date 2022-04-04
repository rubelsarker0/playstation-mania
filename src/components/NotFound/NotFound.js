import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import notFoundImg from '../../assets/images/not-found.svg';

const NotFound = () => {
	const navigate = useNavigate();

	const handlePreviousPage = () => {
		navigate(-1);
	};

	return (
		<Container>
			<div className="text-center py-5 mt-4">
				<img
					className="w-50"
					src={notFoundImg}
					alt="not found! two man under the tree"
				/>
				<h1 className="generic-text-color  pt-3">404!! Page Not Found!</h1>
				<Button
					onClick={handlePreviousPage}
					className="generic-bg-color rounded-pill px-5 fw-bold 5 mt-3 text-uppercase"
				>
					Go back
				</Button>
			</div>
		</Container>
	);
};

export default NotFound;
