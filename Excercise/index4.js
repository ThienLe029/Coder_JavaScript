function startWith(str){
	var newStr = str.split(' ');
	var keyWord = 'Java';
	for (var i of newStr) {
		if (i === keyWord) {
			return true;
		} else {
			return false;
		}
	}
}

console.log(startWith('Jav3 is best'));