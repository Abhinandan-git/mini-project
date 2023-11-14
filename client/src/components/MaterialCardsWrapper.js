import MaterialCard from './MaterialCard';
import { inventorySave } from './Functions';
import { Button } from './Buttons';
import './css/MaterialCardsWrapper.css';

function MaterialCardsWrapper() {
	const image = [
		{ src: 'ascension_materials/common/gems/AgnidusAgateGemstone.png', rarity: 5 },
		{ src: 'ascension_materials/common/gems/AgnidusAgateChunk.png', rarity: 4 },
		{ src: 'ascension_materials/common/gems/AgnidusAgateFragment.png', rarity: 3 },
		{ src: 'ascension_materials/common/gems/AgnidusAgateSliver.png', rarity: 2 },
		
		{ src: 'ascension_materials/common/gems/NagadusEmeraldGemstone.png', rarity: 5 },
		{ src: 'ascension_materials/common/gems/NagadusEmeraldChunk.png', rarity: 4 },
		{ src: 'ascension_materials/common/gems/NagadusEmeraldFragment.png', rarity: 3 },
		{ src: 'ascension_materials/common/gems/NagadusEmeraldSliver.png', rarity: 2 },
		
		{ src: 'ascension_materials/common/gems/PrithivaTopazGemstone.png', rarity: 5 },
		{ src: 'ascension_materials/common/gems/PrithivaTopazChunk.png', rarity: 4 },
		{ src: 'ascension_materials/common/gems/PrithivaTopazFragment.png', rarity: 3 },
		{ src: 'ascension_materials/common/gems/PrithivaTopazSliver.png', rarity: 2 },
		
		{ src: 'ascension_materials/common/gems/ShivadaJadeGemstone.png', rarity: 5 },
		{ src: 'ascension_materials/common/gems/ShivadaJadeChunk.png', rarity: 4 },
		{ src: 'ascension_materials/common/gems/ShivadaJadeFragment.png', rarity: 3 },
		{ src: 'ascension_materials/common/gems/ShivadaJadeSliver.png', rarity: 2 },
		
		{ src: 'ascension_materials/common/gems/VajradaAmethystGemstone.png', rarity: 5 },
		{ src: 'ascension_materials/common/gems/VajradaAmethystChunk.png', rarity: 4 },
		{ src: 'ascension_materials/common/gems/VajradaAmethystFragment.png', rarity: 3 },
		{ src: 'ascension_materials/common/gems/VajradaAmethystSliver.png', rarity: 2 },

		{ src: 'ascension_materials/common/gems/VarunadaLazuriteGemstone.png', rarity: 5 },
		{ src: 'ascension_materials/common/gems/VarunadaLazuriteChunk.png', rarity: 4 },
		{ src: 'ascension_materials/common/gems/VarunadaLazuriteFragment.png', rarity: 3 },
		{ src: 'ascension_materials/common/gems/VarunadaLazuriteSliver.png', rarity: 2 },

		{ src: 'ascension_materials/common/gems/VayudaTurquoiseGemstone.png', rarity: 5 },
		{ src: 'ascension_materials/common/gems/VayudaTurquoiseChunk.png', rarity: 4 },
		{ src: 'ascension_materials/common/gems/VayudaTurquoiseFragment.png', rarity: 3 },
		{ src: 'ascension_materials/common/gems/VayudaTurquoiseSliver.png', rarity: 2 }
	]

	const inventory = () => {
		let inventoryList = [];
		for (let index = 0; index < image.length; index++) {
			inventoryList.push(
				<MaterialCard key={index} name={index} defaultValue={0} rarity={image[index].rarity} imageName={image[index].src}></MaterialCard>
			);
		}
		return inventoryList;
	};

	return (
		<div className='inventory-wrapper' id='inventory-wrapper'>
			<div className='inventory-body'>
				<div className='save-button-wrapper'>
					<Button onClick={inventorySave} id='inven-save'>
						<div className='rect-button-label'>Save & Close</div>
					</Button>
				</div>
				<div className='flex-body'>
					<div className='flex-scroll'>
						<div className='flex-wrapper'>
							{inventory()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MaterialCardsWrapper;