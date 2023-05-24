import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { BillRateCard } from '@/components/BillRateCard'
import { BillRateLayout } from '@/components/BillRateLayout'
import { MdOutlineThumbUp, MdOutlineEmail, MdOutlineSend } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { usePageProviderContext } from '@/components/PageContext'
import PrivateRoute from '@/components/PrivateRoute'

const ShareBillRatePage = () => {
	const [activeCard, setActiveCard] = useState(null)
	const [, setPageTitle] = usePageProviderContext()
	const router = useRouter()

	useEffect(() => {
		setPageTitle('Share Bill Rate')
	}, [])

	const redirectPage = () => {
		if (activeCard === 2) return router.push('/generate_order')
	}

	const handleCardClick = cardIndex => {
		setActiveCard(cardIndex)
	}

	const content = () => (
		<>
			<BillRateCard
				icon={MdOutlineThumbUp}
				labelText='Request Approval'
				description='Send this adjusted bill rate to your manager for approval'
				isActive={activeCard === 0}
				onClick={() => handleCardClick(0)}
			/>
			<BillRateCard
				icon={MdOutlineEmail}
				labelText='Share the Rate Card'
				description='Send the proposed rate card to your account manager or staff'
				isActive={activeCard === 1}
				onClick={() => handleCardClick(1)}
			/>

			<BillRateCard
				icon={MdOutlineSend}
				labelText='Generate Orders'
				description='Publish orders to ShiftWise based on the approved bill rates'
				isActive={activeCard === 2}
				onClick={() => handleCardClick(2)}
			/>
		</>
	)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
		>
			<BillRateLayout
				cardTitle='Share Bill Rates'
				content={content}
				btn1labelText='Cancel'
				btn1Style={{ color: '#0098DB', backgroundColor: 'transparent' }}
				btn2labelText='Next'
				btn2Style={{
					padding: '3px',
					backgroundColor: '#003C69',
					color: 'white',
					border: '1px solid gray',
					borderRadius: '5px',
					width: '70px',
				}}
				handleClick={redirectPage}
			/>
		</motion.div>
	)
}

export default PrivateRoute(ShareBillRatePage)
