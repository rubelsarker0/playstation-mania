import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

import chartData from '../chartData';

const StackedBarChart = () => {
	return (
		<BarChart
			width={500}
			height={300}
			data={chartData}
			margin={{
				top: 20,
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
			<Bar dataKey="investment" stackId="a" fill="#8884d8" />
			<Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
		</BarChart>
	);
};

export default StackedBarChart;
