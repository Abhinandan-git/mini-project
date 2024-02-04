import React from 'react';
import './css/CharacterCard.css';
import './css/common.css';

function CharacterCard({ name, element, rarity, imageName, clickHandler }) {
	const onClickHandler = name => {
		clickHandler(name, rarity);
		document.getElementById(name).style.display = 'none';
	};

	return (
		<div className='character-card-wrapper' id={name} onClick={() => { onClickHandler(name) }}>
			<div className='character-card-body'>
				<div className='div-transition'>
					<div className='character-wrapper'>
						<div className={`rarity-${rarity} character-image-wrapper`}>
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