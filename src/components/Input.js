export default function Input( {
	attr,
	label,
	type,
	value,
	className,
	setAttributes: setter,
} ) {
	function onChange( event ) {
		const attributes = {};

		attributes[ attr ] = event.target.value;
		setter( attributes );
	}

	return (
		<div style={ { margin: '10px 0' } }>
			<label htmlFor={ attr }>{ label }</label> <br />
			<input
				name={ attr }
				id={ attr }
				type={ type ?? 'text' }
				value={ value }
				onChange={ onChange }
				className={ className }
			/>
		</div>
	);
}
