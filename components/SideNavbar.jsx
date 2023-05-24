import { motion } from 'framer-motion'
import { useState } from 'react'
import { BsBriefcaseFill, BsChatLeftDots } from 'react-icons/bs'
import { FaSlidersH, FaHome } from 'react-icons/fa'
import { MdBarChart, MdOutlineThumbUp } from 'react-icons/md'
import { RxGear } from 'react-icons/rx'
import { NavLink } from './NavLink'

const SideNavBar = () => {
	const [activePage, setActivePage] = useState('')

	const handlePageClick = pageName => {
		setActivePage(pageName)
	}

	const navLinks = [
		{
			hrefLink: '/dashboard',
			page: 'home',
			icon: FaHome,
			tooltip: 'Home',
		},
		{
			hrefLink: '#',
			page: 'forecast',
			icon: MdBarChart,
			tooltip: 'Forecast',
		},
		{
			hrefLink: '/calculate',
			page: 'calculate',
			icon: FaSlidersH,
			tooltip: 'Calculate',
		},
		{
			hrefLink: '#',
			page: 'jobposting',
			icon: BsBriefcaseFill,
			tooltip: 'Job Posting',
		},
		{
			hrefLink: '#',
			page: 'ratings',
			icon: MdOutlineThumbUp,
			tooltip: 'Ratings',
		},
		{
			hrefLink: '#',
			page: 'chat',
			icon: BsChatLeftDots,
			tooltip: 'Chat',
		},
		{
			hrefLink: '#',
			page: 'settings',
			icon: RxGear,
			tooltip: 'Settings',
		},
	]

	return (
		<div className='flex flex-col w-16 h-screen'>
			{navLinks.map((navLink, index) => (
				<motion.div
					key={navLink.page}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
					exit={{ opacity: 0, y: -20 }}
				>
					<NavLink
						hrefLink={navLink.hrefLink}
						page={navLink.page}
						activePage={activePage}
						icon={navLink.icon}
						handlePageClick={handlePageClick}
					>
            {navLink.tooltip}
          </NavLink>
				</motion.div>
			))}
		</div>
	)
}

export default SideNavBar
