import Image from 'next/image'
import { GrBookmark } from 'react-icons/gr'
import { AiOutlineHeart } from 'react-icons/ai'

export const SuccessCard = ({
	icon: Icon,
	location,
	discipline,
	time,
	duration,
	numOfPositions,
	totalCost,
}) => {
	return (
		<section className='flex gap-3 h-[135px] rounded-lg border-2 border-gray p-2 mx-12'>
			<Icon className='w-[70px] h-full px-1 bg-slate-300 rounded-lg' />
			<article>
				<div className='flex justify-between'>
					<div className='flex align-center gap-1 bg-[#34B233] w-[100px] rounded-sm px-1 mb-2'>
						<GrBookmark className='w-[15px] h-[20px]' />
						<h1 className='font-medium text-sm'>New Rate</h1>
					</div>
					<AiOutlineHeart className='w-[20px] h-[20px] text-[#0098DB] ' />
				</div>
				<h1 className='text-sm '>{location}</h1>
				<p className='text-xs text-gray-500'>{discipline}</p>
				<p className='text-xs text-gray-500'>
					{`${time}`}
					<span>&bull;</span>
					{`${duration}`}
					<span>&bull;</span>
					{`${numOfPositions} positions`}
				</p>
				<div className='flex justify-end items-center'>
					<p className='text-sm text-[#34B233]'>${`${totalCost}`}</p>
					<p className='text-[10px] ml-1 self-end'>/wk</p>
				</div>
			</article>
		</section>
	)
}
