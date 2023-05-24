export const Dropdown = ({
	style,
	selectedValue,
	onChange,
	elementId,
	options,
	placeholder,
}) => {
	return (
		<select
			id={elementId}
			value={selectedValue}
			onChange={onChange}
			style={style}
			className='border-b border-gray-400 bg-transparent focus:outline-none'
		>
			{placeholder && (
				<option value='' disabled>
					{placeholder}
				</option>
			)}
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
}
