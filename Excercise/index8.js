function first(array, n) {
	var newArr = [];
	if (n <= 0) {
		return newArr;
	} else {
		if (n >= array.length) {
			return array;
		} else {
			for (var i=0;i<n;i++) {
				newArr[i] = array.shift();
			}
		}
	}
	return newArr;
}

console.log(first([2,3,4,5,6,7,8,9], 11));