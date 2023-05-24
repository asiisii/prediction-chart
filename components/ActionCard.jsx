import Image from 'next/image'
import { FaSlidersH, FaHome } from 'react-icons/fa'

export const ActionCard = ({ logo: Logo, title, description }) => {
	return (
		<section className='flex gap-5 justify-between align-center p-5 m-auto bg-white rounded-md'>
			<Logo className='h-[90px] w-[70px]' />
			<div>
				<h2 className='text-[25px] text-bold'>{title}</h2>
				<p>{description}</p>
			</div>
		</section>
	)
}
