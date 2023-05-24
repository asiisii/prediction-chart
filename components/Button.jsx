const Button = ({ labelText, style, handleClick, disabled }) => {
	return (
		<button
			onClick={handleClick}
			disabled={disabled}
			style={style}
			className={`${disabled ? 'bg-slate-500' : 'bg-[#003C69]'} `}
		>
			{labelText}
		</button>
	)
}

export default Button
