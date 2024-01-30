const Compare = (first_object, second_object) => {
	if (first_object.key < second_object.key) {
		return -1;
	}
	if (first_object.key > second_object.key) {
		return 1;
	}
	return 0;
};

export { Compare };