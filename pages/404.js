import Image from 'next/image'
import { useRouter } from 'next/router'
import { lost, pgNotFound,  scaredAlien } from '@/public/images'
import Button from '@/components/Button'

const PageNotFound = () => {
	const router = useRouter()

	const handleGoBack = () => router.back()
	

	return (
		<div className='flex flex-col items-center mt-20 h-screen'>
			<div className='flex items-start justify-start space-x-4 absolute top-0 left-60 mt-20 ml-45'>
				<Image src={lost} alt='lost svg icon' />
			</div>

			<h1 className='text-4xl font-bold mb-4'>
				<Image src={pgNotFound} alt='404 svg icon' />
			</h1>

			<p className='text-[25px] w-[700px] text-white mb-8 text-center'>
				Don't worry, we're not judging your navigation skills. Sometimes the
				internet likes to play hide-and-seek.
			</p>

			<button
				className='hover:text-[#003C69] hover:bg-white p-3 bg-[#003C69] rounded-lg w-40 text-white'
				onClick={handleGoBack}
				type='button'
			>
				Go Back
			</button>

			<div className='absolute bottom-10 right-40 mb-8 mr-8'>
				<Image src={scaredAlien} alt='scared alien svg icon' />
			</div>
		</div>
	)
}

export default PageNotFound
