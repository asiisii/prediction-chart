import { useRouter } from 'next/router'
import SideNavBar from './SideNavbar'
import { Header } from './Header'

const Layout = ({ children }) => {
	const router = useRouter()

	const isLoginPage = router.pathname === '/'

	return (
		<div className='flex flex-col min-h-screen'>
			{!isLoginPage && (
				<>
					<Header />
					<div className='flex flex-grow'>
						<SideNavBar />
						<main className='flex-grow'>{children}</main>
					</div>
				</>
			)}
			{isLoginPage && <main className='flex-grow'>{children}</main>}
		</div>
	)
}

export default Layout
