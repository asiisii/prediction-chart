import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

export const BillRateLayout = ({
	cardTitle,
	content,
	btn1labelText,
	btn1Style,
	btn2labelText,
	btn2Style,
  handleClick
}) => {
	return (
		<section className='flex flex-col w-[50%] justify-center mx-auto  bg-white rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
			<article className='flex justify-betweenpx-4 p-3 mb-3 w-full h-12 align-center'>
				<p className='text-3xl text-slate-700 grow'>{cardTitle}</p>
				<AiOutlineClose className='h-6 w-4' />
			</article>
			<hr />
			<section className='flex gap-4 justify-between p-8'>{content()}</section>
			<hr />
			<section className='flex gap-4 justify-end mx-5 my-2 pr-2'>
				<Button labelText={btn1labelText} style={btn1Style} />
				<Button labelText={btn2labelText} style={btn2Style} handleClick={handleClick}/>
			</section>
		</section>
	)
}
