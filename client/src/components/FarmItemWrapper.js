import React from 'react';
import './css/FarmItemWrapper.css';
import trashImage from './assets/misc/trash.png';
import ascendImage from './assets/misc/ascend.png';

import Amber from './assets/characters/Amber.png';

function FarmItemWrapper() {
	return (
		<div className='farm-item-list'>
			<div className='item-panel-wrapper'>
				<div className='item-panel-item'>
					<div className='item-panel-name rarity-4'>
						<div className='item-panel-item-name'>Amber</div>
					</div>
					<div title='Ascend' className='item-panel-button-wrapper item-panel-button-ascend'>
						<button className='circle-button'>
							<div className='circle-button-glow' />
							<div className='circle-button-inner-border' />
							<div className='circle-button-inner' />
							<div className='circle-button-image'>
								<div className='contained-image' style={{ backgroundImage: `url(${ascendImage})` }} />
							</div>
						</button>
					</div>
					<div title='Trash' className='item-panel-button-wrapper item-panel-button-trash'>
						<button className='circle-button'>
							<div className='circle-button-glow' />
							<div className='circle-button-inner-border' />
							<div className='circle-button-inner' />
							<div className='circle-button-image'>
								<div className='contained-image' style={{ backgroundImage: `url(${trashImage})` }} />
							</div>
						</button>
					</div>
					<div className='item-panel-item-content'>
						<div className='item-panel-general-select'>
							<div className='item-panel-item-image-wrapper'>
								<div className='item-panel-item-image rarity-4'>
									<div className='contained-image' style={{ backgroundImage: `url(${Amber})` }} />
								</div>
							</div>
							<div className='item-panel-item-summary-wrapper'>
								<div className='item-panel-item-summary-level'>
									<h4 className='item-panel-item-summary-title'>Level</h4>
									<div className='item-panel-item-summary-pair'>
										{/* something */}
										<div className='item-panel-item-summary-label'>9</div>
										<div className='item-panel-arrow' />
										<div className='item-panel-item-summary-label'>80<div className='item-panel-star' /></div>
									</div>
								</div>
								<div className='item-panel-item-summary-talent'>
									<h4 className='item-panel-item-summary-title'>Talent</h4>
									<div className='item-panel-item-summary-pair'>
										<div>
											{/* something */}
											<div style={{ display: 'flex' }}>
												<div className='item-panel-item-summary-label'>9</div>
												<div className='item-panel-arrow' />
												<div className='item-panel-item-summary-label'>10</div>
											</div>
											<div style={{ display: 'flex' }}>
												<div className='item-panel-item-summary-label'>9</div>
												<div className='item-panel-arrow' />
												<div className='item-panel-item-summary-label'>10</div>
											</div>
											<div style={{ display: 'flex' }}>
												<div className='item-panel-item-summary-label'>9</div>
												<div className='item-panel-arrow' />
												<div className='item-panel-item-summary-label'>10</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='item-panel-material-list' id='item-panel-material-list'></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FarmItemWrapper;