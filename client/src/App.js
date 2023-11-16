import { useState } from 'react';
import MaterialCardsWrapper from './components/MaterialCardsWrapper';
import Buttons from './components/Buttons';

function App() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
		if (isVisible) {
			document.getElementById('root').classList.remove('noscroll');
		} else {
			document.getElementById('root').classList.add('noscroll');
		}
	};

	return (
		<>
			<Buttons toggleFunction={toggleVisibility} />
			<MaterialCardsWrapper toggleFunction={toggleVisibility} isVisible={isVisible} />
		</>
	);
}

export default App;