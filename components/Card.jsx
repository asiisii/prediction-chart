import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { DashboardBarGraph } from './DashboardBarGraph'

export const Card = ({ title, total, direction, rate, graphcolor }) => {
	return (
		<section className='w-[350px] bg-white rounded-lg p-3'>
			<h1 className='text-[30px] font-semibold text-gray-500 mb-4'>{title}</h1>
			<article className='flex align-center justify-between'>
				<div className='flex flex-col justify-between'>
					<h2 className='text-[30px] font-semibold'>{total}</h2>
					<p
						className={`flex align-center ${
							direction === 'down' ? 'text-red-500' : 'text-emerald-500'
						}`}
					>
						{direction === 'down' ? (
							<AiOutlineArrowDown />
						) : (
							<AiOutlineArrowUp />
						)}
						{`${rate}%`}
					</p>
				</div>
				<DashboardBarGraph color={graphcolor} />
			</article>
		</section>
	)
}
