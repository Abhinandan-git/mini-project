import React from "react";
import './css/Sort.css';

function SortButton({ _id, _class }) {
	return (
		<div className="sort-wrapper">
			<div className="sort-container">
				<div className={"selected" + _class} id={_id} />
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