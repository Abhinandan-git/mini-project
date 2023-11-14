import React, { useState, useEffect } from 'react';
import MaterialCard from './MaterialCard';
import { inventorySave } from './Functions';
import { Button } from './Buttons';
import './css/MaterialCardsWrapper.css';

function MaterialCardsWrapper() {
	const [data, setData] = useState([]);
  
	useEffect(() => {
	  	fetchData();
	}, []);
  
	const fetchData = async () => {
		try {
			const response = await fetch('http://localhost:3001/api/characters');
			const result = await response.json();
			setData(result);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<div className='inventory-wrapper' id='inventory-wrapper'>
			<div className='inventory-body'>
				<div className='save-button-wrapper'>
					<Button onClick={inventorySave} id='inven-save'>
						<div className='rect-button-label'>Save & Close</div>
					</Button>
				</div>
				<div className='flex-body'>
					<div className='flex-scroll'>
						<div className='flex-wrapper'>
							{data.map((item, index) => (
								<MaterialCard
									key={index}
									defaultValue={0}
									rarity={5}
									name={item.name}
									imageName={`characters/${item.name.replace(' ', '')}.png`}
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