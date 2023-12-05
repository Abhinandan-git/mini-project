import './css/Buttons.css';
import './css/common.css';

function Button({ onClick, id, children }) {
	return (
		<button onClick={onClick} className='rect-button' id={id}>
			<div className='rect-button-inner' />
			<div className='rect-button-border' />
			{children}
		</button>
	);
}

function Buttons({ toggleFunction }) {
	const toggleWeaponVisibility = toggleFunction[0];
	const toggleCharacterVisibility = toggleFunction[1];
	const toggleInventoryVisibility = toggleFunction[2];
	return (
		<div className='header-menu-bar'>
			<Button onClick={toggleCharacterVisibility} id='chr-add'>
				<div className='rect-button-label'>Add Character</div>
			</Button>
			<Button onClick={toggleWeaponVisibility} id='wpn-add'>
				<div className='rect-button-label'>Add Weapon</div>
			</Button>
			<Button onClick={toggleInventoryVisibility} id='inv-mng'>
				<div className='rect-button-label'>Manage Inventory</div>
			</Button>
		</div>
	);
}

export { Button, Buttons };
export default Buttons;