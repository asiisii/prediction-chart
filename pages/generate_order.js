import { motion } from 'framer-motion'
import { BillRateLayout } from '@/components/BillRateLayout'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { BsInfoCircle } from 'react-icons/bs'
import { ImSpinner8 } from 'react-icons/im'

const GenerateOrderPage = () => {
	const [isPublishing, setIsPublishing] = useState(false)
	const router = useRouter()

	const initialContent = () => (
		<div className='flex justify-between w-full'>
			<div className='flex flex-col w-[20%]  '>
				<BsInfoCircle className='mb-1 ' />
				<p className='text-sm'>Orders will be published to ShiftWise using </p>
				<p>
					<a href='#' className='underline text-blue-600'>
						standard order settings.
					</a>
				</p>
			</div>
			<div className='flex flex-col pr-32 pl-10'>
				<h1 className='font-bold tracking-[.1em]'>
					Medstar Georgetown University Medical Center
				</h1>
				<p className='text-gray-600 text-xs pb-3'>
					Order Date: 06/08/2023-09/09/2023
				</p>
				<div className='flex flex-col text-gray-600 text-left w-[70%] '>
					<div className='flex justify-between py-1'>
						<p>12</p>
						<p className='text-left'>RN - Emergency Room</p>
						<p>$96</p>
					</div>
					<hr className='h-[2px] bg-gray-300 w-full' />
					<div className='flex justify-between py-1'>
						<p>8</p>
						<p className='text-left'>RN - ICU</p>
						<p>$98</p>
					</div>
					<hr className='h-[2px] bg-gray-300 w-full' />
					<div className='flex justify-between py-1'>
						<p>10</p>
						<p>RN - NICU</p>
						<p>$92</p>
					</div>
					<hr className='h-[2px] bg-gray-300 w-full' />
					<div className='flex justify-between py-1'>
						<p>4</p>
						<p>Surg Tech</p>
						<p>$80</p>
					</div>
				</div>
			</div>
		</div>
	)

	const publishingContent = () => (
		<div className='flex gap-4 align-center justify-center m-auto h-[20vh]'>
			<ImSpinner8 className='animate-spin text-4xl text-[#009AD9] m-auto' />
			<p className='m-auto font-light'>Publishing...</p>
		</div>
	)

	const handleClick = () => {
		setIsPublishing(true)
		setTimeout(() => {
			router.push('/success')
		}, 1000)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
		>
			<BillRateLayout
				cardTitle='Generate Orders'
				content={isPublishing ? publishingContent : initialContent}
				btn1labelText='Cancel'
				btn1Style={{ color: '#0098DB', backgroundColor: 'transparent' }}
				btn2labelText='Publish'
				btn2Style={{
					padding: '3px',
					backgroundColor: '#003C69',
					color: 'white',
					border: '1px solid gray',
					borderRadius: '5px',
					width: '70px',
				}}
				handleClick={handleClick}
			/>
		</motion.div>
	)
}

export default GenerateOrderPage
