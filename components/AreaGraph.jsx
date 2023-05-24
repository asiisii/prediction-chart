import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Brush,
	AreaChart,
	Area,
	ResponsiveContainer,
	Legend,
} from 'recharts'

const data = [
	{
		month: 'January',
		'RN Bill Rates': 100,
		'Allied Bill Rates': 120,
	},
	{
		month: 'February',
		'RN Bill Rates': 90,
		'Allied Bill Rates': 85,
	},
	{
		month: 'March',
		'RN Bill Rates': 90,
		'Allied Bill Rates': 85,
	},
	{
		month: 'April',
		'RN Bill Rates': 100,
		'Allied Bill Rates': 110,
	},
	{
		month: 'May',
		'RN Bill Rates': 118,
		'Allied Bill Rates': 95,
	},
	{
		month: 'June',
		'RN Bill Rates': 100,
		'Allied Bill Rates': 105,
	},
]

export const AreaGraph = () => {
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<AreaChart
				width={400}
				height={300}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='month' />
				<YAxis domain={[80, 120]} />
				<Tooltip />
				<Legend />
				<Area
					type='monotone'
					dataKey='RN Bill Rates'
					stroke='purple'
					fill='purple'
				/>
				<Area
					type='monotone'
					dataKey='Allied Bill Rates'
					stroke='skyblue'
					fill='skyblue'
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}
