import React, { useState, useEffect } from 'react';
import './css/common.css';
import './css/FarmItemWrapper.css';
import FarmItem from './FarmItem';
import trashImage from './assets/misc/trash.png';
import ascendImage from './assets/misc/ascend.png';

function FarmItemWrapper({ sessionStorageData }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			const response = await fetch(`http://localhost:3001/api/characters`);
			const result = await response.json();
			setData(result);
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const getDetailByKey = (key, name) => {
		const foundObject = data.find(obj => obj.name === name);
		return foundObject ? foundObject[key] : "Details not found";
	};

	if (loading) return;

	return (
		<div className='farm-item-list'>
			{sessionStorageData.map(itemName => (<div className='item-panel-wrapper' key={getDetailByKey('name_key', itemName)}>
				<div className='item-panel-before'>
					<div className='item-panel-item'>
						<div className={`item-panel-name rarity-${getDetailByKey('rarity', itemName)}`}>
							<div className='item-panel-item-name'>{itemName}</div>
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
									<div className={`item-panel-item-image rarity-${getDetailByKey('rarity', itemName)}`}>
										<div className='contained-image' style={{ backgroundImage: `url(${require(`./assets/${getDetailByKey('src', itemName)}`)})` }} />
									</div>
								</div>
								<div className='item-panel-item-summary-wrapper'>
									<div className='item-panel-item-summary-level'>
										<h4 className='item-panel-item-summary-title'>Level</h4>
										<div className='item-panel-item-summary-pair'>
											{/* Fill from form */}
											<div className='item-panel-item-summary-label'>9</div>
											<div className='item-panel-arrow' />
											<div className='item-panel-item-summary-label'>80<div className='item-panel-star' /></div>
										</div>
									</div>
									<div className='item-panel-item-summary-talent'>
										<h4 className='item-panel-item-summary-title'>Talent</h4>
										<div className='item-panel-item-summary-pair'>
											<div>
												{/* Fill from form */}
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
							<div className='item-panel-material-list' id='item-panel-material-list'>
								<FarmItem done={false} rarity={1} />
							</div>
						</div>
					</div>
				</div>
			</div>))}
		</div>
	);
}

export default FarmItemWrapper;