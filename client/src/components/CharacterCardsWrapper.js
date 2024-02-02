import React, { useState, useEffect } from 'react';
import { Button } from './Buttons';
import CharacterCard from './CharacterCard';
import SortButton from './SortButton';
import Loading from './Loading';
import './css/CharacterCardsWrapper.css';

const sortStyle = ['', ' select-2']
const sortOption = ['rarity_key', 'name_key']

function CharacterCardsWrapper({ toggleFunction, sessionStorageData, updateSessionStorageData }) {
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
			const response = await fetch(`http://localhost:3001/api/characters`);
			const result = await response.json();
			sortData(result);
			document.getElementById('char-loading').classList.add('loading-hide');
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const setSort = () => {
		setSorting((sorting + 1) % 2);
	};

	return (
		<div className='character-block-wrapper character-block-invis' id='character-block-wrapper'>
			<div className='character-block-body'>
				<div className='save-button-wrapper'>
					<Button onClick={toggleFunction} id='char-save'>
						<div className='rect-button-label'>Close</div>
					</Button>
					<div onClick={setSort}>
						<SortButton _id='char-sort' _class={sortStyle[sorting]} />
					</div>
				</div>
				<div className='character-block-flex-body'>
					<div className='character-block-flex-scroll'>
						<div className='character-block-flex-wrapper'>
							<Loading id='char-loading' />
							{data.map(character => (
								<CharacterCard
									key={character.name_key}
									name={character.name}
									rarity={character.rarity}
									imageName={character.src}
									element={character.element}
									sessionStorageData={sessionStorageData}
									updateSessionStorageData={updateSessionStorageData}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CharacterCardsWrapper;