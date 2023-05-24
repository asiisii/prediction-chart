import Link from 'next/link'

export const NavLink = ({
	hrefLink,
	page,
	activePage,
	icon: Icon,
	handlePageClick,
	children,
}) => {
	return (
		<Link href={hrefLink}>
			<p
				className={`text-white flex justify-center items-center h-16 text-xl transition-colors active:bg-gray-300 ${
					activePage === page ? 'active' : ''
				}`}
				onClick={() => handlePageClick(page)}
				title={children}
			>
				<Icon />
			</p>
		</Link>
	)
}
