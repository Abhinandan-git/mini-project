import './css/WeaponCard.css';
import './css/common.css';

function WeaponCard({ name, rarity, imageName }) {
	return (
		<div className='weapon-card-wrapper'>
			<div className='weapon-card-body'>
				<div className='div-transition'>
					<div className='weapon-wrapper'>
						<div className={'rarity-' + rarity + ' weapon-image-wrapper'}>
							<div className='weapon-image'>
								<div className='contained-image' style={{ backgroundImage: `url(${require(`./assets/${imageName}`)})` }}></div>
							</div>
						</div>
						<div className='weapon-text-wrapper'>
							<div className='weapon-text'>{name}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeaponCard;