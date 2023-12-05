// import { useState } from 'react';
import './css/ItemCard.css';
import './css/common.css';

function ItemCard({ name, defaultValue, rarity, imageName }) {
	// const [value, setValue] = useState(defaultValue);

	return (
		<div className='card-wrapper'>
			<div className='card-body'>
				<div className='div-transition'>
					<div className='material-wrapper'>
						<div className={'rarity-' + rarity + ' material-image-wrapper'}>
							<div className='material-image'>
								<div className='contained-image' style={{ backgroundImage: `url(${require(`./assets/${imageName}`)})` }}></div>
								<div className='contained-image element-overlay' style={{ backgroundImage: `url(${require(`./assets/ascension_materials/common/elements/${imageName}`)})` }}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;