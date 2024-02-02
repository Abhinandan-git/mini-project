import React from "react";
import './css/AddItemForm.css';
import { Button } from "./Buttons";

function AddItemForm() {
	return (<div className="form-wrapper" id="form-wrapper">
		<div className="form-body">
			<div className="form-flex-body">
				<div className="form-flex-wrapper">
					<div className="add-item-name rarity-4">Amber</div>
					<div className="form-flex-scroll">
						<div className="add-item-content">
							<div className="add-item-section">
								<div className="add-item-section-name">Lv.</div>
								<div className="add-item-inputs">
									<div>
										<h3 className="add-level-title">Current</h3>
										<div className="level-select">
											<div className="level-select-wrapper">
												<button className="level-decrease level-disable">
													<div className="level-decrease level-decrease-glow" />
													<div className="level-decrease level-decrease-inner-border" />
													<div className="level-decrease level-decrease-inner" />
													<div className="level-decrease level-decrease-image" />
												</button>
												<button className="level-select-level">
													<div className="level-select-inner" />
													<div className="level-select-border" />
													<div className="level-select-label">1</div>
													<div className="level-select-arrow-wrapper">
														<div className="level-select-arrow" />
													</div>
												</button>
												<button className="level-increase level-button">
													<div className="level-increase level-increase-glow" />
													<div className="level-increase level-increase-inner-border" />
													<div className="level-increase level-increase-inner" />
													<div className="level-increase level-increase-image" />
												</button>
											</div>
										</div>
									</div>
									<div>
										<h3 className="add-level-title">Desired</h3>
										<div className="level-select">
											<div className="level-select-wrapper">
												<button className="level-decrease level-button">
													<div className="level-decrease level-decrease-glow" />
													<div className="level-decrease level-decrease-inner-border" />
													<div className="level-decrease level-decrease-inner" />
													<div className="level-decrease level-decrease-image" />
												</button>
												<button className="level-select-level">
													<div className="level-select-inner" />
													<div className="level-select-border" />
													<div className="level-select-label">90</div>
													<div className="level-select-arrow-wrapper">
														<div className="level-select-arrow" />
													</div>
												</button>
												<button className="level-increase level-button">
													<div className="level-increase level-increase-glow" />
													<div className="level-increase level-increase-inner-border" />
													<div className="level-increase level-increase-inner" />
													<div className="level-increase level-increase-image" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="add-item-section">
								<div className="add-item-section-name">Normal Attack</div>
								<div className="add-item-inputs">
									<div>
										<h3 className="add-level-title">Current</h3>
										<div className="level-select">
											<div className="level-select-wrapper">
												<button className="level-decrease level-disable">
													<div className="level-decrease level-decrease-glow" />
													<div className="level-decrease level-decrease-inner-border" />
													<div className="level-decrease level-decrease-inner" />
													<div className="level-decrease level-decrease-image" />
												</button>
												<div className="level-input-level">
													<div className="level-input-glow" />
													<div className="level-input-inner-border" />
													<input
														className="level-input-value"
														type="number"
														maxLength={2}
														defaultValue={1}
														style={{ fontSize: 20, color: "black" }}
													/>
												</div>
												<button className="level-increase level-button">
													<div className="level-increase level-increase-glow" />
													<div className="level-increase level-increase-inner-border" />
													<div className="level-increase level-increase-inner" />
													<div className="level-increase level-increase-image" />
												</button>
											</div>
										</div>
									</div>
									<div>
										<h3 className="add-level-title">Desired</h3>
										<div className="level-select">
											<div className="level-select-wrapper">
												<button className="level-decrease level-button">
													<div className="level-decrease level-decrease-glow" />
													<div className="level-decrease level-decrease-inner-border" />
													<div className="level-decrease level-decrease-inner" />
													<div className="level-decrease level-decrease-image" />
												</button>
												<div className="level-input-level">
													<div className="level-input-glow" />
													<div className="level-input-inner-border" />
													<input
														className="level-input-value"
														type="number"
														maxLength={2}
														defaultValue={10}
														style={{ fontSize: 20, color: "black" }}
													/>
												</div>
												<button className="level-increase level-disable">
													<div className="level-increase level-increase-glow" />
													<div className="level-increase level-increase-inner-border" />
													<div className="level-increase level-increase-inner" />
													<div className="level-increase level-increase-image" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="add-item-section">
								<div className="add-item-section-name">Elemental Skill</div>
								<div className="add-item-inputs">
									<div>
										<h3 className="add-level-title">Current</h3>
										<div className="level-select">
											<div className="level-select-wrapper">
												<button className="level-decrease level-disable">
													<div className="level-decrease level-decrease-glow" />
													<div className="level-decrease level-decrease-inner-border" />
													<div className="level-decrease level-decrease-inner" />
													<div className="level-decrease level-decrease-image" />
												</button>
												<div className="level-input-level">
													<div className="level-input-glow" />
													<div className="level-input-inner-border" />
													<input
														className="level-input-value"
														type="number"
														maxLength={2}
														defaultValue={1}
														style={{ fontSize: 20, color: "black" }}
													/>
												</div>
												<button className="level-increase level-button">
													<div className="level-increase level-increase-glow" />
													<div className="level-increase level-increase-inner-border" />
													<div className="level-increase level-increase-inner" />
													<div className="level-increase level-increase-image" />
												</button>
											</div>
										</div>
									</div>
									<div>
										<h3 className="add-level-title">Desired</h3>
										<div className="level-select">
											<div className="level-select-wrapper">
												<button className="level-decrease level-button">
													<div className="level-decrease level-decrease-glow" />
													<div className="level-decrease level-decrease-inner-border" />
													<div className="level-decrease level-decrease-inner" />
													<div className="level-decrease level-decrease-image" />
												</button>
												<div className="level-input-level">
													<div className="level-input-glow" />
													<div className="level-input-inner-border" />
													<input
														className="level-input-value"
														type="number"
														maxLength={2}
														defaultValue={10}
														style={{ fontSize: 20, color: "black" }}
													/>
												</div>
												<button className="level-increase level-disable">
													<div className="level-increase level-increase-glow" />
													<div className="level-increase level-increase-inner-border" />
													<div className="level-increase level-increase-inner" />
													<div className="level-increase level-increase-image" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="add-item-section">
								<div className="add-item-section-name">Elemental Burst</div>
								<div className="add-item-inputs">
									<div>
										<h3 className="add-level-title">Current</h3>
										<div className="level-select">
											<div className="level-select-wrapper">
												<button className="level-decrease level-disable">
													<div className="level-decrease level-decrease-glow" />
													<div className="level-decrease level-decrease-inner-border" />
													<div className="level-decrease level-decrease-inner" />
													<div className="level-decrease level-decrease-image" />
												</button>
												<div className="level-input-level">
													<div className="level-input-glow" />
													<div className="level-input-inner-border" />
													<input
														className="level-input-value"
														type="number"
														maxLength={2}
														defaultValue={1}
														style={{ fontSize: 20, color: "black" }}
													/>
												</div>
												<button className="level-increase level-button">
													<div className="level-increase level-increase-glow" />
													<div className="level-increase level-increase-inner-border" />
													<div className="level-increase level-increase-inner" />
													<div className="level-increase level-increase-image" />
												</button>
											</div>
										</div>
									</div>
									<div>
										<h3 className="add-level-title">Desired</h3>
										<div className="level-select">
											<div className="level-select-wrapper">
												<button className="level-decrease level-button">
													<div className="level-decrease level-decrease-glow" />
													<div className="level-decrease level-decrease-inner-border" />
													<div className="level-decrease level-decrease-inner" />
													<div className="level-decrease level-decrease-image" />
												</button>
												<div className="level-input-level">
													<div className="level-input-glow" />
													<div className="level-input-inner-border" />
													<input
														className="level-input-value"
														type="number"
														maxLength={2}
														defaultValue={10}
														style={{ fontSize: 20, color: "black" }}
													/>
												</div>
												<button className="level-increase level-disable">
													<div className="level-increase level-increase-glow" />
													<div className="level-increase level-increase-inner-border" />
													<div className="level-increase level-increase-inner" />
													<div className="level-increase level-increase-image" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="save-button-wrapper">
				<Button onclick="{handleSubmit}" id="inven-save">
					<div className="rect-button-label">Save</div>
				</Button>
			</div>
		</div>
	</div>)
};

export default AddItemForm;