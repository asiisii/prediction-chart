import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import logo from '../public/images/logo.png'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

export default function LoginPage() {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [logoTransition, setLogoTransition] = useState(false)
	const [passwordVisible, setPasswordVisible] = useState(false)
	const router = useRouter()

	const handleSignIn = e => {
		e.preventDefault()

		if (email === 'asiisii@test.com' && password === '123456') {
			localStorage.setItem('email', email)
			localStorage.setItem('password', password)
			setLogoTransition(true)
			setTimeout(() => {
				router.push('/dashboard')
			}, 500)
		} else {
			// Todo: Display an error message in React-Toastify
			console.log('Invalid credentials')
		}
		
	}

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible)
	}

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div
				className={`text-4xl font-bold mb-8 ${
					logoTransition ? 'animate-transition' : ''
				}`}
			>
				<Image className='w-[400px]' src={logo} alt='amn passport logo' />
			</div>
			<h2 className='text-[28px] mb-5 text-white'>Sign in to your account.</h2>
			<input
				type='email'
				placeholder='Email'
				className='mb-5 p-2 w-80 rounded-t'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<div className='relative'>
				<input
					type={passwordVisible ? 'text' : 'password'}
					placeholder='Password'
					className='mb-5 p-2 pr-10 w-80 rounded-t'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<span
					className='absolute right-3 top-[35%] transform -translate-y-1/2 cursor-pointer'
					onClick={togglePasswordVisibility}
				>
					{passwordVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
				</span>
			</div>
			<button
				onClick={handleSignIn}
				className='bg-[#8472FC] hover:bg-blue-600 text-white font-bold py-2 px-4 w-80 mb-5 rounded'
			>
				Sign In
			</button>
			<div className='signup-wrapper flex justify-between gap-2 w-80 text-white'>
				<p>Forgot password</p>
				<p>Create New Account</p>
			</div>
		</div>
	)
}
