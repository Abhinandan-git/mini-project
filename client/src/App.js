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
			document.getElementById('inventory-wrapper').classList.remove('inventory-invis');
		} else {
			document.getElementById('root').classList.remove('noscroll');
			document.getElementById('inventory-wrapper').classList.add('inventory-invis');
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