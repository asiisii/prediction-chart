import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import PropTypes from 'prop-types'
// const data2 = [ //   { //     startDate: '06/08/2023', //     rate: 40, //   } // ];

const BarGraph = ({ data, qty }) => {
	const newData = data.map(el => ({
		startDate: el.startDate,
		rate: qty * el.rate,
	}))
	const cutData = [newData[newData.length - 1]]
	return (
		<BarChart
			width={500}
			height={50}
			data={cutData}
			margin={{ left: 5 }}
			barSize={15}
			layout='vertical'
		>
			<XAxis type='number' dataKey='rate' hide />
			<YAxis
				type='category'
				dataKey='startdate'
				padding={{ left: 10, right: 10 }}
				hide
			/>
			<Tooltip />
			<Bar
				dataKey='rate'
				fill='#414bb2'
				background={{ fill: 'lightgray' }}
				radius={[10, 0, 0, 10]}
			/>
		</BarChart>
	)
}

BarGraph.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			rate: PropTypes.number.isRequired,
			startDate: PropTypes.instanceOf(Date).isRequired,
		})
	).isRequired,
	qty: PropTypes.number.isRequired,
}

export { BarGraph }
