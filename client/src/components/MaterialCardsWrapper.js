import React, { useState, useEffect } from 'react';
import MaterialCard from './MaterialCard';
import Loading from './Loading';
import { Button } from './Buttons';
import './css/MaterialCardsWrapper.css';

function MaterialCardsWrapper({ toggleFunction }) {
	const [data, setData] = useState([]);
	const [canSubmit, setCanSubmit] = useState(false);
	const [values, setValues] = useState(Array(332).fill(0));

	useEffect(() => {
		fetchData();
		fetchValues();
	}, []);
	
	const fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:3001/api/material`);
			const result = await response.json();
			result.sort((a, b) => a.key - b.key);
			setData(result);
			setCanSubmit(true);
			document.getElementById('inv-loading').classList.add('loading-hide');
			if (sessionStorage.getItem('inputData') === null) {
				sessionStorage.setItem('inputData', JSON.stringify({}));
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const fetchValues = async () => {
		try {
			const response = await fetch(`http://localhost:3001/api/material-input`);
			const result = await response.json();
			setValues(result);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const submitData = async materialData => {
		try {
			const response = await fetch(`http://localhost:3002/api/material-input`, {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(materialData)
			});
			if (response.ok) {
				console.log('Data sent successfully');
			} else {
				console.log('Failed to send data');
			}
		} catch (error) {
			console.error('Error sending data:', error);
		};
	};

	const getFromCache = materialData => {
		let cacheData = JSON.parse(sessionStorage.getItem('inputData'));
		let changedData = {};
		for (const key in materialData) {
			if (cacheData.hasOwnProperty(key)) {
				if (materialData[key] !== cacheData[key]) {
					changedData[key] = materialData[key];
					if (materialData[key] === 0) {
						delete cacheData[key];
					} else {
						cacheData[key] = materialData[key];
					}
				}
			} else {
				if (materialData[key] !== 0) {
					changedData[key] = materialData[key];
					cacheData[key] = materialData[key];
				}
			}
		}
		sessionStorage.setItem('inputData', JSON.stringify(cacheData));
		return changedData;
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
			const changedData = getFromCache(temporaryObject);
			if (Object.keys(changedData).length !== 0) submitData(changedData);
		}
	};
	
	return (
		<div className='inventory-block-wrapper inventory-block-invis' id='inventory-block-wrapper'>
			<div className='inventory-block-body'>
				<div className='save-button-wrapper'>
					<Button onClick={handleSubmit} id='inven-save'>
						<div className='rect-button-label'>Save & Close</div>
					</Button>
				</div>
				<div className='inventory-block-flex-body'>
					<div className='inventory-block-flex-scroll'>
						<div className='inventory-block-flex-wrapper'>
							<Loading id='inv-loading' />
							{data.map((item, index) => (
								<MaterialCard
									key={item.key}
									name={item.key}
									defaultValue={values[index]}
									rarity={item.rarity}
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