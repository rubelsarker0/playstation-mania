import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import InvestmentPieChart from './InvestmentPieChart/InvestmentPieChart';
import DashboardLineChart from './LineChart/DashboardLineChart';
import StackedAreaChart from './StackedAreaChart/StackedAreaChart';
import StackedBarChart from './StackedBarChart/StackedBarChart';

const Dashboard = () => {
	return (
		<Container className="my-5">
			<Row xs={1} md={2} lg={2} className="g-5 text-center">
				<Col>
					<h3 className="text-center generic-text-color">Month Wise Sell</h3>
					<DashboardLineChart></DashboardLineChart>
				</Col>
				<Col>
					<h3 className="text-center generic-text-color">
						Investment VS Revenue
					</h3>
					<StackedAreaChart></StackedAreaChart>
				</Col>
				<Col>
					<h3 className="text-center generic-text-color">
						Investment VS Revenue
					</h3>
					<StackedBarChart></StackedBarChart>
				</Col>
				<Col>
					<h3 className="text-center generic-text-color">
						Investment VS Revenue
					</h3>
					<InvestmentPieChart></InvestmentPieChart>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
