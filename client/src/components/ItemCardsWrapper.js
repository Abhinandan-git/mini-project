import React, { useState, useEffect } from 'react';
import { Compare } from './Functions';
import { Button } from './Buttons';
import ItemCard from './ItemCard';
// import Loading from './Loading';
import './css/ItemCardsWrapper.css';

function ItemCardsWrapper({ toggleFunction }) {
	// eslint-disable-next-line
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
		<div className='character-wrapper' id='character-wrapper'>
			<div className='character-body'>
				<div className='save-button-wrapper'>
					<Button onClick={toggleFunction} id='char-save'>
						<div className='rect-button-label'>Close</div>
					</Button>
				</div>
				<div className='flex-body'>
					<div className='flex-scroll'>
						<div className='flex-wrapper'>
							<ItemCard name="Amber" rarity={4} element="Pyro" imageName="characters/Amber.png" />
							{/* <Loading id='inv-loading' />
							{data.map((item, index) => (
								<ItemCard
									key={item.key}
									name={item.key}
									rarity={item.rarity}
									imageName={item.src}
									element={item.element}
								/>
							))} */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemCardsWrapper;