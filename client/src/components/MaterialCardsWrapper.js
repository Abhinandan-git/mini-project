import React, { useState, useEffect } from 'react';
import MaterialCard from './MaterialCard';
import Loading from './Loading';
import { Button } from './Buttons';
import './css/MaterialCardsWrapper.css';

function MaterialCardsWrapper({ isVisible, toggleFunction }) {
	const [data, setData] = useState([]);
	const [canSubmit, setCanSubmit] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);
	
	const fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:3001/api/material`);
			const result = await response.json();
			setData(result);
			setCanSubmit(true);
			document.getElementById('inv-loading').classList.add('loading-hide');
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const submitData = async materialData => {
		try {
			const response = await fetch(`http://localhost:3002/api/material-input`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(materialData)
			});
			if (response.ok) {
				console.log('Data sent successfully');
			} else {
				console.log('Failed to send data');
			}
			console.log(materialData);
		} catch (error) {
			console.error('Error sending data:', error);
		};
	};

	const handleSubmit = () => {
		toggleFunction();
		if (canSubmit) {
			let temporaryObject = {};
			for (let index = 1001; index <= 1332; index++) {
				const inputID = `input_${index}`;
				const inputField = document.getElementById(inputID);
				if (inputField) {
					temporaryObject[inputID] = +inputField.value;
				}
			}
			submitData(temporaryObject);
		}
	};
	
	return (
		<div className='inventory-wrapper inventory-invis' id='inventory-wrapper'>
			<div className='inventory-body'>
				<div className='save-button-wrapper'>
					<Button onClick={handleSubmit} id='inven-save'>
						<div className='rect-button-label'>Save & Close</div>
					</Button>
				</div>
				<div className='flex-body'>
					<div className='flex-scroll'>
						<div className='flex-wrapper'>
							<Loading id='inv-loading' />
							{data.map((item, index) => (
								<MaterialCard
									key={item.key}
									defaultValue={0}
									rarity={item.rarity}
									name={item.key}
									imageName={item.src}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MaterialCardsWrapper;