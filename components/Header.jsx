import { motion } from 'framer-motion'
import { logo } from '@/public/images'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaUserAstronaut } from 'react-icons/fa'
import { MdNotificationsNone } from 'react-icons/md'
import { usePageProviderContext } from './PageContext'

export const Header = () => {
	const [logoAnimation, setLogoAnimation] = useState(false)
  const [pgTitle] = usePageProviderContext()
	const router = useRouter()

	useEffect(() => {
		setLogoAnimation(true)
	}, [])

	const handleLogout = () => {
		router.push('/')
	}

	return (
		<header className='mb-16 mt-5 flex items-center justify-between px-10'>
			<div className={` ${logoAnimation ? 'animate-transition' : ''}`}>
				<Image className='w-[250px]' src={logo} alt='amn passport logo' />
			</div>
			<p className='text-[25px] m-auto font-semibold text-white'>
				{pgTitle}
			</p>
			<div className='flex items-center gap-5 text-3xl text-white'>
				<MdNotificationsNone />
				<FaUserAstronaut className='h-10 w-10' />
			</div>
		</header>
	)
}
