import './css/common.css';
import './css/FarmItem.css';

import HerosWit from './assets/ascension_materials/common/HerosWit.png';

function FarmItem({ done, rarity }) {
	return (
		<div style={{ position: 'relative' }}>
			<div className={`material-display-material-wrapper ${done ? 'material-display-done-material' : ''}`}>
				<p className={done ? 'material-display-done-amount' : ''}>
					<span>88</span>
				</p>
				<div>
					<div style={{ transition: 'all 0.1s ease 0s' }}>
						<div className={`material-image-wrapper rarity-${rarity}`}>
							<div className='material-image'>
								<div
									className='contained-image'
									style={{ backgroundImage: `url(${HerosWit})` }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{done && <div className='material-display-done'>
				<div className='material-display-check' />
			</div>}
		</div>
	);
}

export default FarmItem;