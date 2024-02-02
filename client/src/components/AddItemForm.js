import React from "react";
import './css/AddItemForm.css';
import { Button } from "./Buttons";
import { LevSelectButton, TalSelectButton } from "./SelectButton";
	

function AddItemForm({ toggleFormVisibility, username, rarity, sessionStorageData, updateSessionStorageData }) {
	const onClickHandler = username => {
		console.log(username);
		let data = JSON.parse(sessionStorage.getItem('itemList')) || [];
		data.push(username);
		sessionStorage.setItem('itemList', JSON.stringify(data));
		updateSessionStorageData(data);
	}
	
	return (<div className="form-wrapper" id="form-wrapper">
		<div className="form-body">
			<div className="form-flex-body">
				<div className="form-flex-wrapper">
					<div className={`add-item-name rarity-${rarity}`}>{username}</div>
					<div className="form-flex-scroll">
						<div className="add-item-content">
							<div className="add-item-section">
								<div className="add-item-section-name">Lv.</div>
								<div className="add-item-inputs">
									<div>
										<h3 className="add-level-title">Current</h3>
										<LevSelectButton />
									</div>
									<div>
										<h3 className="add-level-title">Desired</h3>
										<LevSelectButton />
									</div>
								</div>
							</div>
							<div className="add-item-section">
								<div className="add-item-section-name">Normal Attack</div>
								<div className="add-item-inputs">
									<div>
										<h3 className="add-level-title">Current</h3>
										<TalSelectButton />
									</div>
									<div>
										<h3 className="add-level-title">Desired</h3>
										<TalSelectButton />
									</div>
								</div>
							</div>
							<div className="add-item-section">
								<div className="add-item-section-name">Elemental Skill</div>
								<div className="add-item-inputs">
									<div>
										<h3 className="add-level-title">Current</h3>
										<TalSelectButton />
									</div>
									<div>
										<h3 className="add-level-title">Desired</h3>
										<TalSelectButton />
									</div>
								</div>
							</div>
							<div className="add-item-section">
								<div className="add-item-section-name">Elemental Burst</div>
								<div className="add-item-inputs">
									<div>
										<h3 className="add-level-title">Current</h3>
										<TalSelectButton />
									</div>
									<div>
										<h3 className="add-level-title">Desired</h3>
										<TalSelectButton />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="save-button-wrapper">
				<Button onClick={() => { toggleFormVisibility(); onClickHandler(); }} id="inven-save">
					<div className="rect-button-label">Save</div>
				</Button>
			</div>
		</div>
	</div>)
};

export default AddItemForm;