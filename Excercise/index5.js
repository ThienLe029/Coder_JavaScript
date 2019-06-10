function findMaxDiff(arr) {
	var lengthArray = arr.length;
	var arrDiff = [];
	if (lengthArray <= 1) {
		return 0;
	} else {
		for (var i=0;i<lengthArray-1;i++) {
			var diff = arr[i+1] - arr[i];
			arrDiff.push(Math.abs(diff));
		}
		var maxDiff = arrDiff[0];
		for (var j=1;j<arrDiff.length;j++) {
			if(arrDiff[j]>maxDiff) {
				maxDiff = arrDiff[j];
			} else {
				maxDiff = maxDiff;
			}
		}
		return maxDiff;
	}
}

console.log(findMaxDiff([10,2,111]));