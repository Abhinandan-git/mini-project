import { useState } from 'react';
import CharacterCardsWrapper from './components/CharacterCardsWrapper';
import MaterialCardsWrapper from './components/MaterialCardsWrapper';
import Buttons from './components/Buttons';

function App() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
		if (!isVisible) {
			document.getElementById('root').classList.add('noscroll');
			document.getElementById('inventory-block-wrapper').classList.remove('inventory-block-invis');
		} else {
			document.getElementById('root').classList.remove('noscroll');
			document.getElementById('inventory-block-wrapper').classList.add('inventory-block-invis');
		}
	};

	return (
		<>
			<Buttons toggleFunction={toggleVisibility} />
			<CharacterCardsWrapper toggleFunction={toggleVisibility} />
			<MaterialCardsWrapper toggleFunction={toggleVisibility} />
		</>
	);
}

export default App;