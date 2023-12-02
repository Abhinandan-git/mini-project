import { useState } from 'react';
import MaterialCardsWrapper from './components/MaterialCardsWrapper';
import ItemCard from './components/ItemCard';
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
			<ItemCard name="Kamisato Ayato" element="Hydro" rarity={5} imageName="characters/KamisatoAyato.png"></ItemCard>
			<ItemCard name="Amber" element="Pyro" rarity={4} imageName="characters/Amber.png"></ItemCard>
			<MaterialCardsWrapper toggleFunction={toggleVisibility} isVisible={isVisible} />
		</>
	);
}

export default App;