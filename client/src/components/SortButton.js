import React from "react";
import './css/Sort.css';

function SortButton() {
	return (
		<div className="sort-wrapper">
			<div className="sort-container">
				<div className="selected" id={1} />
				<button className="option">
					<div className="star" />
				</button>
				<button className="option">
					<p>Abc</p>
				</button>
			</div>
		</div>
	);
}

export default SortButton;