export const BillRateCard = ({
	icon: Icon,
	labelText,
	description,
	isActive,
	onClick,
}) => {
	return (
		<article
			className={`flex flex-col p-3 border-2 rounded-lg ${
				isActive ? 'border-blue-500 border-8' : 'border-lighgray'
			} text-center cursor-pointer hover:bg-white hover:text-[#767272]`}
			onClick={onClick}
		>
			<Icon className='h-[60px] w-[100%] mt-7 mb-7' />
			<h3 className='text-2xl font-medium text-lighgray-900 mb-3'>
				{labelText}
			</h3>
			<p className='text-slate-500 mb-5'>{description}</p>
		</article>
	)
}
