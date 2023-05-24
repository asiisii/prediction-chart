import {
	BarChart,
	Bar,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'

const data = [
	{
		month: 'January',
		sales: 1500,
	},
	{
		month: 'February',
		sales: 1800,
	},
	{
		month: 'March',
		sales: 1200,
	},
	{
		month: 'April',
		sales: 2200,
	},
	{
		month: 'May',
		sales: 1900,
	},
	{
		month: 'June',
		sales: 2500,
	},
	{
		month: 'July',
		sales: 1700,
	},
	{
		month: 'August',
		sales: 2000,
	},
	{
		month: 'September',
		sales: 2800,
	},
	{
		month: 'October',
		sales: 2400,
	},
	{
		month: 'November',
		sales: 2100,
	},
	{
		month: 'December',
		sales: 1900,
	},
]

export const DashboardBarGraph = ({color}) => {
	return (
		<div className='w-[200px] h-[80px] '>
			<ResponsiveContainer width='100%' height='100%'>
				<BarChart width={50} height={150} data={data}>
					<Tooltip />
					<Bar dataKey='sales' stackId='a' fill={color} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

