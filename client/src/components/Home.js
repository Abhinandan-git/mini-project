import { useState } from 'react';
import CharacterCardsWrapper from './CharacterCardsWrapper';
import MaterialCardsWrapper from './MaterialCardsWrapper';
import WeaponCardsWrapper from './WeaponCardsWrapper';
import FarmItemWrapper from './FarmItemWrapper';
import AddItemForm from './AddItemForm';
import Buttons from './Buttons';

function Home() {
	const [isInventoryVisible, setIsInventoryVisible] = useState(false);
	const [isCharacterVisible, setIsCharacterVisible] = useState(false);
	const [isWeaponVisible, setIsWeaponVisible] = useState(false);

	const toggleInventoryVisibility = () => {
		setIsInventoryVisible(!isInventoryVisible);
		if (!isInventoryVisible) {
			document.getElementById('root').classList.add('noscroll');
			document.getElementById('inventory-block-wrapper').classList.remove('inventory-block-invis');
		} else {
			document.getElementById('root').classList.remove('noscroll');
			document.getElementById('inventory-block-wrapper').classList.add('inventory-block-invis');
		}
	};

	const toggleCharacterVisibility = () => {
		setIsCharacterVisible(!isCharacterVisible);
		if (!isCharacterVisible) {
			document.getElementById('root').classList.add('noscroll');
			document.getElementById('character-block-wrapper').classList.remove('character-block-invis');
		} else {
			document.getElementById('root').classList.remove('noscroll');
			document.getElementById('character-block-wrapper').classList.add('character-block-invis');
		}
	};

	const toggleWeaponVisibility = () => {
		setIsWeaponVisible(!isWeaponVisible);
		if (!isWeaponVisible) {
			document.getElementById('root').classList.add('noscroll');
			document.getElementById('weapon-block-wrapper').classList.remove('weapon-block-invis');
		} else {
			document.getElementById('root').classList.remove('noscroll');
			document.getElementById('weapon-block-wrapper').classList.add('weapon-block-invis');
		}
	};

	return (
		<>
			<Buttons toggleFunction={[toggleWeaponVisibility, toggleCharacterVisibility, toggleInventoryVisibility]} />
			<FarmItemWrapper />
			<CharacterCardsWrapper toggleFunction={toggleCharacterVisibility} />
			<WeaponCardsWrapper toggleFunction={toggleWeaponVisibility} />
			<MaterialCardsWrapper toggleFunction={toggleInventoryVisibility} />
			<AddItemForm />
		</>
	);
}

export default Home;