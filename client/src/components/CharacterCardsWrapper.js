import React, { useState, useEffect } from 'react';
import { CharacterCompare } from './Functions';
import { Button } from './Buttons';
import CharacterCard from './CharacterCard';
import Loading from './Loading';
import './css/CharacterCardsWrapper.css';

function CharacterCardsWrapper({ toggleFunction }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);
	
	const fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:3001/api/characters`);
			const result = await response.json();
			result.sort(CharacterCompare);
			setData(result);
			document.getElementById('char-loading').classList.add('loading-hide');
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	
	return (
		<div className='character-block-wrapper character-block-invis' id='character-block-wrapper'>
			<div className='character-block-body'>
				<div className='save-button-wrapper'>
					<Button onClick={toggleFunction} id='char-save'>
						<div className='rect-button-label'>Close</div>
					</Button>
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