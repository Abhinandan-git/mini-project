// import { useState } from 'react';
import './css/ItemCard.css';
import './css/common.css';

function ItemCard({ name, defaultValue, rarity, imageName }) {
	// const [value, setValue] = useState(defaultValue);
	return (
		<div className='item-card-wrapper'>
			<div className='item-card-body'>
				<div className='div-transition'>
					<div className='item-wrapper'>
						<div className={'rarity-' + rarity + ' item-image-wrapper'}>
							<div className='item-image'>
								<div className='contained-image' style={{ backgroundImage: `url(${require(`./assets/${imageName}`)})` }}></div>
								<div className='contained-image element-overlay' style={{ backgroundImage: `url(${require(`./assets/ascension_materials/common/elements/${element}.png`)})` }}></div>
							</div>
						</div>
						<div className='item-text-wrapper'>
							<div className='item-text'>{name}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;