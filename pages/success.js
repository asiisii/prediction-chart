import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Button from '@/components/Button'
import { SuccessCard } from '@/components/SuccessCard'
import { BsCheckCircleFill, BsHospital } from 'react-icons/bs'

const SuccessPage = () => {
	const router = useRouter()
	const handleClose = () => {
		setTimeout(() => {
			router.push('/dashboard')
		}, 500)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='flex flex-col items-center pt-10 w-[20%] h-[65%] bg-white rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
		>
			<BsCheckCircleFill className='text-[#0098DB] h-[30px] w-[30px] mb-2' />
			<p>Success!</p>
			<p className='text-center'>4 orders have been published to ShiftWise</p>
			<div className='h-[75%] overflow-y-auto mt-2'>
				<SuccessCard
					icon={BsHospital}
					location='Washington, D.C.'
					discipline='Register Nurse - ER'
					time='Jun 08'
					duration='13 weeks'
					numOfPositions='12'
					totalCost='8,482'
				/>
				<SuccessCard
					icon={BsHospital}
					location='Washington, D.C.'
					discipline='Register Nurse -ICU'
					time='Jun 08'
					duration='13 weeks'
					numOfPositions='8'
					totalCost='8,765'
				/>
				<SuccessCard
					icon={BsHospital}
					location='Washington, D.C.'
					discipline='Register Nurse - NICU'
					time='Jun 08'
					duration='13 weeks'
					numOfPositions='10'
					totalCost='7,957'
				/>
				<SuccessCard
					icon={BsHospital}
					location='Washington, D.C.'
					discipline='Surg Tech'
					time='Jun 08'
					duration='13 weeks'
					numOfPositions='4'
					totalCost='2,240'
				/>
			</div>
			<div className='p-5 w-full flex justify-end'>
				<Button
					handleClick={handleClose}
					labelText='Close'
					style={{
						padding: '3px',
						backgroundColor: '#003C69',
						color: 'white',
						border: '1px solid gray',
						borderRadius: '5px',
						width: '70px',
					}}
				/>
			</div>
		</motion.div>
	)
}

export default SuccessPage
