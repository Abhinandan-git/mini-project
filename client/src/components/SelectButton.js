import React from "react";

function LevSelectButton() {
	return (<div className="level-select">
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
	</div>);
}

function TalSelectButton() {
	return (<div className="level-select">
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
</div>);
}

export { LevSelectButton, TalSelectButton };