import { charAdd, weaponAdd, inventoryManage } from './Functions.js';
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

function Buttons() {
	return (
		<div className='menu-bar'>
			<Button onClick={charAdd} id='chr-add'>
				<div className='rect-button-label'>Add Character</div>
			</Button>
			<Button onClick={weaponAdd} id='wpn-add'>
				<div className='rect-button-label'>Add Weapon</div>
			</Button>
			<Button onClick={inventoryManage} id='inv-mng'>
				<div className='rect-button-label'>Manage Inventory</div>
			</Button>
		</div>
	);
}

export { Button, Buttons };
export default Buttons;