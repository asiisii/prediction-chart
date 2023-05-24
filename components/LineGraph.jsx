import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

export const LineGraph = ({ data }) => {
	return (
		<ResponsiveContainer width='98%' height='98%'>
			<LineChart
				width={500}
				height={180}
				data={data}
				margin={{
					right: 20,
					left: -20,
				}}
			>
				<XAxis dataKey='date' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type='monotone'
					dataKey='rate'
					stroke='#8884d8'
					activeDot={{ r: 8 }}
				/>
				<Line type='monotone' dataKey='industryRate' stroke='lightgray' />
			</LineChart>
		</ResponsiveContainer>
	)
}
