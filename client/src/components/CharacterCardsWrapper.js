import React, { useState, useEffect } from 'react';
import { Compare } from './Functions';
import { Button } from './Buttons';
import CharacterCard from './CharacterCard';
// import Loading from './Loading';
import './css/CharacterCardsWrapper.css';

function CharacterCardsWrapper({ toggleFunction }) {
	// eslint-disable-next-line
	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);
	
	const fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:3001/api/character`);
			const result = await response.json();
			result.sort(Compare);
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
							<CharacterCard name="Amber" rarity={4} element="Pyro" imageName="characters/Amber.png" />
							<CharacterCard name="Kamisato Ayato" rarity={5} element="Hydro" imageName="characters/KamisatoAyato.png" />
							{/* <Loading id='char-loading' />
							{data.map((Character, index) => (
								<CharacterCard
									key={Character.key}
									name={Character.key}
									rarity={Character.rarity}
									imageName={Character.src}
									element={Character.element}
								/>
							))} */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CharacterCardsWrapper;