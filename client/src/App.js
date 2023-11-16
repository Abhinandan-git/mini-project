import { useState } from 'react';
import MaterialCardsWrapper from './components/MaterialCardsWrapper';
import Buttons from './components/Buttons';

function App() {
	const [isVisible, setIsVisible] = useState(true);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<>
			<Buttons toggleFunction={toggleVisibility} />
			<MaterialCardsWrapper toggleFunction={toggleVisibility} isVisible={isVisible} />
		</>
	);
}

export default App;