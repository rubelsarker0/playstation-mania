import React from 'react';
import { PieChart, Pie } from 'recharts';
import chartData from '../chartData';

const InvestmentPieChart = () => {
	return (
		<PieChart width={500} height={300}>
			<Pie
				data={chartData}
				dataKey="investment"
				cx={200}
				cy={200}
				outerRadius={60}
				fill="#8884d8"
			/>
			<Pie
				data={chartData}
				dataKey="revenue"
				cx={200}
				cy={200}
				innerRadius={70}
				outerRadius={90}
				fill="#82ca9d"
				label
			/>
		</PieChart>
	);
};

export default InvestmentPieChart;
