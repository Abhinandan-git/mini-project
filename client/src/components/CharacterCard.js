import React from 'react';
import './css/CharacterCard.css';
import './css/common.css';

function CharacterCard({ name, element, rarity, imageName, sessionStorageData, updateSessionStorageData }) {
	const onClickHandler = name => {
		let data = JSON.parse(sessionStorage.getItem('itemList')) || [];
		data.push(name);
		sessionStorage.setItem('itemList', JSON.stringify(data));
		updateSessionStorageData(data);
	};

	return (
		<div className='character-card-wrapper' onClick={() => { onClickHandler(name) }}>
			<div className='character-card-body'>
				<div className='div-transition'>
					<div className='character-wrapper'>
						<div className={'rarity-' + rarity + ' character-image-wrapper'}>
							<div className='character-image'>
								<div className='contained-image' style={{ backgroundImage: `url(${require(`./assets/${imageName}`)})` }}></div>
								<div className='element-overlay'>
									<div className='contained-image' style={{ backgroundImage: `url(${require(`./assets/ascension_materials/common/elements/${element}.png`)})` }}></div>
								</div>
							</div>
						</div>
						<div className='character-text-wrapper'>
							<div className='character-text'>{name}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;