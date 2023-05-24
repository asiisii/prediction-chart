import { motion } from 'framer-motion'
import { ActionCard } from '@/components/ActionCard'
import { AreaGraph } from '@/components/AreaGraph'
import { Card } from '@/components/Card'
import PrivateRoute from '@/components/PrivateRoute'
import Link from 'next/link'
import { FaSlidersH } from 'react-icons/fa'
import { FcOnlineSupport } from 'react-icons/fc'
import { MdBarChart } from 'react-icons/md'
import { MdOutlineThumbUp } from 'react-icons/md'
// import { usePageProviderContext } from '@/components/PageContext'
import { useEffect } from 'react'
import { usePageProviderContext } from '@/components/PageContext'

const DashboardPage = () => {
	const [pageTitle, setPageTitle] = usePageProviderContext()

	useEffect(() => {
		setPageTitle('Welcome back, Asiisii')
	}, [])

	return (
		<motion.div
			initial={{ y: '100%' }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className='flex flex-col items-center justify-center gap-5 w-[80%] h-[80vh] m-auto'
		>
			<div className='flex w-[100%] align-center justify-between'>
				<Card
					title='Open Orders'
					total='34'
					direction='down'
					rate='13.8'
					graphcolor='skyblue'
				/>
				<Card
					title='Total Hours Billed'
					total='2453'
					direction='up'
					rate='13.8'
					graphcolor='purple'
				/>
				<Card
					title='Monthly Spend'
					total='$390K'
					direction='down'
					rate='13.8'
					graphcolor='lightgreen'
				/>
			</div>
			<div className='flex w-[100%] flex-col grow bg-white rounded-lg p-3'>
				<div className='flex justify-between align-center px-7'>
					<h1 className='mb-4'>
						Bill Rate Trend - Medstar Georgetown University Medican Center
					</h1>
					<div className=''>
						<select
							className='outline-none border border-gray-300 rounded p-2'
							name=''
							id=''
						>
							<option>Last 6 months</option>
							<option>Last 3 months</option>
							<option>Last 9 months</option>
						</select>
					</div>
				</div>

				<AreaGraph />
			</div>
			<div className='flex w-[100%] gap-7'>
				<Link href='/calculate'>
					<ActionCard
						logo={FaSlidersH}
						title='Calculate'
						description='Optimize your rates to get the best clinicians'
					/>
				</Link>
				<Link href='/forecast'>
					<ActionCard
						logo={MdBarChart}
						title='Forecast'
						description='Discovery the latest trends and insights'
					/>
				</Link>
				<Link href='/ratings'>
					<ActionCard
						logo={MdOutlineThumbUp}
						title='Discover'
						description="What's clinicians are really saying about you"
					/>
				</Link>
				<Link href='/chat'>
					<ActionCard
						logo={FcOnlineSupport}
						title='Connect'
						description='Message your BillBot or Amanda, anytime'
					/>
				</Link>
			</div>
		</motion.div>
	)
}

export default PrivateRoute(DashboardPage)
