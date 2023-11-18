import './css/Loading.css';
import './css/common.css';

function Loading({ id }) {
	return (
		<svg id={id} class="loading" viewBox="0 0 100 100">
			<circle class="circle" cx="50" cy="50" r="40" />
		</svg>
	);
}

export default Loading;