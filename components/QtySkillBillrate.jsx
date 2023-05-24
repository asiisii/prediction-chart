import { useState } from 'react'
import PropTypes from 'prop-types'
import { BarGraph } from './BarGraph'
import { alliedSet } from '../public/utils/data'

export const QtySkillBillRate = ({ skillSet, data }) => {
	const [qty, setQty] = useState(1)

	let skillSetText = ''
	const billRate = data[data.length - 1].rate

	if (alliedSet.has(skillSet)) {
		skillSetText = `Allied - ${skillSet}`
	} else {
		skillSetText = `RN - ${skillSet}`
	}

	return (
		<article
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				gap: '20px',
				marginTop: '20px',
			}}
		>
			<input
				type='text'
				value={qty}
				onChange={event => setQty(event.target.value)}
				style={{
					padding: '3px',
					width: '50px',
					height: '80px',
					textAlign: 'center',
					backgroundColor: '#F7F7F7',
				}}
			/>
			<article
				style={{ backgroundColor: '#F7F7F7', padding: '5px', flex: '2' }}
			>
				<section style={{ display: 'flex', justifyContent: 'space-between' }}>
					<h1>{skillSetText}</h1>
					<h1>${Number(billRate * qty).toFixed(2)}</h1>
				</section>
				<BarGraph data={data} qty={qty} />
			</article>
		</article>
	)
}

QtySkillBillRate.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			rate: PropTypes.number.isRequired,
			startDate: PropTypes.instanceOf(Date).isRequired,
		})
	).isRequired,
	skillSet: PropTypes.string.isRequired,
}

QtySkillBillRate.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			rate: PropTypes.number.isRequired,
			startDate: PropTypes.instanceOf(Date).isRequired,
		})
	).isRequired,
	skillSet: PropTypes.string.isRequired,
}
