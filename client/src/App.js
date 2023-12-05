import { useState } from 'react';
import MaterialCardsWrapper from './components/MaterialCardsWrapper';
import ItemCardsWrapper from './components/ItemCardsWrapper';
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
			<ItemCardsWrapper toggleFunction={toggleVisibility} />
			<MaterialCardsWrapper toggleFunction={toggleVisibility} />
		</>
	);
}

export default App;