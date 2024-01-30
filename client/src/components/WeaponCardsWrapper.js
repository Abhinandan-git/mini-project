import React, { useState, useEffect } from 'react';
import { Button } from './Buttons';
import WeaponCard from './WeaponCard';
import SortButton from './SortButton';
import Loading from './Loading';
import './css/WeaponCardsWrapper.css';

const sortStyle = ['', ' select-2']
const sortOption = ['rarity_key', 'name_key']

function WeaponCardsWrapper({ toggleFunction }) {
	const [data, setData] = useState([]);
	const [sorting, setSorting] = useState(0);

	useEffect(() => {
		fetchData();
	// eslint-disable-next-line
	}, []);

	useEffect(() => {
		sortData([...data]);
	// eslint-disable-next-line
	}, [sorting]);

	const sortData = async result => {
		result.sort((a, b) => a[sortOption[sorting]] - b[sortOption[sorting]]);
		setData(result);
	};
	
	const fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:3001/api/weapons`);
			const result = await response.json();
			sortData(result);
			document.getElementById('wpn-loading').classList.add('loading-hide');
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const setSort = () => {
		setSorting((sorting + 1) % 2);
	};
	
	return (
		<div className='weapon-block-wrapper weapon-block-invis' id='weapon-block-wrapper'>
			<div className='weapon-block-body'>
				<div className='save-button-wrapper'>
					<Button onClick={toggleFunction} id='wpn-save'>
						<div className='rect-button-label'>Close</div>
					</Button>
					<div onClick={setSort}>
						<SortButton _id='wpn-sort' _class={sortStyle[sorting]} />
					</div>
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