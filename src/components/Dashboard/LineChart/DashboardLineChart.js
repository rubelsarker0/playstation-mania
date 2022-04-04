import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import chartData from '../chartData';

const DashboardLineChart = () => {
	return (
		<LineChart
			width={500}
			height={300}
			data={chartData}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="month" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="sell" stroke="#82ca9d" />
		</LineChart>
	);
};

export default DashboardLineChart;
