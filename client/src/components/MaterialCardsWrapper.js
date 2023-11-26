import React, { useState, useEffect } from 'react';
import MaterialCard from './MaterialCard';
import Loading from './Loading';
import { Button } from './Buttons';
import { Compare } from './Functions';
import './css/MaterialCardsWrapper.css';

function MaterialCardsWrapper({ isVisible, toggleFunction }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);
	
	const fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:3001/api/material`);
			const result = await response.json();
			result.sort(Compare);
			setData(result);
			document.getElementById('inv-loading').classList.add('loading-hide');
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	
	return (
		<div className='inventory-wrapper inventory-invis' id='inventory-wrapper'>
			<div className='inventory-body'>
				<div className='save-button-wrapper'>
					<Button onClick={toggleFunction} id='inven-save'>
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