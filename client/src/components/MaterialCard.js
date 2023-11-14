import { useState } from 'react';
import './css/MaterialCard.css';
import './css/common.css';

function MaterialCard({ name, defaultValue, rarity, imageName }) {
	const [value, setValue] = useState(defaultValue);

	const handleChange = event => {
		let currentValue = event.currentTarget.value;
		if (currentValue === '') {
			setValue('');
		} else if (!(/^[-0-9]*$/.test(currentValue))) {
			let newValue = currentValue.slice(0, -1);
			setValue(newValue);
		} else {
			// Check if value is number or not
			if (/^[0-9]*$/.test(currentValue)) {
				setValue(+currentValue);
			} else {
				setValue(currentValue);
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
		<div className='card-wrapper'>
			<div className='card-body'>
				<div className='div-transition'>
					<div className='material-wrapper'>
						<div className={'rarity-' + rarity + ' material-image-wrapper'}>
							<div className='material-image'>
								<div className='contained-image' style={{ backgroundImage: `url(${require(`./assets/${imageName}`)})` }}>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='material-input-wrapper'>
					<div className='material-input'>
						<div className='input-shadow' id={'id_' + name} />
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