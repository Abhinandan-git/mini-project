import './css/Loading.css';
import './css/common.css';

function Loading({ id }) {
	return (
		<svg id={id} className="loading" viewBox="0 0 100 100">
			<circle className="loading-circle" cx="50" cy="50" r="40" />
		</svg>
	);
}

export default Loading;