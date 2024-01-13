const bcrypt = require('bcrypt');

const charAdd = () => {
	alert('charAdd');
};

const weaponAdd = () => {
	alert('weaponAdd');
};

const Compare = (first_object, second_object) => {
	if (first_object.key < second_object.key) {
		return -1;
	}
	if (first_object.key > second_object.key) {
		return 1;
	}
	return 0;
};

const CharacterCompare = (first_object, second_object) => {
	if (first_object.name_key < second_object.name_key) {
		return -1;
	}
	if (first_object.name_key > second_object.name_key) {
		return 1;
	}
	return 0;
};

const WeaponCompare = (first_object, second_object) => {
	if (first_object.rarity_key < second_object.rarity_key) {
		return -1;
	}
	if (first_object.rarity_key > second_object.rarity_key) {
		return 1;
	}
	return 0;
};

const hashPassword = async password => {
	return await bcrypt.hash(password, 10);
};

export { charAdd, weaponAdd, Compare, CharacterCompare, WeaponCompare, hashPassword };