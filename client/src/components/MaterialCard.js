import { useState } from 'react';
import './css/MaterialCard.css';
import './css/common.css';

function MaterialCard({ name, defaultValue, rarity, imageName }) {
	const [value, setValue] = useState(defaultValue);

	const handleChange = event => {
		let inputValue = event.currentTarget.value;
		if (inputValue === '') {
			setValue('');
		} else if (!(/^[-0-9]*$/.test(inputValue))) {
			// If input is character, Do nothing
		} else {
			// Check if value is number or not
			if (/^[0-9]*$/.test(inputValue)) {
				setValue(+inputValue);
			} else {
				setValue(inputValue);
			}
		}
		event.preventDefault();
	};

	const handleFocusIn = event => {
		event.currentTarget.select();
		let parentElement = document.getElementById('id_' + name);
		parentElement.classList.add('input-focus');
		event.preventDefault();
	};

	const handleFocusOut = event => {
		let parentElement = document.getElementById('id_' + name);
		parentElement.classList.remove('input-focus');
		if (event.currentTarget.value === '') { setValue(0); }
		event.preventDefault();
	};

	return (
		<div className='material-card-wrapper'>
			<div className='material-card-border'>
				<div className='div-transition'>
					<div className={'rarity-' + rarity + ' material-image-wrapper'}>
						<div className='material-image'>
							<div className='contained-image' style={{ backgroundImage: `url(${require(`./assets/${imageName}`)})` }} />
						</div>
					</div>
				</div>
				<div className='material-input-wrapper'>
					<div className='material-input'>
						<div className='material-input-shadow' id={'id_' + name} />
						<input
							name={name}
							value={value}
							id={'input_' + name}
							onBlur={handleFocusOut}
							onFocus={handleFocusIn}
							onChange={handleChange}
							className='material-input-box'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MaterialCard;