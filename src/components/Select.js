export default function Select({ label, attr, options, value, setter }) {
	function renderOptions(options) {
		const optionsList = [];

		options.forEach((option) => {
			const selected = option.value === value;

			optionsList.push(
				<option value={ option.value } selected={ selected }>{ option.label }</option>
			)
		})

		return optionsList;
	}

	function onChange(event) {
		const attributes = {};

		attributes[attr] = event.target.value;
		setter(attributes);
	}

	return (
		<div style={{ margin: "10px 0" }}>
			<label htmlFor={ attr }>{ label }</label>
			<select name={ attr } id={ attr } onChange={ onChange }>
				{ renderOptions(options) }
			</select>
		</div>
	);
}
