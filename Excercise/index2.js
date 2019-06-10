function capitalize(str) {
	var newStr = str.split(" ");
	var arr = [];
	for (var i of newStr) {
		var newChar = i.charAt(0).toUpperCase() + i.slice(1);
		arr.push(newChar);
	}
	return arr.join(' ');
}
 var result = capitalize('Thien le viet');
 console.log(result);