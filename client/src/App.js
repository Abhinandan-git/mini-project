import Buttons from './components/Buttons';
import MaterialCard from './components/MaterialCard';

function App() {
	return (
		<>
			<Buttons />
			<MaterialCard name='1001' defaultValue='0' rarity='4' imageName='ascension_materials/normal_drops/WanderersBloomingFlower.png' />
			<MaterialCard name='1002' defaultValue='0' rarity='3' imageName='ascension_materials/normal_drops/TreasuredFlower.png' />
			<MaterialCard name='1003' defaultValue='0' rarity='2' imageName='ascension_materials/normal_drops/AFlowerYettoBloom.png' />
		</>
	);
}

export default App;