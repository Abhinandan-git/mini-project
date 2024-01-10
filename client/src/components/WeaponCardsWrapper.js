import React, { useState, useEffect } from 'react';
import { WeaponCompare } from './Functions';
import { Button } from './Buttons';
import WeaponCard from './WeaponCard';
import SortButton from './SortButton';
import Loading from './Loading';
import './css/WeaponCardsWrapper.css';

function WeaponCardsWrapper({ toggleFunction }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);
	
	const fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:3001/api/weapons`);
			const result = await response.json();
			result.sort(WeaponCompare);
			setData(result);
			document.getElementById('wpn-loading').classList.add('loading-hide');
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	
	return (
		<div className='weapon-block-wrapper weapon-block-invis' id='weapon-block-wrapper'>
			<div className='weapon-block-body'>
				<div className='save-button-wrapper'>
					<Button onClick={toggleFunction} id='wpn-save'>
						<div className='rect-button-label'>Close</div>
					</Button>
					<SortButton />
				</div>
				<div className='weapon-block-flex-body'>
					<div className='weapon-block-flex-scroll'>
						<div className='weapon-block-flex-wrapper'>
							<Loading id='wpn-loading' />
							{data.map(weapon => (
								<WeaponCard
									key={weapon.name_key}
									name={weapon.name}
									rarity={weapon.rarity}
									imageName={weapon.src}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WeaponCardsWrapper;