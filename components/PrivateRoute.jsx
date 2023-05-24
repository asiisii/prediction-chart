import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const PrivateRoute = WrappedComponent => {
	const hocComponent = props => {
		const [isAuthenticated, setIsAuthenticated] = useState(false)
		const router = useRouter()

		useEffect(() => {
			checkAuthentication()
		}, [])

		const checkAuthentication = () => {
			const email = 'a@test.com'
			const password = '123456'

			const storedEmail = localStorage.getItem('email')
			const storedPassword = localStorage.getItem('password')

			if (email === storedEmail && password === storedPassword) {
				setIsAuthenticated(true)
			} else {
				if (typeof window !== 'undefined') {
					router.replace('/')
				}
			}
		}

		if (typeof window === 'undefined' || !isAuthenticated) {
			return null
		}

		return <WrappedComponent {...props} />
	}

	return hocComponent
}

export default PrivateRoute
