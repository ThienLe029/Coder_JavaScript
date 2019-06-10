function equal_pt(str){ 
	var key1 = 'p';
	var key2 = 't';
	var num1 = 0;
	var num2 = 0;
	if (str.length === 0) {
		return 'empty string';
	} else {
		for (var i=0;i<str.length;i++) {
			if (str[i] === key1) {
				++num1;
			} else {
				if (str[i] === key2) {
					++num2;
				}
			}
		}
		if (num1 === num2) {
			return true;
		} else {
			return false;
		}
	}
}

var result = equal_pt('aaappppppp  ttttttt');
console.log(result);